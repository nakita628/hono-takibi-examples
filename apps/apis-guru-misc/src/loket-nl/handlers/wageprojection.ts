import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWageprojectionCladataCollectiveLaborAgreementIdRoute,
  getWageprojectionCollectivelaboragreementsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const wageprojectionHandler = app
  .openapi(getWageprojectionCladataCollectiveLaborAgreementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWageprojectionCollectivelaboragreementsRoute, (c) => {
    throw new Error('Not implemented')
  })
