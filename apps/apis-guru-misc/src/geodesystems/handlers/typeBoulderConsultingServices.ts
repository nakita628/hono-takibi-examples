import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeBoulderConsultingServicesRoute } from '../routes'

const app = new OpenAPIHono()

export const typeBoulderConsultingServicesHandler = app.openapi(
  getRepositorySearchTypeBoulderConsultingServicesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
