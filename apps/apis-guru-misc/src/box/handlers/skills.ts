import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFilesFileIdMetadataGlobalBoxSkillsCardsRoute,
  getFilesFileIdMetadataGlobalBoxSkillsCardsRoute,
  postFilesFileIdMetadataGlobalBoxSkillsCardsRoute,
  putFilesFileIdMetadataGlobalBoxSkillsCardsRoute,
  putSkillInvocationsSkillIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const skillsHandler = app
  .openapi(deleteFilesFileIdMetadataGlobalBoxSkillsCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdMetadataGlobalBoxSkillsCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesFileIdMetadataGlobalBoxSkillsCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFilesFileIdMetadataGlobalBoxSkillsCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSkillInvocationsSkillIdRoute, (c) => {
    throw new Error('Not implemented')
  })
