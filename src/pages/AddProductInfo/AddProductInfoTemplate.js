import React, { useState } from 'react';
import styled from 'styled-components';
import AddProductInfoForm from './AddProductInfoForm';
import SetProductImage from './SetProductImage';
const AddProductInfoTemplate = () => {
  const [introImage, setIntroImg] = useState([]);
  const [recomArray, setRecomArray] = useState([]);
  const [init, Setinit] = useState(false);
  const [addProductInfoList, setAddProductInfoList] = useState([
    {
      header: '노출 기간 판매 설정',
      categories: ['상품 노출 기한', '상품 판매 기한'],
    },
    {
      header: '상품 기본 정보',
      categories: [
        '카테고리',
        '필터 태그',
        '상품명',
        '상품구성소개 정보*',
        '상품 썸네일',
        '상품 대표 이미지',
        '상품 총 재고 *',
      ],
    },
    { header: '상품 옵션', categories: [] },
    {
      header: '상품 소개 이미지',
      categories: [],
    },
    {
      header: '구매자 추천 이미지',
      categories: [],
    },
    { header: '상품 정보 고시', categories: [] },
    {
      header: '상품 배송 설정',
      categories: [
        '사용자 배송일 출발일 지정',
        '방문 수령',
        '선 주문 예약 배송',
      ],
    },
    { header: '상품 혜택 허용 설정', categories: ['마일리지 적립'] },
    { header: '기타', categories: ['감사카드 제공'] },
  ]);

  return (
    <Container>
      {addProductInfoList.map(({ header, categories }, index) => {
        return <AddProductInfoForm header={header} categories={categories} />;
      })}
    </Container>
  );
};

const Container = styled.div``;

export default AddProductInfoTemplate;
