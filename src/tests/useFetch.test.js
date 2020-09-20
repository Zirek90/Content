import React from "react";
import { useFetch } from "../customHooks/useFetch";
import { renderHook } from "@testing-library/react-hooks";
import { render } from "@testing-library/react";
import { testMock } from "./mock";
import App from "../App";

jest.mock("../customHooks/useFetch");

describe("useFetch", () => {
  it("Should return loading state", async () => {
    useFetch.mockReturnValue({
      loading: true,
      data: null,
      errors: null,
    });

    const { result } = renderHook(() => useFetch());
    const { container } = render(<App />);

    expect(result.current.loading).toBe(true);
    expect(result.current.errors).toBe(null);
    expect(result.current.data).toBe(null);

    expect(container).toHaveTextContent("Please wait. Loading content");
  });

  it("Should return data", async () => {
    useFetch.mockReturnValue({
      loading: false,
      data: testMock,
      errors: null,
    });

    const { result } = renderHook(() => useFetch());

    expect(result.current.loading).toBe(false);
    expect(result.current.errors).toBe(null);
    expect(result.current.data).toBe(testMock);
  });

  it("Should return error state", async () => {
    useFetch.mockReturnValue({
      loading: false,
      data: null,
      errors: {
        description: "Error occured",
      },
    });

    const { result } = renderHook(() => useFetch());
    const { container } = render(<App />);

    expect(result.current.loading).toBe(false);
    expect(result.current.errors).toEqual({ description: "Error occured" });
    expect(result.current.data).toBe(null);

    expect(container).toHaveTextContent(
      "Ops seems like there is some problem. Please reload page"
    );
  });
});
