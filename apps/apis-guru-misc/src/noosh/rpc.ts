import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get11WorkgroupsWorkgroupIdProjectsProjectIdFileTags(
  args: InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['fileTags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['1.1'].workgroups[':workgroup_id'].projects[':project_id'].fileTags.$get(args, options),
  )
}

export async function get11WorkgroupsWorkgroupIdProjectsProjectIdFiles(
  args: InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['1.1'].workgroups[':workgroup_id'].projects[':project_id'].files.$get(args, options),
  )
}

export async function post11WorkgroupsWorkgroupIdProjectsProjectIdFiles(
  args: InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['1.1'].workgroups[':workgroup_id'].projects[':project_id'].files.$post(args, options),
  )
}

export async function get11WorkgroupsWorkgroupIdProjectsProjectIdFilesFileId(
  args: InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['files'][':file_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['1.1'].workgroups[':workgroup_id'].projects[':project_id'].files[':file_id'].$get(
      args,
      options,
    ),
  )
}

export async function get11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecId(
  args: InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['1.1'].workgroups[':workgroup_id'].projects[':project_id'].specs[':spec_id'].$get(
      args,
      options,
    ),
  )
}

export async function put11WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecId(
  args: InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['1.1'].workgroups[':workgroup_id'].projects[':project_id'].specs[':spec_id'].$put(
      args,
      options,
    ),
  )
}

export async function post11WorkgroupsWorkgroupIdProjectsProjectIdTeammembers(
  args: InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['projects'][':project_id']['teammembers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['1.1'].workgroups[':workgroup_id'].projects[':project_id'].teammembers.$post(
      args,
      options,
    ),
  )
}

export async function get11WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFields(
  args: InferRequestType<
    (typeof client)['1.1']['workgroups'][':workgroup_id']['specTypes'][':spec_type_id']['specTypeFields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['1.1'].workgroups[':workgroup_id'].specTypes[':spec_type_id'].specTypeFields.$get(
      args,
      options,
    ),
  )
}

export async function getV1Countries(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.countries.$get(undefined, options))
}

export async function getV1Workgroups(
  args: InferRequestType<typeof client.v1.workgroups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workgroups.$get(args, options))
}

export async function getV1WorkgroupsWorkgroupIdAutomaticInvitations(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['automaticInvitations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].automaticInvitations.$get(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdBillingRecipients(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['billingRecipients']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].billingRecipients.$get(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdBuyOrders(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['buyOrders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workgroups[':workgroup_id'].buyOrders.$get(args, options))
}

export async function getV1WorkgroupsWorkgroupIdBuyOrdersOrderId(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['buyOrders'][':order_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].buyOrders[':order_id'].$get(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdClientWorkgroups(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].clientWorkgroups.$get(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupId(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].clientWorkgroups[':client_workgroup_id'].$get(
      args,
      options,
    ),
  )
}

