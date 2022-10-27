export interface TeslaSection {
  who: string
  text: string
  link: string
  id: string
  buttonList: string[]
}

export interface TeslaResult {
  tesla: TeslaSection[]
}
