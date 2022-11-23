import styled from 'styled-components'

export const StyledFooter = styled.footer`
background-color: ${({ theme }) => theme.colors.footer};
color: #fff;
padding: 100px 0 60px;
ul {
  list-style-type: none;
}
ul li {
  margin-left: 100px;
  margin-bottom: 20px;
}
p {
  margin-right: 50px;
  text-align: right;
}
@media (max-width: ${({ theme }) => theme.mobile}) {
  text-align: center;
  ul {
    padding: 0;
  }
  ul li {
      margin-left: 0;
  }
  p {
    margin-right: 0;
    text-align: center;
  }
}
`