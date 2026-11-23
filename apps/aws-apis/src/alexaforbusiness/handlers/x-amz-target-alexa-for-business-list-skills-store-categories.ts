import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessListSkillsStoreCategoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessListSkillsStoreCategoriesHandler = app.openapi(
  postXAmzTargetAlexaForBusinessListSkillsStoreCategoriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
