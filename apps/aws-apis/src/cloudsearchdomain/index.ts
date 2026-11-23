import { OpenAPIHono } from '@hono/zod-openapi'
import {
  get20130101SearchFormatSdkPrettyTrueQRoute,
  get20130101SuggestFormatSdkPrettyTrueQSuggesterRoute,
  post20130101DocumentsBatchFormatSdkContentTypeRoute,
} from './routes'
import {
  get20130101SearchFormatSdkPrettyTrueQRouteHandler,
  get20130101SuggestFormatSdkPrettyTrueQSuggesterRouteHandler,
  post20130101DocumentsBatchFormatSdkContentTypeRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    get20130101SearchFormatSdkPrettyTrueQRoute,
    get20130101SearchFormatSdkPrettyTrueQRouteHandler,
  )
  .openapi(
    get20130101SuggestFormatSdkPrettyTrueQSuggesterRoute,
    get20130101SuggestFormatSdkPrettyTrueQSuggesterRouteHandler,
  )
  .openapi(
    post20130101DocumentsBatchFormatSdkContentTypeRoute,
    post20130101DocumentsBatchFormatSdkContentTypeRouteHandler,
  )

export default app
