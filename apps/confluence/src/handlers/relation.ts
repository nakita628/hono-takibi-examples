import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyRoute,
  getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeRoute,
  getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyRoute,
  getWikiRestApiRelationRelationNameToTargetTypeTargetKeyFromSourceTypeRoute,
  putWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const relationHandler = app
  .openapi(getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteWikiRestApiRelationRelationNameFromSourceTypeSourceKeyToTargetTypeTargetKeyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getWikiRestApiRelationRelationNameToTargetTypeTargetKeyFromSourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
