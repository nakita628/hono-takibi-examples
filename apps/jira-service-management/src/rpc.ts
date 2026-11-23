import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getRestServicedeskapiAssetsWorkspace(
  args: InferRequestType<typeof client.rest.servicedeskapi.assets.workspace.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.servicedeskapi.assets.workspace.$get(args, options))
}

export async function postRestServicedeskapiCustomer(
  args: InferRequestType<typeof client.rest.servicedeskapi.customer.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.servicedeskapi.customer.$post(args, options))
}

export async function postRestServicedeskapiCustomerSkipPermissionCheck(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.customer)['skip-permission-check']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.customer['skip-permission-check'].$post(args, options),
  )
}

export async function putRestServicedeskapiCustomerUserAccountIdRevokePortalOnlyAccess(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.customer.user)[':accountId']['revoke-portal-only-access']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.customer.user[':accountId']['revoke-portal-only-access'].$put(
      args,
      options,
    ),
  )
}

export async function getRestServicedeskapiInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.rest.servicedeskapi.info.$get(undefined, options))
}

export async function getRestServicedeskapiInsightWorkspace(
  args: InferRequestType<typeof client.rest.servicedeskapi.insight.workspace.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.servicedeskapi.insight.workspace.$get(args, options))
}

export async function getRestServicedeskapiKnowledgebaseArticle(
  args: InferRequestType<typeof client.rest.servicedeskapi.knowledgebase.article.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.servicedeskapi.knowledgebase.article.$get(args, options))
}

export async function getRestServicedeskapiKnowledgebaseArticleViewPageId(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.knowledgebase.article.view)[':pageId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.knowledgebase.article.view[':pageId'].$get(args, options),
  )
}

export async function getRestServicedeskapiOrganization(
  args: InferRequestType<typeof client.rest.servicedeskapi.organization.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.servicedeskapi.organization.$get(args, options))
}

export async function postRestServicedeskapiOrganization(
  args: InferRequestType<typeof client.rest.servicedeskapi.organization.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.servicedeskapi.organization.$post(args, options))
}

export async function getRestServicedeskapiOrganizationOrganizationId(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.organization[':organizationId'].$get(args, options),
  )
}

export async function deleteRestServicedeskapiOrganizationOrganizationId(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.organization[':organizationId'].$delete(args, options),
  )
}

export async function getRestServicedeskapiOrganizationOrganizationIdProperty(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['property']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.organization[':organizationId'].property.$get(args, options),
  )
}

export async function getRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['property'][':propertyKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.organization[':organizationId'].property[':propertyKey'].$get(
      args,
      options,
    ),
  )
}

export async function putRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['property'][':propertyKey']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.organization[':organizationId'].property[':propertyKey'].$put(
      args,
      options,
    ),
  )
}

export async function deleteRestServicedeskapiOrganizationOrganizationIdPropertyPropertyKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['property'][':propertyKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.organization[':organizationId'].property[':propertyKey'].$delete(
      args,
      options,
    ),
  )
}

export async function getRestServicedeskapiOrganizationOrganizationIdUser(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['user']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.organization[':organizationId'].user.$get(args, options),
  )
}

export async function postRestServicedeskapiOrganizationOrganizationIdUser(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['user']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.organization[':organizationId'].user.$post(args, options),
  )
}

export async function deleteRestServicedeskapiOrganizationOrganizationIdUser(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.organization)[':organizationId']['user']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.organization[':organizationId'].user.$delete(args, options),
  )
}

export async function getRestServicedeskapiRequest(
  args: InferRequestType<typeof client.rest.servicedeskapi.request.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.servicedeskapi.request.$get(args, options))
}

export async function postRestServicedeskapiRequest(
  args: InferRequestType<typeof client.rest.servicedeskapi.request.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.servicedeskapi.request.$post(args, options))
}

export async function postRestServicedeskapiRequestValidate(
  args: InferRequestType<typeof client.rest.servicedeskapi.request.validate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.servicedeskapi.request.validate.$post(args, options))
}

export async function getRestServicedeskapiRequestIssueIdOrKey(
  args: InferRequestType<(typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.request[':issueIdOrKey'].$get(args, options),
  )
}

export async function getRestServicedeskapiRequestIssueIdOrKeyApproval(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.request[':issueIdOrKey'].approval.$get(args, options),
  )
}

export async function getRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalId(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval'][':approvalId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.request[':issueIdOrKey'].approval[':approvalId'].$get(args, options),
  )
}

