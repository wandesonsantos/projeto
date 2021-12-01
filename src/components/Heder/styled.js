import styled from "styled-components";


export const AreaHeader = styled.div`
height :50px;
background-color:#4d1b60;
color: #fff;

    
    .container{
        padding: 5px 20px;
        display: flex;
        align-items: center;

    }
        .logo{
            flex: 1;
             li{
                list-style:none;
                margin-left:30px;
                font-size:20px;
                font-family: 'Montserrat', sans-serif;
             }
             img{
                width:50px;

            }



        }
        nav{

            ul{
                display:flex;
            }
                li{
                    list-style:none;
                    margin-left:30px;
                    font-size:20px;
                    font-family: 'Montserrat', sans-serif;


                    a{
                        text-decoration: none;
                        color: white;
                        
                        &:hover{
                            color:#fff;
                        }
                    }


                }

        }

`;
export const BtnDefaultIcons = styled.button`
    display: flex;
    align-items: center;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    border: 0px;
    outline: none;
    font-size: 16px;
    font-weight: bold;
    margin-bottom:15px;
    transition: 0.4s;

    &:hover{
        background-color: #ccc;
    }

    .center{
        text-align: center;
        width:100%;
    }

`;
export const BtnDefaut = styled(BtnDefaultIcons)`
    background-color: #4d1b60;
    color: %fff;
    display: inline;

    &:hover{
        backgroun-color: #4e129c;

    }


`;
;