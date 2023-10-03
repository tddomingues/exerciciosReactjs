//coloque o type em um arquivo separado, para evitar possíveis erros
//lembrando que o type é obrigatorio, pois é com ele que será referenciado o tipo de alteração no state do reducer
//vai importando nos arquivos essa variável
const UserActionTypes = {
    LOGIN: 'user/login',
    LOGOUT: 'user/logout'
}

export default UserActionTypes