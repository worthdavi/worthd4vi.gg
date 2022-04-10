const hasPrefix = (message, prefix) => {
    return message.startsWith(prefix)
}

const isCommand = (command, commands) => {
    return commands.includes(command)
}

export { isCommand, hasPrefix };