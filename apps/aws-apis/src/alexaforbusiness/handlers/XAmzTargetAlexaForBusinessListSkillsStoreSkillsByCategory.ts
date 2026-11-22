import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessListSkillsStoreSkillsByCategoryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessListSkillsStoreSkillsByCategoryHandler = app.openapi(
  postXAmzTargetAlexaForBusinessListSkillsStoreSkillsByCategoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
