export function waitInSeconds(seconds: number): Promise<unknown> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, seconds * 1000)
  })
}
