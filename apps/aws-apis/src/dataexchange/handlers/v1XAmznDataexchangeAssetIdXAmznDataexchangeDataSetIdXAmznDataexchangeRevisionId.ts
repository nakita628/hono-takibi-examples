import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1XAmznDataexchangeAssetIdXAmznDataexchangeDataSetIdXAmznDataexchangeRevisionIdRoute } from '../routes'

const app = new OpenAPIHono()

export const v1XAmznDataexchangeAssetIdXAmznDataexchangeDataSetIdXAmznDataexchangeRevisionIdHandler =
  app.openapi(
    postV1XAmznDataexchangeAssetIdXAmznDataexchangeDataSetIdXAmznDataexchangeRevisionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
