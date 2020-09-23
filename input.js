let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (data) => {
    conn.write(handleUserInput(data))
  })
  return stdin;
}

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'a') {
    return ("Move: left")
  } else if (key === 'w') {
    return ("Move: up")
  } else if (key === 's') {
    return ("Move: down")
  } else if (key === 'd') {
    return ("Move: right")
  } else if (key === 'g') {
    return ('Say: GG WP')
  } else if (key === 't') {
    return ('Say: Follow me on Twitch')
  }
  
}

module.exports = {setupInput}