export function urlObjectType(
    name: string
) {
    if (name === "PEMountTag") {
        return `https://github.com/Pirate-Era-Network/PE-Megizen/blob/main/src/main/java/org/udder/pemounts/tags/${name}.java`
    }
    return `https://github.com/Pirate-Era-Network/PE-Megizen/blob/main/src/main/java/net/tickmc/megizen/bukkit/objects/${name}.java`
}
