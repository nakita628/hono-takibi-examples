import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiKey(
  args: InferRequestType<typeof client.api_key.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_key.$get(args, options))
}

export async function postApiKey(
  args: InferRequestType<typeof client.api_key.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_key.$post(args, options))
}

export async function getApiKeyApiKeyId(
  args: InferRequestType<(typeof client.api_key)[':api_key_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_key[':api_key_id'].$get(args, options))
}

export async function putApiKeyApiKeyId(
  args: InferRequestType<(typeof client.api_key)[':api_key_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_key[':api_key_id'].$put(args, options))
}

export async function deleteApiKeyApiKeyId(
  args: InferRequestType<(typeof client.api_key)[':api_key_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_key[':api_key_id'].$delete(args, options))
}

export async function postAccountCreate(
  args: InferRequestType<typeof client.account.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.create.$post(args, options))
}

export async function getAccount(
  args: InferRequestType<typeof client.account.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.$get(args, options))
}

export async function putAccount(
  args: InferRequestType<typeof client.account.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.$put(args, options))
}

export async function getAccountSettings(
  args: InferRequestType<typeof client.account.settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.settings.$get(args, options))
}

export async function postAccountSettings(
  args: InferRequestType<typeof client.account.settings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.settings.$post(args, options))
}

export async function postAccountVerify(
  args: InferRequestType<typeof client.account.verify.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.verify.$post(args, options))
}

export async function postApiApp(
  args: InferRequestType<typeof client.api_app.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_app.$post(args, options))
}

export async function getApiAppClientId(
  args: InferRequestType<(typeof client.api_app)[':client_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_app[':client_id'].$get(args, options))
}

export async function putApiAppClientId(
  args: InferRequestType<(typeof client.api_app)[':client_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_app[':client_id'].$put(args, options))
}

export async function deleteApiAppClientId(
  args: InferRequestType<(typeof client.api_app)[':client_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_app[':client_id'].$delete(args, options))
}

export async function getApiAppList(
  args: InferRequestType<typeof client.api_app.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api_app.list.$get(args, options))
}

export async function getBulkSendJobBulkSendJobId(
  args: InferRequestType<(typeof client.bulk_send_job)[':bulk_send_job_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bulk_send_job[':bulk_send_job_id'].$get(args, options))
}

export async function getBulkSendJobList(
  args: InferRequestType<typeof client.bulk_send_job.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bulk_send_job.list.$get(args, options))
}

export async function postDocumentDetectFields(
  args: InferRequestType<typeof client.document.detect_fields.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.document.detect_fields.$post(args, options))
}

export async function postEmbeddedEditUrlTemplateId(
  args: InferRequestType<(typeof client.embedded.edit_url)[':template_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.embedded.edit_url[':template_id'].$post(args, options))
}

export async function getEmbeddedSignUrlSignatureId(
  args: InferRequestType<(typeof client.embedded.sign_url)[':signature_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.embedded.sign_url[':signature_id'].$get(args, options))
}

export async function getFaxFaxId(
  args: InferRequestType<(typeof client.fax)[':fax_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fax[':fax_id'].$get(args, options))
}

export async function deleteFaxFaxId(
  args: InferRequestType<(typeof client.fax)[':fax_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fax[':fax_id'].$delete(args, options))
}

export async function getFaxFilesFaxId(
  args: InferRequestType<(typeof client.fax.files)[':fax_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fax.files[':fax_id'].$get(args, options))
}

export async function putFaxLineAddUser(
  args: InferRequestType<typeof client.fax_line.add_user.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fax_line.add_user.$put(args, options))
}

export async function getFaxLineAreaCodes(
  args: InferRequestType<typeof client.fax_line.area_codes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fax_line.area_codes.$get(args, options))
}

export async function postFaxLineCreate(
  args: InferRequestType<typeof client.fax_line.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fax_line.create.$post(args, options))
}

export async function getFaxLine(
  args: InferRequestType<typeof client.fax_line.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fax_line.$get(args, options))
}

export async function deleteFaxLine(
  args: InferRequestType<typeof client.fax_line.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fax_line.$delete(args, options))
}

export async function getFaxLineList(
  args: InferRequestType<typeof client.fax_line.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fax_line.list.$get(args, options))
}

export async function putFaxLineRemoveUser(
  args: InferRequestType<typeof client.fax_line.remove_user.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fax_line.remove_user.$put(args, options))
}

export async function getFaxList(
  args: InferRequestType<typeof client.fax.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fax.list.$get(args, options))
}

export async function postFaxSend(
  args: InferRequestType<typeof client.fax.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fax.send.$post(args, options))
}

