const hasPrefix = (message: string, prefix: string) => {
    return message.startsWith(prefix)
}

const isCommand = (command: string, commands: string[]) => {
    return commands.includes(command)
}

export { isCommand, hasPrefix };