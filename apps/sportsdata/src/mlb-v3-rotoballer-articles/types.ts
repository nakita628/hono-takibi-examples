type PlayerInfo = {
  Name?: (string | null) | undefined
  PlayerID?: number | undefined
  Position?: (string | null) | undefined
  Team?: (string | null) | undefined
  TeamID?: (number | null) | undefined
}
type Article = {
  ArticleID?: number | undefined
  Author?: (string | null) | undefined
  Content?: (string | null) | undefined
  Players?: PlayerInfo[] | undefined
  Source?: (string | null) | undefined
  TermsOfUse?: (string | null) | undefined
  Title?: (string | null) | undefined
  Updated?: (string | null) | undefined
  Url?: (string | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/:format/RotoBallerArticles': {
      $get: {
        input: { param: { format: 'xml' | 'json' } }
        output: Article[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/RotoBallerArticlesByDate/:date': {
      $get: {
        input: { param: { format: 'xml' | 'json'; date: string } }
        output: Article[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/RotoBallerArticlesByPlayerID/:playerid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; playerid: string } }
        output: Article[]
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