export async function getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectCategory(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectCategory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].clientWorkgroups[
      ':client_workgroup_id'
    ].projectCategory.$get(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectHomeUserFields(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectHomeUserFields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].clientWorkgroups[
      ':client_workgroup_id'
    ].projectHomeUserFields.$get(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectStatus(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['clientWorkgroups'][':client_workgroup_id']['projectStatus']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].clientWorkgroups[
      ':client_workgroup_id'
    ].projectStatus.$get(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdContacts(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['contacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workgroups[':workgroup_id'].contacts.$get(args, options))
}

export async function getV1WorkgroupsWorkgroupIdContactsUserId(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['contacts'][':user_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].contacts[':user_id'].$get(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdCustomTaskStatus(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['customTaskStatus']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].customTaskStatus.$get(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdCustomTaskTypes(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['customTaskTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].customTaskTypes.$get(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdDeactivationReasons(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['deactivationReasons']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].deactivationReasons.$get(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdDefaultTaskPriority(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['defaultTaskPriority']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].defaultTaskPriority.$get(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdDefaultTaskStatus(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['defaultTaskStatus']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].defaultTaskStatus.$get(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdDetail(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['detail']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workgroups[':workgroup_id'].detail.$get(args, options))
}

export async function putV1WorkgroupsWorkgroupIdDetail(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['detail']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workgroups[':workgroup_id'].detail.$put(args, options))
}

export async function getV1WorkgroupsWorkgroupIdExchangeRate(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['exchangeRate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workgroups[':workgroup_id'].exchangeRate.$get(args, options))
}

export async function postV1WorkgroupsWorkgroupIdExchangeRate(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['exchangeRate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].exchangeRate.$post(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdMyTimeCards(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['myTimeCards']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workgroups[':workgroup_id'].myTimeCards.$get(args, options))
}

export async function getV1WorkgroupsWorkgroupIdMyTimeCardsTimeCardId(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['myTimeCards'][':timeCard_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].myTimeCards[':timeCard_id'].$get(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdProductTypes(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['productTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workgroups[':workgroup_id'].productTypes.$get(args, options))
}

export async function getV1WorkgroupsWorkgroupIdProductTypesOfSpecTypes(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['productTypesOfSpecTypes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].productTypesOfSpecTypes.$get(args, options),
  )
}

export async function postV1WorkgroupsWorkgroupIdProductTypesOfSpecTypes(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['productTypesOfSpecTypes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].productTypesOfSpecTypes.$post(args, options),
  )
}

export async function postV1WorkgroupsWorkgroupIdProfileImage(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['profileImage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].profileImage.$post(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdProjectCategory(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['projectCategory']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projectCategory.$get(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdProjectHomeUserFields(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projectHomeUserFields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projectHomeUserFields.$get(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdProjectStatus(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['projectStatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projectStatus.$get(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdProjects(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workgroups[':workgroup_id'].projects.$get(args, options))
}

export async function postV1WorkgroupsWorkgroupIdProjects(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['projects']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workgroups[':workgroup_id'].projects.$post(args, options))
}

export async function getV1WorkgroupsWorkgroupIdProjectsProjectId(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].$get(args, options),
  )
}

export async function putV1WorkgroupsWorkgroupIdProjectsProjectId(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].$put(args, options),
  )
}

export async function deleteV1WorkgroupsWorkgroupIdProjectsProjectId(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].$delete(args, options),
  )
}

export async function patchV1WorkgroupsWorkgroupIdProjectsProjectId(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].$patch(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrders(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].buyOrders.$get(args, options),
  )
}

export async function postV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrders(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].buyOrders.$post(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderId(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders'][':order_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].buyOrders[':order_id'].$get(
      args,
      options,
    ),
  )
}

export async function putV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderId(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['buyOrders'][':order_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].buyOrders[':order_id'].$put(
      args,
      options,
    ),
  )
}

export async function postV1WorkgroupsWorkgroupIdProjectsProjectIdChildren(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['children']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].children.$post(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdProjectsProjectIdEstimates(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].estimates.$get(args, options),
  )
}

export async function postV1WorkgroupsWorkgroupIdProjectsProjectIdEstimates(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].estimates.$post(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesEstimateId(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['estimates'][':estimate_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].estimates[':estimate_id'].$get(
      args,
      options,
    ),
  )
}

export async function getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesOrdersOrderId(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices']['orders'][':order_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].invoices.orders[':order_id'].$get(
      args,
      options,
    ),
  )
}

export async function getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceId(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices'][':invoice_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].invoices[':invoice_id'].$get(
      args,
      options,
    ),
  )
}

export async function getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdFiles(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['invoices'][':invoice_id']['files']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].invoices[
      ':invoice_id'
    ].files.$get(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdProjectsProjectIdMemberrolesUserId(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['memberroles'][':user_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].memberroles[':user_id'].$get(
      args,
      options,
    ),
  )
}

export async function getV1WorkgroupsWorkgroupIdProjectsProjectIdOrdersOrderId(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['orders'][':order_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].orders[':order_id'].$get(
      args,
      options,
    ),
  )
}

export async function getV1WorkgroupsWorkgroupIdProjectsProjectIdQuotes(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].quotes.$get(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteId(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes'][':quote_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].quotes[':quote_id'].$get(
      args,
      options,
    ),
  )
}

export async function putV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteId(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['quotes'][':quote_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].quotes[':quote_id'].$put(
      args,
      options,
    ),
  )
}

export async function getV1WorkgroupsWorkgroupIdProjectsProjectIdRfes(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].rfes.$get(args, options),
  )
}

export async function postV1WorkgroupsWorkgroupIdProjectsProjectIdRfes(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].rfes.$post(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRfeId(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfes'][':rfe_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].rfes[':rfe_id'].$get(
      args,
      options,
    ),
  )
}

export async function getV1WorkgroupsWorkgroupIdProjectsProjectIdRfqs(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfqs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].rfqs.$get(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsRfqId(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['rfqs'][':rfq_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].rfqs[':rfq_id'].$get(
      args,
      options,
    ),
  )
}

export async function getV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrders(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].sellOrders.$get(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderId(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders'][':order_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].sellOrders[':order_id'].$get(
      args,
      options,
    ),
  )
}

export async function putV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderId(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['sellOrders'][':order_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].sellOrders[':order_id'].$put(
      args,
      options,
    ),
  )
}

