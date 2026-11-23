type News = {
  Author?: (string | null) | undefined
  Categories?: (string | null) | undefined
  Content?: (string | null) | undefined
  NewsID?: number | undefined
  OriginalSource?: (string | null) | undefined
  OriginalSourceUrl?: (string | null) | undefined
  PlayerID?: (number | null) | undefined
  PlayerID2?: (number | null) | undefined
  Source?: (string | null) | undefined
  Team?: (string | null) | undefined
  Team2?: (string | null) | undefined
  TeamID?: (number | null) | undefined
  TeamID2?: (number | null) | undefined
  TermsOfUse?: (string | null) | undefined
  TimeAgo?: (string | null) | undefined
  Title?: (string | null) | undefined
  Updated?: (string | null) | undefined
  Url?: (string | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/:format/RotoBallerPremiumNews': {
      $get: {
        input: { param: { format: 'xml' | 'json' } }
        output: News[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/RotoBallerPremiumNewsByDate/:date': {
      $get: {
        input: { param: { format: 'xml' | 'json'; date: string } }
        output: News[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/RotoBallerPremiumNewsByPlayerID/:playerid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; playerid: string } }
        output: News[]
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
