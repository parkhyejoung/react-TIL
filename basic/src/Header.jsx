import './Header.css';
function Header(){
    const num1 = 5
    const num2 = 3
    const r1 = '안녕하세요'
    const r2 = 'jsx'
    let isLogin = false;
    return (
        <header>
            <h1 style={{backgroundColor:'yellow', color:'red'}}>logo</h1>
            <p style={{color:"pink"}}>숫자 {num1}에서 {num2}을 뺀 결과 {num1-num2}</p>
            <p>{r1},{r2} 출력결과 {r1+r2}</p>
            <p>{isLogin ? '로그인 성공' : '로그인 필요'}</p>
        </header>
        /* const inLogin = false; 일때 p태그에 '로그인 필요' 출력하기 , 반대로 true면 p 태그에 '로그인성공' 출력하기 */
    )
}

export default Header;