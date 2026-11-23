type CardResume = { id: string; image?: string | undefined; localId: string; name: string }
type WeakRes = { type: string; value?: string | undefined }[]
type SetResume = {
  cardCount: { official: number; total: number }
  id: string
  logo?: string | undefined
  name: string
  symbol?: string | undefined
}
type Card = {
  abilities?:
    | { effect?: string | undefined; name?: string | undefined; type?: string | undefined }[]
    | undefined
  attacks?:
    | {
        cost?: string[] | undefined
        damage?: number | undefined
        effect?: string | undefined
        name: string
      }[]
    | undefined
  category: string
  description?: string | undefined
  dexId?: number[] | undefined
  energyType?: string | undefined
  evolveFrom?: string | undefined
  hp?: number | undefined
  id: string
  illustrator?: string | undefined
  image?: string | undefined
  item?: { effect: string; name: string } | undefined
  legal: { expanded?: boolean | undefined; standard?: boolean | undefined }
  level?: number | undefined
  localId: string
  name: string
  rarity: string
  regulationMark?: string | undefined
  resistances?: WeakRes[] | undefined
  retreat?: number | undefined
  set: SetResume
  stage?: string | undefined
  suffix?: string | undefined
  trainerType?: string | undefined
  types?: string[] | undefined
  variants?:
    | { firstEdition: boolean; holo: boolean; normal: boolean; reverse: boolean; wPromo: boolean }
    | undefined
  weaknesses?: WeakRes[] | undefined
}
type StringEndpoint = { cards: CardResume[]; name: string }
type SerieResume = { id: string; logo?: string | undefined; name: string }
type Serie = { id: string; logo?: string | undefined; name: string; sets: SetResume[] }
type Set = {
  cardCount: {
    firstEd?: number | undefined
    holo?: number | undefined
    normal?: number | undefined
    official: number
    reverse?: number | undefined
    total: number
  }
  cards: CardResume[]
  id: string
  logo?: string | undefined
  name: string
  symbol?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  { '/cards': { $get: { input: {}; output: CardResume[]; outputFormat: 'json'; status: 200 } } } & {
    '/cards/:cardId': {
      $get:
        | { input: { param: { cardId: string } }; output: Card; outputFormat: 'json'; status: 200 }
        | { input: { param: { cardId: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/categories': { $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/categories/:category': {
      $get:
        | {
            input: { param: { category: string } }
            output: StringEndpoint
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { category: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/dex-ids': { $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/dex-ids/:dexId': {
      $get:
        | {
            input: { param: { dexId: string } }
            output: CardResume[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { dexId: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/energy-types': { $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/energy-types/:energy-type': {
      $get:
        | {
            input: { param: { 'energy-type': string } }
            output: CardResume[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'energy-type': string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & { '/hp': { $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 } } } & {
    '/hp/:hp': {
      $get:
        | {
            input: { param: { hp: string } }
            output: StringEndpoint
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { hp: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/illustrators': { $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/illustrators/:illustrator': {
      $get:
        | {
            input: { param: { illustrator: string } }
            output: StringEndpoint
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { illustrator: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/rarities': { $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/rarities/:rarity': {
      $get:
        | {
            input: { param: { rarity: string } }
            output: StringEndpoint
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { rarity: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/regulation-marks': {
      $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/regulation-marks/:regulation-mark': {
      $get:
        | {
            input: { param: { 'regulation-mark': string } }
            output: CardResume[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'regulation-mark': string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/retreats': { $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/retreats/:retreat': {
      $get:
        | {
            input: { param: { retreat: string } }
            output: StringEndpoint
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { retreat: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/series': { $get: { input: {}; output: SerieResume[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/series/:serie': {
      $get:
        | { input: { param: { serie: string } }; output: Serie; outputFormat: 'json'; status: 200 }
        | { input: { param: { serie: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/sets': { $get: { input: {}; output: SetResume[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/sets/:set': {
      $get:
        | { input: { param: { set: string } }; output: Set; outputFormat: 'json'; status: 200 }
        | { input: { param: { set: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/sets/:set/:cardLocalId': {
      $get:
        | {
            input: { param: { set: string; cardLocalId: string } }
            output: Card
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { set: string; cardLocalId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/stages': { $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/stages/:stage': {
      $get:
        | {
            input: { param: { stage: string } }
            output: CardResume[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { stage: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/suffixes': { $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/suffixes/:suffix': {
      $get:
        | {
            input: { param: { suffix: string } }
            output: CardResume[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { suffix: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/trainer-types': { $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/trainer-types/:trainer-type': {
      $get:
        | {
            input: { param: { 'trainer-type': string } }
            output: CardResume[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { 'trainer-type': string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & { '/types': { $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 } } } & {
    '/types/:type': {
      $get:
        | {
            input: { param: { type: string } }
            output: CardResume[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { type: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/variants': { $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/variants/:variant': {
      $get:
        | {
            input: { param: { variant: string } }
            output: CardResume[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { variant: string } }; output: {}; outputFormat: string; status: 404 }
    }
  },
  '/'
>
export default routes
