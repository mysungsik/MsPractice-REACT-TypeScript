import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("render posts if request succeeds", async () => {
    // http 요청의 결과를 테스트
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });

    // 준비
    render(<Async />);

    // "액션"이 필요 없다 그저 렌더만 하면되니까

    // "확인"
    const listItemElements = await screen.findAllByRole("listitem"); // 리스트아이템 전체 선택
    expect(listItemElements).not.toHaveLength(0); // 길이가 0이 아님을 확인
  });
});
