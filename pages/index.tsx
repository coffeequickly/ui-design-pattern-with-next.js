import styled from '@emotion/styled';
import Link from 'next/link';

function HomePage(props: any) {
  return (
    <HomePageStyledComponent>
      <Link href={'/posts'}>Post 리스트로 이동</Link>
      <Link href={'/posts/1'}>1번 Post로 이동</Link>
    </HomePageStyledComponent>
  );
}

const HomePageStyledComponent = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export default HomePage;