export async function postOauthToken(
  args: InferRequestType<typeof client.oauth.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.token.$post(args, options))
}

export async function postOauthTokenRefresh(
  args: InferRequestType<(typeof client.oauth)['token?refresh']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth['token?refresh'].$post(args, options))
}

export async function postReportCreate(
  args: InferRequestType<typeof client.report.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report.create.$post(args, options))
}

export async function postSignatureRequestBulkCreateEmbeddedWithTemplate(
  args: InferRequestType<typeof client.signature_request.bulk_create_embedded_with_template.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.signature_request.bulk_create_embedded_with_template.$post(args, options),
  )
}

export async function postSignatureRequestBulkSendWithTemplate(
  args: InferRequestType<typeof client.signature_request.bulk_send_with_template.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.signature_request.bulk_send_with_template.$post(args, options))
}

export async function postSignatureRequestCancelSignatureRequestId(
  args: InferRequestType<
    (typeof client.signature_request.cancel)[':signature_request_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.signature_request.cancel[':signature_request_id'].$post(args, options),
  )
}

export async function postSignatureRequestCreateEmbedded(
  args: InferRequestType<typeof client.signature_request.create_embedded.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.signature_request.create_embedded.$post(args, options))
}

export async function postSignatureRequestCreateEmbeddedWithTemplate(
  args: InferRequestType<typeof client.signature_request.create_embedded_with_template.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.signature_request.create_embedded_with_template.$post(args, options),
  )
}

export async function putSignatureRequestEditSignatureRequestId(
  args: InferRequestType<(typeof client.signature_request.edit)[':signature_request_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.signature_request.edit[':signature_request_id'].$put(args, options),
  )
}

export async function putSignatureRequestEditEmbeddedSignatureRequestId(
  args: InferRequestType<
    (typeof client.signature_request.edit_embedded)[':signature_request_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.signature_request.edit_embedded[':signature_request_id'].$put(args, options),
  )
}

export async function putSignatureRequestEditEmbeddedWithTemplateSignatureRequestId(
  args: InferRequestType<
    (typeof client.signature_request.edit_embedded_with_template)[':signature_request_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.signature_request.edit_embedded_with_template[':signature_request_id'].$put(
      args,
      options,
    ),
  )
}

export async function putSignatureRequestEditWithTemplateSignatureRequestId(
  args: InferRequestType<
    (typeof client.signature_request.edit_with_template)[':signature_request_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.signature_request.edit_with_template[':signature_request_id'].$put(args, options),
  )
}

export async function getSignatureRequestFilesSignatureRequestId(
  args: InferRequestType<(typeof client.signature_request.files)[':signature_request_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.signature_request.files[':signature_request_id'].$get(args, options),
  )
}

export async function getSignatureRequestFilesAsDataUriSignatureRequestId(
  args: InferRequestType<
    (typeof client.signature_request.files_as_data_uri)[':signature_request_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.signature_request.files_as_data_uri[':signature_request_id'].$get(args, options),
  )
}

export async function getSignatureRequestFilesAsFileUrlSignatureRequestId(
  args: InferRequestType<
    (typeof client.signature_request.files_as_file_url)[':signature_request_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.signature_request.files_as_file_url[':signature_request_id'].$get(args, options),
  )
}

export async function getSignatureRequestSignatureRequestId(
  args: InferRequestType<(typeof client.signature_request)[':signature_request_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.signature_request[':signature_request_id'].$get(args, options))
}

export async function getSignatureRequestList(
  args: InferRequestType<typeof client.signature_request.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.signature_request.list.$get(args, options))
}

export async function postSignatureRequestReleaseHoldSignatureRequestId(
  args: InferRequestType<
    (typeof client.signature_request.release_hold)[':signature_request_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.signature_request.release_hold[':signature_request_id'].$post(args, options),
  )
}

export async function postSignatureRequestRemindSignatureRequestId(
  args: InferRequestType<
    (typeof client.signature_request.remind)[':signature_request_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.signature_request.remind[':signature_request_id'].$post(args, options),
  )
}

export async function postSignatureRequestRemoveSignatureRequestId(
  args: InferRequestType<
    (typeof client.signature_request.remove)[':signature_request_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.signature_request.remove[':signature_request_id'].$post(args, options),
  )
}

export async function postSignatureRequestSend(
  args: InferRequestType<typeof client.signature_request.send.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.signature_request.send.$post(args, options))
}

export async function postSignatureRequestSendWithTemplate(
  args: InferRequestType<typeof client.signature_request.send_with_template.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.signature_request.send_with_template.$post(args, options))
}

