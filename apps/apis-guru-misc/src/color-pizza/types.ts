type PossibleLists =
  | 'default'
  | 'bestOf'
  | 'wikipedia'
  | 'french'
  | 'ridgway'
  | 'risograph'
  | 'basic'
  | 'chineseTraditional'
  | 'html'
  | 'japaneseTraditional'
  | 'leCorbusier'
  | 'nbsIscc'
  | 'ntc'
  | 'osxcrayons'
  | 'ral'
  | 'sanzoWadaI'
  | 'thesaurus'
  | 'werner'
  | 'windows'
  | 'x11'
  | 'xkcd'
type Color = {
  distance?: number | undefined
  hex?: string | undefined
  hsl?: { h?: number | undefined; l?: number | undefined; s?: number | undefined } | undefined
  lab?: { a?: number | undefined; b?: number | undefined; l?: number | undefined } | undefined
  luminance?: number | undefined
  luminanceWCAG?: number | undefined
  name?: string | undefined
  requestedHex?: string | undefined
  rgb?: { b?: number | undefined; g?: number | undefined; r?: number | undefined } | undefined
  svg?: string | undefined
  svgNamed?: string | undefined
  swatchImg?: { [x: string]: unknown } | undefined
}
type Error = { message?: string | undefined; status?: string | undefined }
type ListDescription = {
  colorCount?: number | undefined
  description?: string | undefined
  key?: string | undefined
  license?: string | undefined
  source?: string | undefined
  title?: string | undefined
  url?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $get:
        | {
            input: {
              query: {
                list?: PossibleLists | undefined
                values?: string | undefined
                noduplicates?: boolean | undefined
              }
            }
            output: { colors?: Color[] | undefined; paletteTitle?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                list?: PossibleLists | undefined
                values?: string | undefined
                noduplicates?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/lists/': {
      $get:
        | {
            input: {}
            output: {
              listDescriptions?:
                | {
                    basic?: ListDescription | undefined
                    bestOf?: ListDescription | undefined
                    chineseTraditional?: ListDescription | undefined
                    default?: ListDescription | undefined
                    french?: ListDescription | undefined
                    html?: ListDescription | undefined
                    japaneseTraditional?: ListDescription | undefined
                    leCorbusier?: ListDescription | undefined
                    nbsIscc?: ListDescription | undefined
                    ntc?: ListDescription | undefined
                    osxcrayons?: ListDescription | undefined
                    ral?: ListDescription | undefined
                    ridgway?: ListDescription | undefined
                    risograph?: ListDescription | undefined
                    sanzoWadaI?: ListDescription | undefined
                    thesaurus?: ListDescription | undefined
                    werner?: ListDescription | undefined
                    wikipedia?: ListDescription | undefined
                    windows?: ListDescription | undefined
                    x11?: ListDescription | undefined
                    xkcd?: ListDescription | undefined
                  }
                | undefined
              localAvailableColorNameLists?: string[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/names/': {
      $get:
        | {
            input: { query: { name: string; list?: PossibleLists | undefined } }
            output: { colors?: Color[] | undefined; paletteTitle?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { name: string; list?: PossibleLists | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/swatch/': {
      $get:
        | {
            input: { query: { color: string; name?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { color: string; name?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
