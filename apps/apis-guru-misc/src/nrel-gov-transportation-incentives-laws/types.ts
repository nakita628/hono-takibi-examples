type Inputs = { [x: string]: unknown }
type Metadata = { count?: number | undefined; version: string }
type Category = { category_type: string; code: string; title: string }
type Poc = {
  agency?: string | undefined
  email?: string | undefined
  fax?: string | undefined
  name: string
  state: string
  telephone?: string | undefined
  title?: string | undefined
  web_page?: string | undefined
}
type LawReference = { description: string; url: string }
type LawTopics = { id: number; sort_order: number; title: string }
type LawType = { code: string; id: number; title: string }
type Law = {
  agency?: string | undefined
  amended_date?: string | undefined
  archived_date?: string | undefined
  categories: Category[]
  contacts?: Poc[] | undefined
  enacted_date?: string | undefined
  expired_date?: string | undefined
  id: number
  is_recent?: boolean | undefined
  plaintext: string
  recent_update_or_new?: string | undefined
  references: LawReference[]
  repealed_date?: string | undefined
  seq_num?: number | undefined
  significant_update_date?: string | undefined
  state: string
  text: string
  title: string
  topics: LawTopics[]
  type: string
  types: LawType[]
}
type LawsResponse = { inputs: Inputs; metadata: Metadata; result: Law[] }
type FullCategory = {
  category_type: string
  code: string
  help_text?: string | undefined
  sort_order: string
  title: string
}
type CategoryResults = { inputs: Inputs; metadata: Metadata; result: FullCategory[] }
type PocResults = { inputs: Inputs; metadata: Metadata; result: Poc[] }
type LawResult = { inputs: Inputs; metadata: Metadata; result: Law }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1.:output_format': {
      $get: {
        input: { param: { output_format: 'json' | 'xml' | 'csv' } } & {
          query: {
            api_key: string
            limit?: number | undefined
            jurisdiction?: string | undefined
            technology?: string | undefined
            incentive_type?: string | undefined
            regulation_type?: string | undefined
            user_type?: string | undefined
            poc?: boolean | undefined
            recent?: boolean | undefined
            expired?: boolean | undefined
            law_type?: string | undefined
            keyword?: string | undefined
            local?: boolean | undefined
          }
        }
        output: LawsResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/category-list.:output_format': {
      $get: {
        input: { param: { output_format: 'json' | 'xml' } } & {
          query: {
            api_key: string
            type?: 'tech' | 'user' | 'regulation' | 'incentive' | undefined
          }
        }
        output: CategoryResults
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/pocs.:output_format': {
      $get: {
        input: { param: { output_format: 'json' | 'xml' } } & {
          query: { api_key: string; jurisdiction: string }
        }
        output: PocResults
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v1/:id.:output_format': {
      $get: {
        input: { param: { output_format: 'json' | 'xml'; id: number } } & {
          query: { api_key: string; poc?: boolean | undefined; expired?: boolean | undefined }
        }
        output: LawResult
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