export async function postRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalId(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['approval'][':approvalId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.request[':issueIdOrKey'].approval[':approvalId'].$post(
      args,
      options,
    ),
  )
}

export async function getRestServicedeskapiRequestIssueIdOrKeyAttachment(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.request[':issueIdOrKey'].attachment.$get(args, options),
  )
}

export async function postRestServicedeskapiRequestIssueIdOrKeyAttachment(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.request[':issueIdOrKey'].attachment.$post(args, options),
  )
}

export async function getRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentId(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment'][':attachmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.request[':issueIdOrKey'].attachment[':attachmentId'].$get(
      args,
      options,
    ),
  )
}

export async function getRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdThumbnail(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['attachment'][':attachmentId']['thumbnail']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.request[':issueIdOrKey'].attachment[':attachmentId'].thumbnail.$get(
      args,
      options,
    ),
  )
}

export async function getRestServicedeskapiRequestIssueIdOrKeyComment(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.request[':issueIdOrKey'].comment.$get(args, options),
  )
}

export async function postRestServicedeskapiRequestIssueIdOrKeyComment(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.request[':issueIdOrKey'].comment.$post(args, options),
  )
}

export async function getRestServicedeskapiRequestIssueIdOrKeyCommentCommentId(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.request[':issueIdOrKey'].comment[':commentId'].$get(args, options),
  )
}

export async function getRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdAttachment(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['comment'][':commentId']['attachment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.request[':issueIdOrKey'].comment[':commentId'].attachment.$get(
      args,
      options,
    ),
  )
}

export async function getRestServicedeskapiRequestIssueIdOrKeyNotification(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['notification']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.request[':issueIdOrKey'].notification.$get(args, options),
  )
}

export async function putRestServicedeskapiRequestIssueIdOrKeyNotification(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['notification']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.request[':issueIdOrKey'].notification.$put(args, options),
  )
}

export async function deleteRestServicedeskapiRequestIssueIdOrKeyNotification(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['notification']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.request[':issueIdOrKey'].notification.$delete(args, options),
  )
}

export async function getRestServicedeskapiRequestIssueIdOrKeyParticipant(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['participant']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.request[':issueIdOrKey'].participant.$get(args, options),
  )
}

export async function postRestServicedeskapiRequestIssueIdOrKeyParticipant(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['participant']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.request[':issueIdOrKey'].participant.$post(args, options),
  )
}

export async function deleteRestServicedeskapiRequestIssueIdOrKeyParticipant(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['participant']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.request[':issueIdOrKey'].participant.$delete(args, options),
  )
}

export async function getRestServicedeskapiRequestIssueIdOrKeySla(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.request[':issueIdOrKey'].sla.$get(args, options),
  )
}

export async function getRestServicedeskapiRequestIssueIdOrKeySlaSlaMetricId(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['sla'][':slaMetricId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.request[':issueIdOrKey'].sla[':slaMetricId'].$get(args, options),
  )
}

export async function getRestServicedeskapiRequestIssueIdOrKeyStatus(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.request[':issueIdOrKey'].status.$get(args, options),
  )
}

export async function getRestServicedeskapiRequestIssueIdOrKeyTransition(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['transition']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.request[':issueIdOrKey'].transition.$get(args, options),
  )
}

export async function postRestServicedeskapiRequestIssueIdOrKeyTransition(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':issueIdOrKey']['transition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.request[':issueIdOrKey'].transition.$post(args, options),
  )
}

export async function getRestServicedeskapiRequestRequestIdOrKeyFeedback(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':requestIdOrKey']['feedback']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.request[':requestIdOrKey'].feedback.$get(args, options),
  )
}

export async function postRestServicedeskapiRequestRequestIdOrKeyFeedback(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':requestIdOrKey']['feedback']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.request[':requestIdOrKey'].feedback.$post(args, options),
  )
}

export async function deleteRestServicedeskapiRequestRequestIdOrKeyFeedback(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.request)[':requestIdOrKey']['feedback']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.request[':requestIdOrKey'].feedback.$delete(args, options),
  )
}

export async function getRestServicedeskapiRequesttype(
  args: InferRequestType<typeof client.rest.servicedeskapi.requesttype.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.servicedeskapi.requesttype.$get(args, options))
}

export async function getRestServicedeskapiServicedesk(
  args: InferRequestType<typeof client.rest.servicedeskapi.servicedesk.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rest.servicedeskapi.servicedesk.$get(args, options))
}

