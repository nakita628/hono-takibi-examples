import { OpenAPIHono } from '@hono/zod-openapi'
import { postProjectsProjectIdImagesImageIdRegionproposalsRoute } from '../routes'

const app = new OpenAPIHono()

export const imageRegionProposalApiHandler = app.openapi(
  postProjectsProjectIdImagesImageIdRegionproposalsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
