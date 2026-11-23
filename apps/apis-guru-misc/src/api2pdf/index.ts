import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getChromeUrlRoute,
  getWkhtmltopdfUrlRoute,
  getZebraRoute,
  postChromeHtmlRoute,
  postChromeUrlRoute,
  postLibreofficeConvertRoute,
  postMergeRoute,
  postWkhtmltopdfHtmlRoute,
  postWkhtmltopdfUrlRoute,
} from './routes'
import {
  getChromeUrlRouteHandler,
  getWkhtmltopdfUrlRouteHandler,
  getZebraRouteHandler,
  postChromeHtmlRouteHandler,
  postChromeUrlRouteHandler,
  postLibreofficeConvertRouteHandler,
  postMergeRouteHandler,
  postWkhtmltopdfHtmlRouteHandler,
  postWkhtmltopdfUrlRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postChromeHtmlRoute, postChromeHtmlRouteHandler)
  .openapi(getChromeUrlRoute, getChromeUrlRouteHandler)
  .openapi(postChromeUrlRoute, postChromeUrlRouteHandler)
  .openapi(postLibreofficeConvertRoute, postLibreofficeConvertRouteHandler)
  .openapi(postMergeRoute, postMergeRouteHandler)
  .openapi(postWkhtmltopdfHtmlRoute, postWkhtmltopdfHtmlRouteHandler)
  .openapi(getWkhtmltopdfUrlRoute, getWkhtmltopdfUrlRouteHandler)
  .openapi(postWkhtmltopdfUrlRoute, postWkhtmltopdfUrlRouteHandler)
  .openapi(getZebraRoute, getZebraRouteHandler)

export default app
