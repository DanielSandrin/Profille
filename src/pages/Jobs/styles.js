import styled from 'styled-components';

export const Container = styled.div`
  flex:1; 
`;

export const Table = styled.table`

  width: 100%;
  border-collapse: separate;
  border-spacing: 0 8px;
  margin-top: -8px;

  table,td:last-child{
    border-bottom-right-radius: 9px;
    border-top-right-radius: 9px;
  }
  table,td:first-child{
    border-bottom-left-radius: 9px;
    border-top-left-radius: 9px;
  }

  thead, th{
    padding: 20px;
    color: #fff;
    background-color:#353636;

    a{
      color: #fff;
    }

  }

  thead th:first-child{
    border-bottom-left-radius: 9px;
    border-top-left-radius: 9px;
  }

  thead th:last-child{
    border-bottom-right-radius: 9px;
    border-top-right-radius: 9px;
  }

  tbody td{
    padding: 30px;
    background-color:#353636;
    color: #fff;

    a{
      color: #fff;
      text-decoration: underline; 
    }
  }

  @media(max-width:697px){
    tbody td:last-child,td:nth-child(1), thead th:last-child, th:nth-child(1){
      display: none;
    }

    thead th, tbody td{
      font-size: 28px;
    }

    table{
      width: 30%;
    }

  }
`;