export async function postSignatureRequestUpdateSignatureRequestId(
  args: InferRequestType<
    (typeof client.signature_request.update)[':signature_request_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.signature_request.update[':signature_request_id'].$post(args, options),
  )
}

export async function putTeamAddMember(
  args: InferRequestType<typeof client.team.add_member.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team.add_member.$put(args, options))
}

export async function postTeamCreate(
  args: InferRequestType<typeof client.team.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team.create.$post(args, options))
}

export async function deleteTeamDestroy(options?: ClientRequestOptions) {
  return await parseResponse(client.team.destroy.$delete(undefined, options))
}

export async function getTeam(options?: ClientRequestOptions) {
  return await parseResponse(client.team.$get(undefined, options))
}

export async function putTeam(
  args: InferRequestType<typeof client.team.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team.$put(args, options))
}

export async function getTeamInfo(
  args: InferRequestType<typeof client.team.info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team.info.$get(args, options))
}

export async function getTeamInvites(
  args: InferRequestType<typeof client.team.invites.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team.invites.$get(args, options))
}

export async function getTeamMembersTeamId(
  args: InferRequestType<(typeof client.team.members)[':team_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team.members[':team_id'].$get(args, options))
}

export async function postTeamRemoveMember(
  args: InferRequestType<typeof client.team.remove_member.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team.remove_member.$post(args, options))
}

export async function getTeamSettings(
  args: InferRequestType<typeof client.team.settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team.settings.$get(args, options))
}

export async function postTeamSettings(
  args: InferRequestType<typeof client.team.settings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team.settings.$post(args, options))
}

export async function getTeamSubTeamsTeamId(
  args: InferRequestType<(typeof client.team.sub_teams)[':team_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team.sub_teams[':team_id'].$get(args, options))
}

export async function postTemplateAddUserTemplateId(
  args: InferRequestType<(typeof client.template.add_user)[':template_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.template.add_user[':template_id'].$post(args, options))
}

export async function postTemplateCreate(
  args: InferRequestType<typeof client.template.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.template.create.$post(args, options))
}

export async function postTemplateCreateEmbeddedDraft(
  args: InferRequestType<typeof client.template.create_embedded_draft.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.template.create_embedded_draft.$post(args, options))
}

export async function postTemplateDeleteTemplateId(
  args: InferRequestType<(typeof client.template.delete)[':template_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.template.delete[':template_id'].$post(args, options))
}

export async function getTemplateFilesTemplateId(
  args: InferRequestType<(typeof client.template.files)[':template_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.template.files[':template_id'].$get(args, options))
}

export async function getTemplateFilesAsDataUriTemplateId(
  args: InferRequestType<(typeof client.template.files_as_data_uri)[':template_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.template.files_as_data_uri[':template_id'].$get(args, options))
}

export async function getTemplateFilesAsFileUrlTemplateId(
  args: InferRequestType<(typeof client.template.files_as_file_url)[':template_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.template.files_as_file_url[':template_id'].$get(args, options))
}

export async function getTemplateTemplateId(
  args: InferRequestType<(typeof client.template)[':template_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.template[':template_id'].$get(args, options))
}

export async function getTemplateList(
  args: InferRequestType<typeof client.template.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.template.list.$get(args, options))
}

export async function postTemplateRemoveUserTemplateId(
  args: InferRequestType<(typeof client.template.remove_user)[':template_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.template.remove_user[':template_id'].$post(args, options))
}

export async function postTemplateUpdateFilesTemplateId(
  args: InferRequestType<(typeof client.template.update_files)[':template_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.template.update_files[':template_id'].$post(args, options))
}

export async function postUnclaimedDraftCreate(
  args: InferRequestType<typeof client.unclaimed_draft.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unclaimed_draft.create.$post(args, options))
}

export async function postUnclaimedDraftCreateEmbedded(
  args: InferRequestType<typeof client.unclaimed_draft.create_embedded.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.unclaimed_draft.create_embedded.$post(args, options))
}

export async function postUnclaimedDraftCreateEmbeddedWithTemplate(
  args: InferRequestType<typeof client.unclaimed_draft.create_embedded_with_template.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.unclaimed_draft.create_embedded_with_template.$post(args, options),
  )
}

export async function postUnclaimedDraftEditAndResendSignatureRequestId(
  args: InferRequestType<
    (typeof client.unclaimed_draft.edit_and_resend)[':signature_request_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.unclaimed_draft.edit_and_resend[':signature_request_id'].$post(args, options),
  )
}
