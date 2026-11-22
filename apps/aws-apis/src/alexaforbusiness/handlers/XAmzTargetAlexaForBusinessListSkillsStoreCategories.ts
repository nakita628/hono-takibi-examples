import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessListSkillsStoreCategoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessListSkillsStoreCategoriesHandler = app.openapi(
  postXAmzTargetAlexaForBusinessListSkillsStoreCategoriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
