import React, { useState } from 'react';
import styled from 'styled-components';
import OptionSet from './OptionSet';

const SetProductOption = () => {
  const [arrayOptionSet, setArrayOptionSet] = useState([]);
  const [optionSetAddClickCount, setOptionSetAddClickCount] = useState(0);

  const clickShowAddOptionSet = () => {
    setOptionSetAddClickCount(optionSetAddClickCount + 1);
    console.log(optionSetAddClickCount);
    setArrayOptionSet(arrayOptionSet.concat([optionSetAddClickCount + 1]));
    console.log(arrayOptionSet);
  };

  return (
    <ProductOptionContainer>
      <Header>
        <OptionSetAddBtn onClick={clickShowAddOptionSet}>
          +옵션 세트 추가
        </OptionSetAddBtn>
      </Header>
      {arrayOptionSet.map((arrayOptionSetId, i) => {
        return (
          <OptionSet
            key={i}
            id={arrayOptionSetId}
            arrayOptionSet={arrayOptionSet}
            setArrayOptionSet={setArrayOptionSet}
          />
        );
      })}
    </ProductOptionContainer>
  );
};

const ProductOptionContainer = styled.div`
  margin: 0 10px;
  width: 100%;
`;

const Header = styled.header``;

const OptionSetAddBtn = styled.button`
  border-color: blue;
  border-radius: 4px;
  background-color: white;
  height: 50px;
  padding: 10px 20px;
  font-size: 18px;
`;

export default SetProductOption;
