import app from './app'
import {startConnection} from './database'

//Se escribe de mejor manera
async function main() {
    startConnection();
    await app.listen(app.get('port'));
    console.log('Server on port ', app.get('port'));
}

main();