export async function getV1WorkgroupsWorkgroupIdProjectsProjectIdShipments(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].shipments.$get(args, options),
  )
}

export async function postV1WorkgroupsWorkgroupIdProjectsProjectIdShipments(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].shipments.$post(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentId(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments'][':shipment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].shipments[':shipment_id'].$get(
      args,
      options,
    ),
  )
}

export async function putV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdLocationsLocationId(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['shipments'][':shipment_id']['locations'][':location_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].shipments[
      ':shipment_id'
    ].locations[':location_id'].$put(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecs(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].specs.$get(args, options),
  )
}

export async function postV1WorkgroupsWorkgroupIdProjectsProjectIdSpecs(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].specs.$post(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecId(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].specs[':spec_id'].$get(
      args,
      options,
    ),
  )
}

export async function putV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecId(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['specs'][':spec_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].specs[':spec_id'].$put(
      args,
      options,
    ),
  )
}

export async function getV1WorkgroupsWorkgroupIdProjectsProjectIdTasks(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].tasks.$get(args, options),
  )
}

export async function postV1WorkgroupsWorkgroupIdProjectsProjectIdTasks(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].tasks.$post(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdProjectsProjectIdTasksTaskId(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['tasks'][':task_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].tasks[':task_id'].$get(
      args,
      options,
    ),
  )
}

export async function getV1WorkgroupsWorkgroupIdProjectsProjectIdTeamMembersOfClientProject(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teamMembersOfClientProject']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].teamMembersOfClientProject.$get(
      args,
      options,
    ),
  )
}

export async function getV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembers(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teammembers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].teammembers.$get(args, options),
  )
}

export async function postV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembers(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teammembers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].teammembers.$post(args, options),
  )
}

export async function deleteV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersTeammemberId(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['projects'][':project_id']['teammembers'][':teammember_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].projects[':project_id'].teammembers[
      ':teammember_id'
    ].$delete(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdQuoteStates(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['quoteStates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workgroups[':workgroup_id'].quoteStates.$get(args, options))
}

export async function getV1WorkgroupsWorkgroupIdQuotes(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['quotes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workgroups[':workgroup_id'].quotes.$get(args, options))
}

export async function getV1WorkgroupsWorkgroupIdReceivedTimeCards(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['receivedTimeCards']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].receivedTimeCards.$get(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdReceivedTimeCardsTimeCardId(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['receivedTimeCards'][':timeCard_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].receivedTimeCards[':timeCard_id'].$get(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdSellOrders(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['sellOrders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workgroups[':workgroup_id'].sellOrders.$get(args, options))
}

export async function getV1WorkgroupsWorkgroupIdSellOrdersOrderId(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['sellOrders'][':order_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].sellOrders[':order_id'].$get(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdSpecTemplates(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['specTemplates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].specTemplates.$get(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdSpecTemplatesSpecTemplateId(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['specTemplates'][':spec_template_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].specTemplates[':spec_template_id'].$get(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFields(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['specTypes'][':spec_type_id']['specTypeFields']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].specTypes[':spec_type_id'].specTypeFields.$get(
      args,
      options,
    ),
  )
}

export async function getV1WorkgroupsWorkgroupIdSupplierWorkgroups(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['supplierWorkgroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].supplierWorkgroups.$get(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdSupplierWorkgroupsBuSupplierWorkgroupId(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['supplierWorkgroups'][':bu_supplier_workgroup_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].supplierWorkgroups[':bu_supplier_workgroup_id'].$get(
      args,
      options,
    ),
  )
}

export async function getV1WorkgroupsWorkgroupIdTaskTypes(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['taskTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workgroups[':workgroup_id'].taskTypes.$get(args, options))
}

export async function getV1WorkgroupsWorkgroupIdTasks(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.workgroups[':workgroup_id'].tasks.$get(args, options))
}

export async function getV1WorkgroupsWorkgroupIdTasksTaskId(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['tasks'][':task_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].tasks[':task_id'].$get(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdTeamTemplates(
  args: InferRequestType<(typeof client.v1.workgroups)[':workgroup_id']['teamTemplates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].teamTemplates.$get(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdTeamTemplatesTeamTemplateId(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['teamTemplates'][':team_template_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].teamTemplates[':team_template_id'].$get(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdWorkgroupMembers(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['workgroupMembers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].workgroupMembers.$get(args, options),
  )
}

export async function getV1WorkgroupsWorkgroupIdWorkgroupMembersUserId(
  args: InferRequestType<
    (typeof client.v1.workgroups)[':workgroup_id']['workgroupMembers'][':user_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.workgroups[':workgroup_id'].workgroupMembers[':user_id'].$get(args, options),
  )
}
