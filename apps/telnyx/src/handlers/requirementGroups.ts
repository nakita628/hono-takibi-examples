import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRequirementGroupsIdRoute,
  getExternalRequirementsRegulatoryRequirementIdSubNumberOrdersSubNumberOrderIdRoute,
  getRequirementGroupsIdRoute,
  getRequirementGroupsRoute,
  patchRequirementGroupsIdRoute,
  postExternalRequirementsRegulatoryRequirementIdSubNumberOrdersSubNumberOrderIdRoute,
  postNumberOrderPhoneNumbersIdRequirementGroupRoute,
  postRequirementGroupsIdSubmitForApprovalRoute,
  postRequirementGroupsRoute,
  postSubNumberOrdersIdRequirementGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const requirementGroupsHandler = app
  .openapi(
    getExternalRequirementsRegulatoryRequirementIdSubNumberOrdersSubNumberOrderIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postExternalRequirementsRegulatoryRequirementIdSubNumberOrdersSubNumberOrderIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postNumberOrderPhoneNumbersIdRequirementGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRequirementGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRequirementGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRequirementGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRequirementGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRequirementGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRequirementGroupsIdSubmitForApprovalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubNumberOrdersIdRequirementGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
