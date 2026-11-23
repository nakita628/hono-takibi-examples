type Action =
  | {
      ignoreIfNotPresent?: boolean | undefined
      selector?: string | undefined
      value?: string | undefined
    }
  | {
      ignoreIfNotPresent?: boolean | undefined
      selector?: string | undefined
      value?: string | undefined
    }
  | {
      ignoreIfNotPresent?: boolean | undefined
      selector?: string | undefined
      skipLastIteration?: boolean | undefined
    }
  | {
      ignoreIfNotPresent?: boolean | undefined
      selector?: string | undefined
      skipLastIteration?: boolean | undefined
    }
  | {
      ignoreIfNotPresent?: boolean | undefined
      selector?: string | undefined
      skipLastIteration?: boolean | undefined
    }
  | { selector?: string | undefined }
  | { selector?: string | undefined }
  | { selector?: string | undefined }
  | { waitDelay?: string | undefined }
  | { script?: string | undefined }
  | { actions?: Action[] | undefined; times?: number | undefined }
  | { skipLastIteration?: boolean | undefined }
  | {
      scrollByPixels?: number | undefined
      scrollingElementSelector?: string | undefined
      selector?: string | undefined
      times?: number | undefined
    }
type InitialCookie = {
  domain?: string | undefined
  expirationDate?: number | undefined
  hostOnly?: boolean | undefined
  httpOnly?: boolean | undefined
  id?: number | undefined
  name?: string | undefined
  path?: string | undefined
  sameSite?: 'unspecified' | 'strict' | 'lax' | 'no_restriction' | undefined
  secure?: boolean | undefined
  session?: boolean | undefined
  storeID?: string | undefined
  value?: string | undefined
}
type Url2pdfrequest = {
  actions?: Action[] | undefined
  ignoreHTTPStatusErrCodes?: boolean | undefined
  initialCookies?: InitialCookie[] | undefined
  landscape?: boolean | undefined
  marginBottom?: number | undefined
  marginLeft?: number | undefined
  marginRight?: number | undefined
  marginTop?: number | undefined
  output?: 'buffer' | 'file' | undefined
  pageRanges?: string | undefined
  paperSize?: 'A3' | 'A4' | 'A5' | 'A6' | 'Letter' | 'Legal' | 'Tabloid' | undefined
  printBackground?: boolean | undefined
  printHeaderFooter?: boolean | undefined
  proxy?: string | undefined
  scale?: number | undefined
  url: string
  waitDelay?: number | undefined
}
type Url2screenshotrequest = {
  actions?: Action[] | undefined
  clipSelector?: string | undefined
  format?: 'png' | 'jpeg' | undefined
  fullPage?: boolean | undefined
  height?: number | undefined
  ignoreHTTPStatusErrCodes?: boolean | undefined
  initialCookies?: InitialCookie[] | undefined
  offsetx?: number | undefined
  offsety?: number | undefined
  output?: 'buffer' | 'file' | undefined
  printBackground?: boolean | undefined
  proxy?: string | undefined
  quality?: number | undefined
  scale?: number | undefined
  url: string
  waitDelay?: number | undefined
  width?: number | undefined
}
type Fetchrequest = {
  actions?: Action[] | undefined
  ignoreHTTPStatusErrCodes?: boolean | undefined
  initialCookies?: InitialCookie[] | undefined
  output?: 'buffer' | 'file' | undefined
  proxy?: string | undefined
  type: 'base' | 'chrome'
  url: string
  waitDelay?: number | undefined
}
type Paginator = { nextPageSelector?: string | undefined; pageNum?: number | undefined }
type Field = {
  attrs: ('text' | 'href' | 'src' | 'alt')[]
  details?:
    | {
        commonParent?: string | undefined
        fields: Field[]
        format: 'csv' | 'json' | 'jsonl' | 'excel' | 'xml'
        name: string
        paginator?: Paginator | undefined
        path?: boolean | undefined
        request?: Fetchrequest | undefined
      }
    | undefined
  filters?:
    | (
        | {
            name?:
              | 'trim'
              | 'normal'
              | 'uppercase'
              | 'lowercase'
              | 'capitalize'
              | 'concatinate'
              | undefined
          }
        | { name?: string | undefined; param?: string | undefined }
      )[]
    | undefined
  name: string
  selector: string
  type: 0 | 1 | 2
}
type Parserequest = {
  commonParent?: string | undefined
  fields: Field[]
  format: 'csv' | 'json' | 'jsonl' | 'excel' | 'xml'
  name: string
  paginator?: Paginator | undefined
  path?: boolean | undefined
  request?: Fetchrequest | undefined
}
type Serprequest = {
  fields?: Field[] | undefined
  format: 'csv' | 'json' | 'jsonl' | 'excel' | 'xml'
  name: string
  pageNum?: number | undefined
  proxy: string
  type: string
  url: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/convert/url/pdf': {
      $post: { input: { json: Url2pdfrequest }; output: File; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/convert/url/screenshot': {
      $post:
        | {
            input: { json: Url2screenshotrequest }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: Url2screenshotrequest }
            output: File
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/fetch': {
      $post: { input: { json: Fetchrequest }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/parse': {
      $post: {
        input: { json: Parserequest }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/serp': {
      $post: {
        input: { json: Serprequest }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