export async function getRestServicedeskapiServicedeskServiceDeskId(
  args: InferRequestType<(typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.servicedesk[':serviceDeskId'].$get(args, options),
  )
}

export async function postRestServicedeskapiServicedeskServiceDeskIdAttachTemporaryFile(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['attachTemporaryFile']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.servicedesk[':serviceDeskId'].attachTemporaryFile.$post(
      args,
      options,
    ),
  )
}

export async function getRestServicedeskapiServicedeskServiceDeskIdCustomer(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.servicedesk[':serviceDeskId'].customer.$get(args, options),
  )
}

export async function postRestServicedeskapiServicedeskServiceDeskIdCustomer(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.servicedesk[':serviceDeskId'].customer.$post(args, options),
  )
}

export async function deleteRestServicedeskapiServicedeskServiceDeskIdCustomer(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.servicedesk[':serviceDeskId'].customer.$delete(args, options),
  )
}

export async function postRestServicedeskapiServicedeskServiceDeskIdCustomerInvite(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['invite']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.servicedesk[':serviceDeskId'].customer.invite.$post(args, options),
  )
}

export async function postRestServicedeskapiServicedeskServiceDeskIdCustomerSkipPermissionCheck(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['customer']['skip-permission-check']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.servicedesk[':serviceDeskId'].customer[
      'skip-permission-check'
    ].$post(args, options),
  )
}

export async function getRestServicedeskapiServicedeskServiceDeskIdKnowledgebaseArticle(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['knowledgebase']['article']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.servicedesk[':serviceDeskId'].knowledgebase.article.$get(
      args,
      options,
    ),
  )
}

export async function getRestServicedeskapiServicedeskServiceDeskIdOrganization(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['organization']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.servicedesk[':serviceDeskId'].organization.$get(args, options),
  )
}

export async function postRestServicedeskapiServicedeskServiceDeskIdOrganization(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['organization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.servicedesk[':serviceDeskId'].organization.$post(args, options),
  )
}

export async function deleteRestServicedeskapiServicedeskServiceDeskIdOrganization(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['organization']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.servicedesk[':serviceDeskId'].organization.$delete(args, options),
  )
}

export async function getRestServicedeskapiServicedeskServiceDeskIdQueue(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.servicedesk[':serviceDeskId'].queue.$get(args, options),
  )
}

export async function getRestServicedeskapiServicedeskServiceDeskIdQueueQueueId(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.servicedesk[':serviceDeskId'].queue[':queueId'].$get(args, options),
  )
}

export async function getRestServicedeskapiServicedeskServiceDeskIdQueueQueueIdIssue(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['queue'][':queueId']['issue']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.servicedesk[':serviceDeskId'].queue[':queueId'].issue.$get(
      args,
      options,
    ),
  )
}

export async function getRestServicedeskapiServicedeskServiceDeskIdRequesttype(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype.$get(args, options),
  )
}

export async function postRestServicedeskapiServicedeskServiceDeskIdRequesttype(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype.$post(args, options),
  )
}

export async function postRestServicedeskapiServicedeskServiceDeskIdRequesttypePermissionsCheck(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype']['permissions']['check']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype.permissions.check.$post(
      args,
      options,
    ),
  )
}

export async function getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeId(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype[':requestTypeId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeId(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype[':requestTypeId'].$delete(
      args,
      options,
    ),
  )
}

export async function getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdField(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['field']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype[
      ':requestTypeId'
    ].field.$get(args, options),
  )
}

export async function getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdProperty(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype[
      ':requestTypeId'
    ].property.$get(args, options),
  )
}

export async function getRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property'][':propertyKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype[':requestTypeId'].property[
      ':propertyKey'
    ].$get(args, options),
  )
}

export async function putRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property'][':propertyKey']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype[':requestTypeId'].property[
      ':propertyKey'
    ].$put(args, options),
  )
}

export async function deleteRestServicedeskapiServicedeskServiceDeskIdRequesttypeRequestTypeIdPropertyPropertyKey(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttype'][':requestTypeId']['property'][':propertyKey']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttype[':requestTypeId'].property[
      ':propertyKey'
    ].$delete(args, options),
  )
}

export async function getRestServicedeskapiServicedeskServiceDeskIdRequesttypegroup(
  args: InferRequestType<
    (typeof client.rest.servicedeskapi.servicedesk)[':serviceDeskId']['requesttypegroup']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.rest.servicedeskapi.servicedesk[':serviceDeskId'].requesttypegroup.$get(args, options),
  )
}
