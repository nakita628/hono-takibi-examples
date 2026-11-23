import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLabelGroupsGroupIdLabelsLabelIdRoute,
  deleteLabelGroupsGroupIdRoute,
  getLabelGroupsGroupIdLabelsRoute,
  getLabelGroupsGroupIdRoute,
  getLabelGroupsRoute,
  patchLabelGroupsGroupIdLabelsLabelIdRoute,
  patchLabelGroupsGroupIdRoute,
  postLabelGroupsGroupIdLabelsRoute,
  postLabelGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const labelGroupsHandler = app
  .openapi(postLabelGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLabelGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLabelGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchLabelGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLabelGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLabelGroupsGroupIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLabelGroupsGroupIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchLabelGroupsGroupIdLabelsLabelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLabelGroupsGroupIdLabelsLabelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
