import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAttachmentPublic(
  args: InferRequestType<(typeof client)['attachment-public']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['attachment-public'].$post(args, options))
}

export async function getAttachmentPublicAttachmentPublicUUIDContent(
  args: InferRequestType<
    (typeof client)['attachment-public'][':attachment-publicUUID']['content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['attachment-public'][':attachment-publicUUID'].content.$get(args, options),
  )
}

export async function getAttachmentPublicItemId(
  args: InferRequestType<(typeof client)['attachment-public'][':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['attachment-public'][':itemId'].$get(args, options))
}

export async function postAvatar(
  args: InferRequestType<typeof client.avatar.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.avatar.$post(args, options))
}

export async function getAvatarItemId(
  args: InferRequestType<(typeof client.avatar)[':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.avatar[':itemId'].$get(args, options))
}

export async function getDevice(
  args: InferRequestType<typeof client.device.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.device.$get(args, options))
}

export async function getDeviceServer(
  args: InferRequestType<(typeof client)['device-server']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['device-server'].$get(args, options))
}

export async function postDeviceServer(
  args: InferRequestType<(typeof client)['device-server']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['device-server'].$post(args, options))
}

export async function getDeviceServerItemId(
  args: InferRequestType<(typeof client)['device-server'][':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['device-server'][':itemId'].$get(args, options))
}

export async function getDeviceItemId(
  args: InferRequestType<(typeof client.device)[':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.device[':itemId'].$get(args, options))
}

export async function getInstallation(
  args: InferRequestType<typeof client.installation.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.installation.$get(args, options))
}

export async function postInstallation(
  args: InferRequestType<typeof client.installation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.installation.$post(args, options))
}

export async function getInstallationInstallationIDServerPublicKey(
  args: InferRequestType<
    (typeof client.installation)[':installationID']['server-public-key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.installation[':installationID']['server-public-key'].$get(args, options),
  )
}

export async function getInstallationItemId(
  args: InferRequestType<(typeof client.installation)[':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.installation[':itemId'].$get(args, options))
}

export async function postPaymentServiceProviderCredential(
  args: InferRequestType<(typeof client)['payment-service-provider-credential']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['payment-service-provider-credential'].$post(args, options))
}

export async function getPaymentServiceProviderCredentialItemId(
  args: InferRequestType<(typeof client)['payment-service-provider-credential'][':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['payment-service-provider-credential'][':itemId'].$get(args, options),
  )
}

export async function getPlaceLookupPlaceLookupIDPhotoPhotoIDContent(
  args: InferRequestType<
    (typeof client)['place-lookup'][':place-lookupID']['photo'][':photoID']['content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['place-lookup'][':place-lookupID'].photo[':photoID'].content.$get(args, options),
  )
}

export async function postSandboxUserCompany(
  args: InferRequestType<(typeof client)['sandbox-user-company']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['sandbox-user-company'].$post(args, options))
}

export async function postSandboxUserPerson(
  args: InferRequestType<(typeof client)['sandbox-user-person']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['sandbox-user-person'].$post(args, options))
}

export async function postServerError(
  args: InferRequestType<(typeof client)['server-error']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['server-error'].$post(args, options))
}

export async function postSessionServer(
  args: InferRequestType<(typeof client)['session-server']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['session-server'].$post(args, options))
}

export async function deleteSessionItemId(
  args: InferRequestType<(typeof client.session)[':itemId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.session[':itemId'].$delete(args, options))
}

export async function getUser(
  args: InferRequestType<typeof client.user.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user.$get(args, options))
}

export async function getUserCompanyItemId(
  args: InferRequestType<(typeof client)['user-company'][':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['user-company'][':itemId'].$get(args, options))
}

export async function putUserCompanyItemId(
  args: InferRequestType<(typeof client)['user-company'][':itemId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['user-company'][':itemId'].$put(args, options))
}

export async function getUserCompanyUserCompanyIDName(
  args: InferRequestType<(typeof client)['user-company'][':user-companyID']['name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['user-company'][':user-companyID'].name.$get(args, options))
}

export async function getUserPaymentServiceProviderItemId(
  args: InferRequestType<(typeof client)['user-payment-service-provider'][':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['user-payment-service-provider'][':itemId'].$get(args, options))
}

export async function getUserPersonItemId(
  args: InferRequestType<(typeof client)['user-person'][':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['user-person'][':itemId'].$get(args, options))
}

export async function putUserPersonItemId(
  args: InferRequestType<(typeof client)['user-person'][':itemId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['user-person'][':itemId'].$put(args, options))
}

export async function getUserItemId(
  args: InferRequestType<(typeof client.user)[':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':itemId'].$get(args, options))
}

export async function getUserUserIDAttachmentAttachmentIDContent(
  args: InferRequestType<
    (typeof client.user)[':userID']['attachment'][':attachmentID']['content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID'].attachment[':attachmentID'].content.$get(args, options),
  )
}

export async function getUserUserIDAttachmentItemId(
  args: InferRequestType<(typeof client.user)[':userID']['attachment'][':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID'].attachment[':itemId'].$get(args, options))
}

export async function getUserUserIDBillingContractSubscription(
  args: InferRequestType<(typeof client.user)[':userID']['billing-contract-subscription']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['billing-contract-subscription'].$get(args, options),
  )
}

export async function getUserUserIDBunqmeFundraiserProfile(
  args: InferRequestType<(typeof client.user)[':userID']['bunqme-fundraiser-profile']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['bunqme-fundraiser-profile'].$get(args, options),
  )
}

export async function getUserUserIDBunqmeFundraiserProfileItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['bunqme-fundraiser-profile'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['bunqme-fundraiser-profile'][':itemId'].$get(args, options),
  )
}

export async function getUserUserIDCard(
  args: InferRequestType<(typeof client.user)[':userID']['card']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID'].card.$get(args, options))
}

export async function postUserUserIDCardBatch(
  args: InferRequestType<(typeof client.user)[':userID']['card-batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['card-batch'].$post(args, options))
}

export async function postUserUserIDCardBatchReplace(
  args: InferRequestType<(typeof client.user)[':userID']['card-batch-replace']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['card-batch-replace'].$post(args, options))
}

export async function postUserUserIDCardCredit(
  args: InferRequestType<(typeof client.user)[':userID']['card-credit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['card-credit'].$post(args, options))
}

export async function postUserUserIDCardDebit(
  args: InferRequestType<(typeof client.user)[':userID']['card-debit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['card-debit'].$post(args, options))
}

export async function getUserUserIDCardName(
  args: InferRequestType<(typeof client.user)[':userID']['card-name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['card-name'].$get(args, options))
}

export async function getUserUserIDCardCardIDExportStatementCard(
  args: InferRequestType<
    (typeof client.user)[':userID']['card'][':cardID']['export-statement-card']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID'].card[':cardID']['export-statement-card'].$get(args, options),
  )
}

export async function getUserUserIDCardCardIDExportStatementCardCsv(
  args: InferRequestType<
    (typeof client.user)[':userID']['card'][':cardID']['export-statement-card-csv']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID'].card[':cardID']['export-statement-card-csv'].$get(args, options),
  )
}

export async function postUserUserIDCardCardIDExportStatementCardCsv(
  args: InferRequestType<
    (typeof client.user)[':userID']['card'][':cardID']['export-statement-card-csv']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID'].card[':cardID']['export-statement-card-csv'].$post(args, options),
  )
}

export async function getUserUserIDCardCardIDExportStatementCardCsvItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['card'][':cardID']['export-statement-card-csv'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID'].card[':cardID']['export-statement-card-csv'][':itemId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteUserUserIDCardCardIDExportStatementCardCsvItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['card'][':cardID']['export-statement-card-csv'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID'].card[':cardID']['export-statement-card-csv'][':itemId'].$delete(
      args,
      options,
    ),
  )
}

export async function getUserUserIDCardCardIDExportStatementCardPdf(
  args: InferRequestType<
    (typeof client.user)[':userID']['card'][':cardID']['export-statement-card-pdf']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID'].card[':cardID']['export-statement-card-pdf'].$get(args, options),
  )
}

export async function postUserUserIDCardCardIDExportStatementCardPdf(
  args: InferRequestType<
    (typeof client.user)[':userID']['card'][':cardID']['export-statement-card-pdf']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID'].card[':cardID']['export-statement-card-pdf'].$post(args, options),
  )
}

export async function getUserUserIDCardCardIDExportStatementCardPdfItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['card'][':cardID']['export-statement-card-pdf'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID'].card[':cardID']['export-statement-card-pdf'][':itemId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteUserUserIDCardCardIDExportStatementCardPdfItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['card'][':cardID']['export-statement-card-pdf'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID'].card[':cardID']['export-statement-card-pdf'][':itemId'].$delete(
      args,
      options,
    ),
  )
}

export async function getUserUserIDCardCardIDExportStatementCardExportStatementCardIDContent(
  args: InferRequestType<
    (typeof client.user)[':userID']['card'][':cardID']['export-statement-card'][':export-statement-cardID']['content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID'].card[':cardID']['export-statement-card'][
      ':export-statement-cardID'
    ].content.$get(args, options),
  )
}

export async function getUserUserIDCardCardIDExportStatementCardItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['card'][':cardID']['export-statement-card'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID'].card[':cardID']['export-statement-card'][':itemId'].$get(args, options),
  )
}

export async function getUserUserIDCardCardIDGeneratedCvc2(
  args: InferRequestType<
    (typeof client.user)[':userID']['card'][':cardID']['generated-cvc2']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID'].card[':cardID']['generated-cvc2'].$get(args, options),
  )
}

export async function postUserUserIDCardCardIDGeneratedCvc2(
  args: InferRequestType<
    (typeof client.user)[':userID']['card'][':cardID']['generated-cvc2']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID'].card[':cardID']['generated-cvc2'].$post(args, options),
  )
}

export async function getUserUserIDCardCardIDGeneratedCvc2ItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['card'][':cardID']['generated-cvc2'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID'].card[':cardID']['generated-cvc2'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDCardCardIDGeneratedCvc2ItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['card'][':cardID']['generated-cvc2'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID'].card[':cardID']['generated-cvc2'][':itemId'].$put(args, options),
  )
}

export async function postUserUserIDCardCardIDReplace(
  args: InferRequestType<(typeof client.user)[':userID']['card'][':cardID']['replace']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID'].card[':cardID'].replace.$post(args, options))
}

export async function getUserUserIDCardItemId(
  args: InferRequestType<(typeof client.user)[':userID']['card'][':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID'].card[':itemId'].$get(args, options))
}

export async function putUserUserIDCardItemId(
  args: InferRequestType<(typeof client.user)[':userID']['card'][':itemId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID'].card[':itemId'].$put(args, options))
}

export async function getUserUserIDCertificatePinned(
  args: InferRequestType<(typeof client.user)[':userID']['certificate-pinned']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['certificate-pinned'].$get(args, options))
}

export async function postUserUserIDCertificatePinned(
  args: InferRequestType<(typeof client.user)[':userID']['certificate-pinned']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['certificate-pinned'].$post(args, options))
}

export async function getUserUserIDCertificatePinnedItemId(
  args: InferRequestType<(typeof client.user)[':userID']['certificate-pinned'][':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['certificate-pinned'][':itemId'].$get(args, options),
  )
}

export async function deleteUserUserIDCertificatePinnedItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['certificate-pinned'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['certificate-pinned'][':itemId'].$delete(args, options),
  )
}

export async function getUserUserIDChallengeRequestItemId(
  args: InferRequestType<(typeof client.user)[':userID']['challenge-request'][':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['challenge-request'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDChallengeRequestItemId(
  args: InferRequestType<(typeof client.user)[':userID']['challenge-request'][':itemId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['challenge-request'][':itemId'].$put(args, options),
  )
}

export async function getUserUserIDChatConversationChatConversationIDAttachmentAttachmentIDContent(
  args: InferRequestType<
    (typeof client.user)[':userID']['chat-conversation'][':chat-conversationID']['attachment'][':attachmentID']['content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['chat-conversation'][':chat-conversationID'].attachment[
      ':attachmentID'
    ].content.$get(args, options),
  )
}

export async function getUserUserIDCompany(
  args: InferRequestType<(typeof client.user)[':userID']['company']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID'].company.$get(args, options))
}

export async function postUserUserIDCompany(
  args: InferRequestType<(typeof client.user)[':userID']['company']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID'].company.$post(args, options))
}

export async function getUserUserIDCompanyItemId(
  args: InferRequestType<(typeof client.user)[':userID']['company'][':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID'].company[':itemId'].$get(args, options))
}

export async function putUserUserIDCompanyItemId(
  args: InferRequestType<(typeof client.user)[':userID']['company'][':itemId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID'].company[':itemId'].$put(args, options))
}

export async function postUserUserIDConfirmationOfFunds(
  args: InferRequestType<(typeof client.user)[':userID']['confirmation-of-funds']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['confirmation-of-funds'].$post(args, options))
}

export async function getUserUserIDCredentialPasswordIp(
  args: InferRequestType<(typeof client.user)[':userID']['credential-password-ip']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['credential-password-ip'].$get(args, options))
}

export async function getUserUserIDCredentialPasswordIpCredentialPasswordIpIDIp(
  args: InferRequestType<
    (typeof client.user)[':userID']['credential-password-ip'][':credential-password-ipID']['ip']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['credential-password-ip'][':credential-password-ipID'].ip.$get(
      args,
      options,
    ),
  )
}

export async function postUserUserIDCredentialPasswordIpCredentialPasswordIpIDIp(
  args: InferRequestType<
    (typeof client.user)[':userID']['credential-password-ip'][':credential-password-ipID']['ip']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['credential-password-ip'][':credential-password-ipID'].ip.$post(
      args,
      options,
    ),
  )
}

export async function getUserUserIDCredentialPasswordIpCredentialPasswordIpIDIpItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['credential-password-ip'][':credential-password-ipID']['ip'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['credential-password-ip'][':credential-password-ipID'].ip[
      ':itemId'
    ].$get(args, options),
  )
}

export async function putUserUserIDCredentialPasswordIpCredentialPasswordIpIDIpItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['credential-password-ip'][':credential-password-ipID']['ip'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['credential-password-ip'][':credential-password-ipID'].ip[
      ':itemId'
    ].$put(args, options),
  )
}

export async function getUserUserIDCredentialPasswordIpItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['credential-password-ip'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['credential-password-ip'][':itemId'].$get(args, options),
  )
}

export async function getUserUserIDCurrencyCloudBeneficiary(
  args: InferRequestType<(typeof client.user)[':userID']['currency-cloud-beneficiary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['currency-cloud-beneficiary'].$get(args, options),
  )
}

export async function postUserUserIDCurrencyCloudBeneficiary(
  args: InferRequestType<(typeof client.user)[':userID']['currency-cloud-beneficiary']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['currency-cloud-beneficiary'].$post(args, options),
  )
}

export async function getUserUserIDCurrencyCloudBeneficiaryRequirement(
  args: InferRequestType<
    (typeof client.user)[':userID']['currency-cloud-beneficiary-requirement']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['currency-cloud-beneficiary-requirement'].$get(args, options),
  )
}

export async function getUserUserIDCurrencyCloudBeneficiaryItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['currency-cloud-beneficiary'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['currency-cloud-beneficiary'][':itemId'].$get(args, options),
  )
}

export async function getUserUserIDEvent(
  args: InferRequestType<(typeof client.user)[':userID']['event']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID'].event.$get(args, options))
}

export async function getUserUserIDEventItemId(
  args: InferRequestType<(typeof client.user)[':userID']['event'][':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID'].event[':itemId'].$get(args, options))
}

export async function getUserUserIDExportAnnualOverview(
  args: InferRequestType<(typeof client.user)[':userID']['export-annual-overview']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['export-annual-overview'].$get(args, options))
}

export async function postUserUserIDExportAnnualOverview(
  args: InferRequestType<(typeof client.user)[':userID']['export-annual-overview']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['export-annual-overview'].$post(args, options))
}

export async function getUserUserIDExportAnnualOverviewExportAnnualOverviewIDContent(
  args: InferRequestType<
    (typeof client.user)[':userID']['export-annual-overview'][':export-annual-overviewID']['content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['export-annual-overview'][':export-annual-overviewID'].content.$get(
      args,
      options,
    ),
  )
}

export async function getUserUserIDExportAnnualOverviewItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['export-annual-overview'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['export-annual-overview'][':itemId'].$get(args, options),
  )
}

export async function deleteUserUserIDExportAnnualOverviewItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['export-annual-overview'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['export-annual-overview'][':itemId'].$delete(args, options),
  )
}

export async function getUserUserIDFeatureAnnouncementItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['feature-announcement'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['feature-announcement'][':itemId'].$get(args, options),
  )
}

export async function getUserUserIDInsightPreferenceDate(
  args: InferRequestType<(typeof client.user)[':userID']['insight-preference-date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['insight-preference-date'].$get(args, options))
}

export async function getUserUserIDInsights(
  args: InferRequestType<(typeof client.user)[':userID']['insights']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID'].insights.$get(args, options))
}

export async function getUserUserIDInsightsSearch(
  args: InferRequestType<(typeof client.user)[':userID']['insights-search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['insights-search'].$get(args, options))
}

export async function getUserUserIDInvoice(
  args: InferRequestType<(typeof client.user)[':userID']['invoice']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID'].invoice.$get(args, options))
}

export async function getUserUserIDInvoiceInvoiceIDPdfContent(
  args: InferRequestType<
    (typeof client.user)[':userID']['invoice'][':invoiceID']['pdf-content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID'].invoice[':invoiceID']['pdf-content'].$get(args, options),
  )
}

export async function getUserUserIDInvoiceItemId(
  args: InferRequestType<(typeof client.user)[':userID']['invoice'][':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID'].invoice[':itemId'].$get(args, options))
}

export async function getUserUserIDLegalName(
  args: InferRequestType<(typeof client.user)[':userID']['legal-name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['legal-name'].$get(args, options))
}

export async function getUserUserIDLimit(
  args: InferRequestType<(typeof client.user)[':userID']['limit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID'].limit.$get(args, options))
}

export async function getUserUserIDMonetaryAccount(
  args: InferRequestType<(typeof client.user)[':userID']['monetary-account']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['monetary-account'].$get(args, options))
}

export async function getUserUserIDMonetaryAccountBank(
  args: InferRequestType<(typeof client.user)[':userID']['monetary-account-bank']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['monetary-account-bank'].$get(args, options))
}

export async function postUserUserIDMonetaryAccountBank(
  args: InferRequestType<(typeof client.user)[':userID']['monetary-account-bank']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['monetary-account-bank'].$post(args, options))
}

export async function getUserUserIDMonetaryAccountBankItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account-bank'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account-bank'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountBankItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account-bank'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account-bank'][':itemId'].$put(args, options),
  )
}

export async function getUserUserIDMonetaryAccountExternal(
  args: InferRequestType<(typeof client.user)[':userID']['monetary-account-external']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account-external'].$get(args, options),
  )
}

export async function getUserUserIDMonetaryAccountExternalItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account-external'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account-external'][':itemId'].$get(args, options),
  )
}

export async function getUserUserIDMonetaryAccountJoint(
  args: InferRequestType<(typeof client.user)[':userID']['monetary-account-joint']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['monetary-account-joint'].$get(args, options))
}

export async function postUserUserIDMonetaryAccountJoint(
  args: InferRequestType<(typeof client.user)[':userID']['monetary-account-joint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['monetary-account-joint'].$post(args, options))
}

export async function getUserUserIDMonetaryAccountJointItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account-joint'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account-joint'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountJointItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account-joint'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account-joint'][':itemId'].$put(args, options),
  )
}

export async function getUserUserIDMonetaryAccountSavings(
  args: InferRequestType<(typeof client.user)[':userID']['monetary-account-savings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['monetary-account-savings'].$get(args, options))
}

export async function postUserUserIDMonetaryAccountSavings(
  args: InferRequestType<(typeof client.user)[':userID']['monetary-account-savings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account-savings'].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountSavingsItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account-savings'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account-savings'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountSavingsItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account-savings'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account-savings'][':itemId'].$put(args, options),
  )
}

export async function getUserUserIDMonetaryAccountItemId(
  args: InferRequestType<(typeof client.user)[':userID']['monetary-account'][':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':itemId'].$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDAttachment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['attachment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].attachment.$post(
      args,
      options,
    ),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDAttachmentAttachmentIDContent(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['attachment'][':attachmentID']['content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].attachment[
      ':attachmentID'
    ].content.$get(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDBunqmeFundraiserResultBunqmeFundraiserResultIDNoteAttachment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['bunqme-fundraiser-result'][':bunqme-fundraiser-resultID']['note-attachment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['bunqme-fundraiser-result'][
      ':bunqme-fundraiser-resultID'
    ]['note-attachment'].$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDBunqmeFundraiserResultBunqmeFundraiserResultIDNoteAttachment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['bunqme-fundraiser-result'][':bunqme-fundraiser-resultID']['note-attachment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['bunqme-fundraiser-result'][
      ':bunqme-fundraiser-resultID'
    ]['note-attachment'].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDBunqmeFundraiserResultBunqmeFundraiserResultIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['bunqme-fundraiser-result'][':bunqme-fundraiser-resultID']['note-attachment'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['bunqme-fundraiser-result'][
      ':bunqme-fundraiser-resultID'
    ]['note-attachment'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDBunqmeFundraiserResultBunqmeFundraiserResultIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['bunqme-fundraiser-result'][':bunqme-fundraiser-resultID']['note-attachment'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['bunqme-fundraiser-result'][
      ':bunqme-fundraiser-resultID'
    ]['note-attachment'][':itemId'].$put(args, options),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDBunqmeFundraiserResultBunqmeFundraiserResultIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['bunqme-fundraiser-result'][':bunqme-fundraiser-resultID']['note-attachment'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['bunqme-fundraiser-result'][
      ':bunqme-fundraiser-resultID'
    ]['note-attachment'][':itemId'].$delete(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDBunqmeFundraiserResultBunqmeFundraiserResultIDNoteText(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['bunqme-fundraiser-result'][':bunqme-fundraiser-resultID']['note-text']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['bunqme-fundraiser-result'][
      ':bunqme-fundraiser-resultID'
    ]['note-text'].$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDBunqmeFundraiserResultBunqmeFundraiserResultIDNoteText(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['bunqme-fundraiser-result'][':bunqme-fundraiser-resultID']['note-text']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['bunqme-fundraiser-result'][
      ':bunqme-fundraiser-resultID'
    ]['note-text'].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDBunqmeFundraiserResultBunqmeFundraiserResultIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['bunqme-fundraiser-result'][':bunqme-fundraiser-resultID']['note-text'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['bunqme-fundraiser-result'][
      ':bunqme-fundraiser-resultID'
    ]['note-text'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDBunqmeFundraiserResultBunqmeFundraiserResultIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['bunqme-fundraiser-result'][':bunqme-fundraiser-resultID']['note-text'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['bunqme-fundraiser-result'][
      ':bunqme-fundraiser-resultID'
    ]['note-text'][':itemId'].$put(args, options),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDBunqmeFundraiserResultBunqmeFundraiserResultIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['bunqme-fundraiser-result'][':bunqme-fundraiser-resultID']['note-text'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['bunqme-fundraiser-result'][
      ':bunqme-fundraiser-resultID'
    ]['note-text'][':itemId'].$delete(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDBunqmeFundraiserResultItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['bunqme-fundraiser-result'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['bunqme-fundraiser-result'][
      ':itemId'
    ].$get(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDBunqmeTab(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['bunqme-tab']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['bunqme-tab'].$get(
      args,
      options,
    ),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDBunqmeTab(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['bunqme-tab']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['bunqme-tab'].$post(
      args,
      options,
    ),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDBunqmeTabResultResponseItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['bunqme-tab-result-response'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['bunqme-tab-result-response'][
      ':itemId'
    ].$get(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDBunqmeTabItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['bunqme-tab'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['bunqme-tab'][':itemId'].$get(
      args,
      options,
    ),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDBunqmeTabItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['bunqme-tab'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['bunqme-tab'][':itemId'].$put(
      args,
      options,
    ),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDCurrencyCloudPaymentQuote(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['currency-cloud-payment-quote']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'][
      'currency-cloud-payment-quote'
    ].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDCurrencyConversion(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['currency-conversion']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['currency-conversion'].$get(
      args,
      options,
    ),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDCurrencyConversionQuote(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['currency-conversion-quote']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'][
      'currency-conversion-quote'
    ].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDCurrencyConversionQuoteItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['currency-conversion-quote'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['currency-conversion-quote'][
      ':itemId'
    ].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDCurrencyConversionQuoteItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['currency-conversion-quote'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['currency-conversion-quote'][
      ':itemId'
    ].$put(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDCurrencyConversionItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['currency-conversion'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['currency-conversion'][
      ':itemId'
    ].$get(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDCustomerStatement(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['customer-statement']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['customer-statement'].$get(
      args,
      options,
    ),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDCustomerStatement(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['customer-statement']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['customer-statement'].$post(
      args,
      options,
    ),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDCustomerStatementCustomerStatementIDContent(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['customer-statement'][':customer-statementID']['content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['customer-statement'][
      ':customer-statementID'
    ].content.$get(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDCustomerStatementItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['customer-statement'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['customer-statement'][
      ':itemId'
    ].$get(args, options),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDCustomerStatementItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['customer-statement'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['customer-statement'][
      ':itemId'
    ].$delete(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDDraftPayment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['draft-payment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['draft-payment'].$get(
      args,
      options,
    ),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDDraftPayment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['draft-payment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['draft-payment'].$post(
      args,
      options,
    ),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentDraftPaymentIDNoteAttachment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['draft-payment'][':draft-paymentID']['note-attachment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['draft-payment'][
      ':draft-paymentID'
    ]['note-attachment'].$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentDraftPaymentIDNoteAttachment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['draft-payment'][':draft-paymentID']['note-attachment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['draft-payment'][
      ':draft-paymentID'
    ]['note-attachment'].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentDraftPaymentIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['draft-payment'][':draft-paymentID']['note-attachment'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['draft-payment'][
      ':draft-paymentID'
    ]['note-attachment'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentDraftPaymentIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['draft-payment'][':draft-paymentID']['note-attachment'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['draft-payment'][
      ':draft-paymentID'
    ]['note-attachment'][':itemId'].$put(args, options),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentDraftPaymentIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['draft-payment'][':draft-paymentID']['note-attachment'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['draft-payment'][
      ':draft-paymentID'
    ]['note-attachment'][':itemId'].$delete(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentDraftPaymentIDNoteText(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['draft-payment'][':draft-paymentID']['note-text']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['draft-payment'][
      ':draft-paymentID'
    ]['note-text'].$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentDraftPaymentIDNoteText(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['draft-payment'][':draft-paymentID']['note-text']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['draft-payment'][
      ':draft-paymentID'
    ]['note-text'].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentDraftPaymentIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['draft-payment'][':draft-paymentID']['note-text'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['draft-payment'][
      ':draft-paymentID'
    ]['note-text'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentDraftPaymentIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['draft-payment'][':draft-paymentID']['note-text'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['draft-payment'][
      ':draft-paymentID'
    ]['note-text'][':itemId'].$put(args, options),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentDraftPaymentIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['draft-payment'][':draft-paymentID']['note-text'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['draft-payment'][
      ':draft-paymentID'
    ]['note-text'][':itemId'].$delete(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['draft-payment'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['draft-payment'][
      ':itemId'
    ].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDDraftPaymentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['draft-payment'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['draft-payment'][
      ':itemId'
    ].$put(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDEventEventIDStatement(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['event'][':eventID']['statement']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].event[
      ':eventID'
    ].statement.$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDEventEventIDStatementItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['event'][':eventID']['statement'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].event[':eventID'].statement[
      ':itemId'
    ].$get(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDEventEventIDStatementStatementIDContent(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['event'][':eventID']['statement'][':statementID']['content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].event[':eventID'].statement[
      ':statementID'
    ].content.$get(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDExportRib(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['export-rib']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['export-rib'].$get(
      args,
      options,
    ),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDExportRib(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['export-rib']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['export-rib'].$post(
      args,
      options,
    ),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDExportRibExportRibIDContent(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['export-rib'][':export-ribID']['content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['export-rib'][
      ':export-ribID'
    ].content.$get(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDExportRibItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['export-rib'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['export-rib'][':itemId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDExportRibItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['export-rib'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['export-rib'][
      ':itemId'
    ].$delete(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransaction(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['ideal-merchant-transaction']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'][
      'ideal-merchant-transaction'
    ].$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransaction(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['ideal-merchant-transaction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'][
      'ideal-merchant-transaction'
    ].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionIdealMerchantTransactionIDNoteAttachment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['ideal-merchant-transaction'][':ideal-merchant-transactionID']['note-attachment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['ideal-merchant-transaction'][
      ':ideal-merchant-transactionID'
    ]['note-attachment'].$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionIdealMerchantTransactionIDNoteAttachment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['ideal-merchant-transaction'][':ideal-merchant-transactionID']['note-attachment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['ideal-merchant-transaction'][
      ':ideal-merchant-transactionID'
    ]['note-attachment'].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionIdealMerchantTransactionIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['ideal-merchant-transaction'][':ideal-merchant-transactionID']['note-attachment'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['ideal-merchant-transaction'][
      ':ideal-merchant-transactionID'
    ]['note-attachment'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionIdealMerchantTransactionIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['ideal-merchant-transaction'][':ideal-merchant-transactionID']['note-attachment'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['ideal-merchant-transaction'][
      ':ideal-merchant-transactionID'
    ]['note-attachment'][':itemId'].$put(args, options),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionIdealMerchantTransactionIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['ideal-merchant-transaction'][':ideal-merchant-transactionID']['note-attachment'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['ideal-merchant-transaction'][
      ':ideal-merchant-transactionID'
    ]['note-attachment'][':itemId'].$delete(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionIdealMerchantTransactionIDNoteText(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['ideal-merchant-transaction'][':ideal-merchant-transactionID']['note-text']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['ideal-merchant-transaction'][
      ':ideal-merchant-transactionID'
    ]['note-text'].$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionIdealMerchantTransactionIDNoteText(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['ideal-merchant-transaction'][':ideal-merchant-transactionID']['note-text']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['ideal-merchant-transaction'][
      ':ideal-merchant-transactionID'
    ]['note-text'].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionIdealMerchantTransactionIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['ideal-merchant-transaction'][':ideal-merchant-transactionID']['note-text'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['ideal-merchant-transaction'][
      ':ideal-merchant-transactionID'
    ]['note-text'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionIdealMerchantTransactionIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['ideal-merchant-transaction'][':ideal-merchant-transactionID']['note-text'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['ideal-merchant-transaction'][
      ':ideal-merchant-transactionID'
    ]['note-text'][':itemId'].$put(args, options),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionIdealMerchantTransactionIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['ideal-merchant-transaction'][':ideal-merchant-transactionID']['note-text'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['ideal-merchant-transaction'][
      ':ideal-merchant-transactionID'
    ]['note-text'][':itemId'].$delete(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDIdealMerchantTransactionItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['ideal-merchant-transaction'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['ideal-merchant-transaction'][
      ':itemId'
    ].$get(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDInvoice(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['invoice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].invoice.$get(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDInvoiceItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['invoice'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].invoice[':itemId'].$get(
      args,
      options,
    ),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDMastercardAction(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['mastercard-action']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['mastercard-action'].$get(
      args,
      options,
    ),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['mastercard-action'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['mastercard-action'][
      ':itemId'
    ].$get(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionMastercardActionIDNoteAttachment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['mastercard-action'][':mastercard-actionID']['note-attachment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['mastercard-action'][
      ':mastercard-actionID'
    ]['note-attachment'].$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionMastercardActionIDNoteAttachment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['mastercard-action'][':mastercard-actionID']['note-attachment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['mastercard-action'][
      ':mastercard-actionID'
    ]['note-attachment'].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionMastercardActionIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['mastercard-action'][':mastercard-actionID']['note-attachment'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['mastercard-action'][
      ':mastercard-actionID'
    ]['note-attachment'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionMastercardActionIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['mastercard-action'][':mastercard-actionID']['note-attachment'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['mastercard-action'][
      ':mastercard-actionID'
    ]['note-attachment'][':itemId'].$put(args, options),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionMastercardActionIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['mastercard-action'][':mastercard-actionID']['note-attachment'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['mastercard-action'][
      ':mastercard-actionID'
    ]['note-attachment'][':itemId'].$delete(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionMastercardActionIDNoteText(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['mastercard-action'][':mastercard-actionID']['note-text']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['mastercard-action'][
      ':mastercard-actionID'
    ]['note-text'].$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionMastercardActionIDNoteText(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['mastercard-action'][':mastercard-actionID']['note-text']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['mastercard-action'][
      ':mastercard-actionID'
    ]['note-text'].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionMastercardActionIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['mastercard-action'][':mastercard-actionID']['note-text'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['mastercard-action'][
      ':mastercard-actionID'
    ]['note-text'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionMastercardActionIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['mastercard-action'][':mastercard-actionID']['note-text'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['mastercard-action'][
      ':mastercard-actionID'
    ]['note-text'][':itemId'].$put(args, options),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionMastercardActionIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['mastercard-action'][':mastercard-actionID']['note-text'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['mastercard-action'][
      ':mastercard-actionID'
    ]['note-text'][':itemId'].$delete(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDMastercardActionMastercardActionIDPayment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['mastercard-action'][':mastercard-actionID']['payment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['mastercard-action'][
      ':mastercard-actionID'
    ].payment.$get(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDNotificationFilterUrl(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['notification-filter-url']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'][
      'notification-filter-url'
    ].$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDNotificationFilterUrl(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['notification-filter-url']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'][
      'notification-filter-url'
    ].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDPayment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].payment.$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDPayment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].payment.$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDPaymentAutoAllocate(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment-auto-allocate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['payment-auto-allocate'].$get(
      args,
      options,
    ),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDPaymentAutoAllocate(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment-auto-allocate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'][
      'payment-auto-allocate'
    ].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDPaymentAutoAllocateItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment-auto-allocate'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['payment-auto-allocate'][
      ':itemId'
    ].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDPaymentAutoAllocateItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment-auto-allocate'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['payment-auto-allocate'][
      ':itemId'
    ].$put(args, options),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDPaymentAutoAllocateItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment-auto-allocate'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['payment-auto-allocate'][
      ':itemId'
    ].$delete(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDPaymentAutoAllocatePaymentAutoAllocateIDDefinition(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment-auto-allocate'][':payment-auto-allocateID']['definition']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['payment-auto-allocate'][
      ':payment-auto-allocateID'
    ].definition.$get(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDPaymentAutoAllocatePaymentAutoAllocateIDInstance(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment-auto-allocate'][':payment-auto-allocateID']['instance']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['payment-auto-allocate'][
      ':payment-auto-allocateID'
    ].instance.$get(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDPaymentAutoAllocatePaymentAutoAllocateIDInstanceItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment-auto-allocate'][':payment-auto-allocateID']['instance'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['payment-auto-allocate'][
      ':payment-auto-allocateID'
    ].instance[':itemId'].$get(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatch(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment-batch']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['payment-batch'].$get(
      args,
      options,
    ),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatch(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment-batch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['payment-batch'].$post(
      args,
      options,
    ),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment-batch'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['payment-batch'][
      ':itemId'
    ].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment-batch'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['payment-batch'][
      ':itemId'
    ].$put(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchPaymentBatchIDNoteAttachment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment-batch'][':payment-batchID']['note-attachment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['payment-batch'][
      ':payment-batchID'
    ]['note-attachment'].$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchPaymentBatchIDNoteAttachment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment-batch'][':payment-batchID']['note-attachment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['payment-batch'][
      ':payment-batchID'
    ]['note-attachment'].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchPaymentBatchIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment-batch'][':payment-batchID']['note-attachment'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['payment-batch'][
      ':payment-batchID'
    ]['note-attachment'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchPaymentBatchIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment-batch'][':payment-batchID']['note-attachment'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['payment-batch'][
      ':payment-batchID'
    ]['note-attachment'][':itemId'].$put(args, options),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchPaymentBatchIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment-batch'][':payment-batchID']['note-attachment'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['payment-batch'][
      ':payment-batchID'
    ]['note-attachment'][':itemId'].$delete(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchPaymentBatchIDNoteText(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment-batch'][':payment-batchID']['note-text']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['payment-batch'][
      ':payment-batchID'
    ]['note-text'].$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchPaymentBatchIDNoteText(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment-batch'][':payment-batchID']['note-text']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['payment-batch'][
      ':payment-batchID'
    ]['note-text'].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchPaymentBatchIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment-batch'][':payment-batchID']['note-text'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['payment-batch'][
      ':payment-batchID'
    ]['note-text'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchPaymentBatchIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment-batch'][':payment-batchID']['note-text'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['payment-batch'][
      ':payment-batchID'
    ]['note-text'][':itemId'].$put(args, options),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDPaymentBatchPaymentBatchIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment-batch'][':payment-batchID']['note-text'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['payment-batch'][
      ':payment-batchID'
    ]['note-text'][':itemId'].$delete(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDPaymentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].payment[':itemId'].$get(
      args,
      options,
    ),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDPaymentPaymentIDNoteAttachment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment'][':paymentID']['note-attachment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].payment[':paymentID'][
      'note-attachment'
    ].$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDPaymentPaymentIDNoteAttachment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment'][':paymentID']['note-attachment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].payment[':paymentID'][
      'note-attachment'
    ].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDPaymentPaymentIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment'][':paymentID']['note-attachment'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].payment[':paymentID'][
      'note-attachment'
    ][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDPaymentPaymentIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment'][':paymentID']['note-attachment'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].payment[':paymentID'][
      'note-attachment'
    ][':itemId'].$put(args, options),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDPaymentPaymentIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment'][':paymentID']['note-attachment'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].payment[':paymentID'][
      'note-attachment'
    ][':itemId'].$delete(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDPaymentPaymentIDNoteText(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment'][':paymentID']['note-text']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].payment[':paymentID'][
      'note-text'
    ].$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDPaymentPaymentIDNoteText(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment'][':paymentID']['note-text']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].payment[':paymentID'][
      'note-text'
    ].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDPaymentPaymentIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment'][':paymentID']['note-text'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].payment[':paymentID'][
      'note-text'
    ][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDPaymentPaymentIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment'][':paymentID']['note-text'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].payment[':paymentID'][
      'note-text'
    ][':itemId'].$put(args, options),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDPaymentPaymentIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['payment'][':paymentID']['note-text'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].payment[':paymentID'][
      'note-text'
    ][':itemId'].$delete(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiry(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-inquiry']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-inquiry'].$get(
      args,
      options,
    ),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiry(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-inquiry']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-inquiry'].$post(
      args,
      options,
    ),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatch(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-inquiry-batch']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-inquiry-batch'].$get(
      args,
      options,
    ),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatch(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-inquiry-batch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'][
      'request-inquiry-batch'
    ].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-inquiry-batch'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-inquiry-batch'][
      ':itemId'
    ].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-inquiry-batch'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-inquiry-batch'][
      ':itemId'
    ].$put(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchRequestInquiryBatchIDNoteAttachment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-inquiry-batch'][':request-inquiry-batchID']['note-attachment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-inquiry-batch'][
      ':request-inquiry-batchID'
    ]['note-attachment'].$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchRequestInquiryBatchIDNoteAttachment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-inquiry-batch'][':request-inquiry-batchID']['note-attachment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-inquiry-batch'][
      ':request-inquiry-batchID'
    ]['note-attachment'].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchRequestInquiryBatchIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-inquiry-batch'][':request-inquiry-batchID']['note-attachment'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-inquiry-batch'][
      ':request-inquiry-batchID'
    ]['note-attachment'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchRequestInquiryBatchIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-inquiry-batch'][':request-inquiry-batchID']['note-attachment'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-inquiry-batch'][
      ':request-inquiry-batchID'
    ]['note-attachment'][':itemId'].$put(args, options),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchRequestInquiryBatchIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-inquiry-batch'][':request-inquiry-batchID']['note-attachment'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-inquiry-batch'][
      ':request-inquiry-batchID'
    ]['note-attachment'][':itemId'].$delete(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchRequestInquiryBatchIDNoteText(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-inquiry-batch'][':request-inquiry-batchID']['note-text']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-inquiry-batch'][
      ':request-inquiry-batchID'
    ]['note-text'].$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchRequestInquiryBatchIDNoteText(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-inquiry-batch'][':request-inquiry-batchID']['note-text']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-inquiry-batch'][
      ':request-inquiry-batchID'
    ]['note-text'].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchRequestInquiryBatchIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-inquiry-batch'][':request-inquiry-batchID']['note-text'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-inquiry-batch'][
      ':request-inquiry-batchID'
    ]['note-text'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchRequestInquiryBatchIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-inquiry-batch'][':request-inquiry-batchID']['note-text'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-inquiry-batch'][
      ':request-inquiry-batchID'
    ]['note-text'][':itemId'].$put(args, options),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchRequestInquiryBatchIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-inquiry-batch'][':request-inquiry-batchID']['note-text'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-inquiry-batch'][
      ':request-inquiry-batchID'
    ]['note-text'][':itemId'].$delete(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-inquiry'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-inquiry'][
      ':itemId'
    ].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-inquiry'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-inquiry'][
      ':itemId'
    ].$put(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryRequestInquiryIDNoteAttachment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-inquiry'][':request-inquiryID']['note-attachment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-inquiry'][
      ':request-inquiryID'
    ]['note-attachment'].$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryRequestInquiryIDNoteAttachment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-inquiry'][':request-inquiryID']['note-attachment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-inquiry'][
      ':request-inquiryID'
    ]['note-attachment'].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryRequestInquiryIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-inquiry'][':request-inquiryID']['note-attachment'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-inquiry'][
      ':request-inquiryID'
    ]['note-attachment'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryRequestInquiryIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-inquiry'][':request-inquiryID']['note-attachment'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-inquiry'][
      ':request-inquiryID'
    ]['note-attachment'][':itemId'].$put(args, options),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryRequestInquiryIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-inquiry'][':request-inquiryID']['note-attachment'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-inquiry'][
      ':request-inquiryID'
    ]['note-attachment'][':itemId'].$delete(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryRequestInquiryIDNoteText(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-inquiry'][':request-inquiryID']['note-text']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-inquiry'][
      ':request-inquiryID'
    ]['note-text'].$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryRequestInquiryIDNoteText(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-inquiry'][':request-inquiryID']['note-text']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-inquiry'][
      ':request-inquiryID'
    ]['note-text'].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryRequestInquiryIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-inquiry'][':request-inquiryID']['note-text'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-inquiry'][
      ':request-inquiryID'
    ]['note-text'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryRequestInquiryIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-inquiry'][':request-inquiryID']['note-text'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-inquiry'][
      ':request-inquiryID'
    ]['note-text'][':itemId'].$put(args, options),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryRequestInquiryIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-inquiry'][':request-inquiryID']['note-text'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-inquiry'][
      ':request-inquiryID'
    ]['note-text'][':itemId'].$delete(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDRequestResponse(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-response']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-response'].$get(
      args,
      options,
    ),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-response'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-response'][
      ':itemId'
    ].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-response'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-response'][
      ':itemId'
    ].$put(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseRequestResponseIDNoteAttachment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-response'][':request-responseID']['note-attachment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-response'][
      ':request-responseID'
    ]['note-attachment'].$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseRequestResponseIDNoteAttachment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-response'][':request-responseID']['note-attachment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-response'][
      ':request-responseID'
    ]['note-attachment'].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseRequestResponseIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-response'][':request-responseID']['note-attachment'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-response'][
      ':request-responseID'
    ]['note-attachment'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseRequestResponseIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-response'][':request-responseID']['note-attachment'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-response'][
      ':request-responseID'
    ]['note-attachment'][':itemId'].$put(args, options),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseRequestResponseIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-response'][':request-responseID']['note-attachment'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-response'][
      ':request-responseID'
    ]['note-attachment'][':itemId'].$delete(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseRequestResponseIDNoteText(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-response'][':request-responseID']['note-text']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-response'][
      ':request-responseID'
    ]['note-text'].$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseRequestResponseIDNoteText(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-response'][':request-responseID']['note-text']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-response'][
      ':request-responseID'
    ]['note-text'].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseRequestResponseIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-response'][':request-responseID']['note-text'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-response'][
      ':request-responseID'
    ]['note-text'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseRequestResponseIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-response'][':request-responseID']['note-text'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-response'][
      ':request-responseID'
    ]['note-text'][':itemId'].$put(args, options),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDRequestResponseRequestResponseIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['request-response'][':request-responseID']['note-text'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['request-response'][
      ':request-responseID'
    ]['note-text'][':itemId'].$delete(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDSchedule(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].schedule.$get(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDSchedulePayment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule-payment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['schedule-payment'].$get(
      args,
      options,
    ),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDSchedulePayment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule-payment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['schedule-payment'].$post(
      args,
      options,
    ),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatch(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule-payment-batch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'][
      'schedule-payment-batch'
    ].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule-payment-batch'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['schedule-payment-batch'][
      ':itemId'
    ].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule-payment-batch'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['schedule-payment-batch'][
      ':itemId'
    ].$put(args, options),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule-payment-batch'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['schedule-payment-batch'][
      ':itemId'
    ].$delete(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchSchedulePaymentBatchIDNoteAttachment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule-payment-batch'][':schedule-payment-batchID']['note-attachment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['schedule-payment-batch'][
      ':schedule-payment-batchID'
    ]['note-attachment'].$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchSchedulePaymentBatchIDNoteAttachment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule-payment-batch'][':schedule-payment-batchID']['note-attachment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['schedule-payment-batch'][
      ':schedule-payment-batchID'
    ]['note-attachment'].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchSchedulePaymentBatchIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule-payment-batch'][':schedule-payment-batchID']['note-attachment'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['schedule-payment-batch'][
      ':schedule-payment-batchID'
    ]['note-attachment'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchSchedulePaymentBatchIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule-payment-batch'][':schedule-payment-batchID']['note-attachment'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['schedule-payment-batch'][
      ':schedule-payment-batchID'
    ]['note-attachment'][':itemId'].$put(args, options),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchSchedulePaymentBatchIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule-payment-batch'][':schedule-payment-batchID']['note-attachment'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['schedule-payment-batch'][
      ':schedule-payment-batchID'
    ]['note-attachment'][':itemId'].$delete(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchSchedulePaymentBatchIDNoteText(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule-payment-batch'][':schedule-payment-batchID']['note-text']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['schedule-payment-batch'][
      ':schedule-payment-batchID'
    ]['note-text'].$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchSchedulePaymentBatchIDNoteText(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule-payment-batch'][':schedule-payment-batchID']['note-text']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['schedule-payment-batch'][
      ':schedule-payment-batchID'
    ]['note-text'].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchSchedulePaymentBatchIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule-payment-batch'][':schedule-payment-batchID']['note-text'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['schedule-payment-batch'][
      ':schedule-payment-batchID'
    ]['note-text'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchSchedulePaymentBatchIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule-payment-batch'][':schedule-payment-batchID']['note-text'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['schedule-payment-batch'][
      ':schedule-payment-batchID'
    ]['note-text'][':itemId'].$put(args, options),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentBatchSchedulePaymentBatchIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule-payment-batch'][':schedule-payment-batchID']['note-text'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['schedule-payment-batch'][
      ':schedule-payment-batchID'
    ]['note-text'][':itemId'].$delete(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule-payment'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['schedule-payment'][
      ':itemId'
    ].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule-payment'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['schedule-payment'][
      ':itemId'
    ].$put(args, options),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule-payment'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['schedule-payment'][
      ':itemId'
    ].$delete(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentSchedulePaymentIDNoteAttachment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule-payment'][':schedule-paymentID']['note-attachment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['schedule-payment'][
      ':schedule-paymentID'
    ]['note-attachment'].$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentSchedulePaymentIDNoteAttachment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule-payment'][':schedule-paymentID']['note-attachment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['schedule-payment'][
      ':schedule-paymentID'
    ]['note-attachment'].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentSchedulePaymentIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule-payment'][':schedule-paymentID']['note-attachment'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['schedule-payment'][
      ':schedule-paymentID'
    ]['note-attachment'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentSchedulePaymentIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule-payment'][':schedule-paymentID']['note-attachment'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['schedule-payment'][
      ':schedule-paymentID'
    ]['note-attachment'][':itemId'].$put(args, options),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentSchedulePaymentIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule-payment'][':schedule-paymentID']['note-attachment'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['schedule-payment'][
      ':schedule-paymentID'
    ]['note-attachment'][':itemId'].$delete(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentSchedulePaymentIDNoteText(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule-payment'][':schedule-paymentID']['note-text']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['schedule-payment'][
      ':schedule-paymentID'
    ]['note-text'].$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentSchedulePaymentIDNoteText(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule-payment'][':schedule-paymentID']['note-text']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['schedule-payment'][
      ':schedule-paymentID'
    ]['note-text'].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentSchedulePaymentIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule-payment'][':schedule-paymentID']['note-text'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['schedule-payment'][
      ':schedule-paymentID'
    ]['note-text'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentSchedulePaymentIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule-payment'][':schedule-paymentID']['note-text'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['schedule-payment'][
      ':schedule-paymentID'
    ]['note-text'][':itemId'].$put(args, options),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDSchedulePaymentSchedulePaymentIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule-payment'][':schedule-paymentID']['note-text'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['schedule-payment'][
      ':schedule-paymentID'
    ]['note-text'][':itemId'].$delete(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDScheduleItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].schedule[':itemId'].$get(
      args,
      options,
    ),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstance(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule'][':scheduleID']['schedule-instance']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].schedule[':scheduleID'][
      'schedule-instance'
    ].$get(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule'][':scheduleID']['schedule-instance'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].schedule[':scheduleID'][
      'schedule-instance'
    ][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule'][':scheduleID']['schedule-instance'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].schedule[':scheduleID'][
      'schedule-instance'
    ][':itemId'].$put(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceScheduleInstanceIDNoteAttachment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule'][':scheduleID']['schedule-instance'][':schedule-instanceID']['note-attachment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].schedule[':scheduleID'][
      'schedule-instance'
    ][':schedule-instanceID']['note-attachment'].$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceScheduleInstanceIDNoteAttachment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule'][':scheduleID']['schedule-instance'][':schedule-instanceID']['note-attachment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].schedule[':scheduleID'][
      'schedule-instance'
    ][':schedule-instanceID']['note-attachment'].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceScheduleInstanceIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule'][':scheduleID']['schedule-instance'][':schedule-instanceID']['note-attachment'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].schedule[':scheduleID'][
      'schedule-instance'
    ][':schedule-instanceID']['note-attachment'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceScheduleInstanceIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule'][':scheduleID']['schedule-instance'][':schedule-instanceID']['note-attachment'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].schedule[':scheduleID'][
      'schedule-instance'
    ][':schedule-instanceID']['note-attachment'][':itemId'].$put(args, options),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceScheduleInstanceIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule'][':scheduleID']['schedule-instance'][':schedule-instanceID']['note-attachment'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].schedule[':scheduleID'][
      'schedule-instance'
    ][':schedule-instanceID']['note-attachment'][':itemId'].$delete(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceScheduleInstanceIDNoteText(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule'][':scheduleID']['schedule-instance'][':schedule-instanceID']['note-text']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].schedule[':scheduleID'][
      'schedule-instance'
    ][':schedule-instanceID']['note-text'].$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceScheduleInstanceIDNoteText(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule'][':scheduleID']['schedule-instance'][':schedule-instanceID']['note-text']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].schedule[':scheduleID'][
      'schedule-instance'
    ][':schedule-instanceID']['note-text'].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceScheduleInstanceIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule'][':scheduleID']['schedule-instance'][':schedule-instanceID']['note-text'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].schedule[':scheduleID'][
      'schedule-instance'
    ][':schedule-instanceID']['note-text'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceScheduleInstanceIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule'][':scheduleID']['schedule-instance'][':schedule-instanceID']['note-text'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].schedule[':scheduleID'][
      'schedule-instance'
    ][':schedule-instanceID']['note-text'][':itemId'].$put(args, options),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceScheduleInstanceIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['schedule'][':scheduleID']['schedule-instance'][':schedule-instanceID']['note-text'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].schedule[':scheduleID'][
      'schedule-instance'
    ][':schedule-instanceID']['note-text'][':itemId'].$delete(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDShareInviteMonetaryAccountInquiry(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['share-invite-monetary-account-inquiry']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'][
      'share-invite-monetary-account-inquiry'
    ].$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDShareInviteMonetaryAccountInquiry(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['share-invite-monetary-account-inquiry']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'][
      'share-invite-monetary-account-inquiry'
    ].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDShareInviteMonetaryAccountInquiryItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['share-invite-monetary-account-inquiry'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'][
      'share-invite-monetary-account-inquiry'
    ][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDShareInviteMonetaryAccountInquiryItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['share-invite-monetary-account-inquiry'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'][
      'share-invite-monetary-account-inquiry'
    ][':itemId'].$put(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransaction(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['sofort-merchant-transaction']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'][
      'sofort-merchant-transaction'
    ].$get(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['sofort-merchant-transaction'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'][
      'sofort-merchant-transaction'
    ][':itemId'].$get(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionSofortMerchantTransactionIDNoteAttachment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['sofort-merchant-transaction'][':sofort-merchant-transactionID']['note-attachment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'][
      'sofort-merchant-transaction'
    ][':sofort-merchant-transactionID']['note-attachment'].$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionSofortMerchantTransactionIDNoteAttachment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['sofort-merchant-transaction'][':sofort-merchant-transactionID']['note-attachment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'][
      'sofort-merchant-transaction'
    ][':sofort-merchant-transactionID']['note-attachment'].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionSofortMerchantTransactionIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['sofort-merchant-transaction'][':sofort-merchant-transactionID']['note-attachment'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'][
      'sofort-merchant-transaction'
    ][':sofort-merchant-transactionID']['note-attachment'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionSofortMerchantTransactionIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['sofort-merchant-transaction'][':sofort-merchant-transactionID']['note-attachment'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'][
      'sofort-merchant-transaction'
    ][':sofort-merchant-transactionID']['note-attachment'][':itemId'].$put(args, options),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionSofortMerchantTransactionIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['sofort-merchant-transaction'][':sofort-merchant-transactionID']['note-attachment'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'][
      'sofort-merchant-transaction'
    ][':sofort-merchant-transactionID']['note-attachment'][':itemId'].$delete(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionSofortMerchantTransactionIDNoteText(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['sofort-merchant-transaction'][':sofort-merchant-transactionID']['note-text']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'][
      'sofort-merchant-transaction'
    ][':sofort-merchant-transactionID']['note-text'].$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionSofortMerchantTransactionIDNoteText(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['sofort-merchant-transaction'][':sofort-merchant-transactionID']['note-text']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'][
      'sofort-merchant-transaction'
    ][':sofort-merchant-transactionID']['note-text'].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionSofortMerchantTransactionIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['sofort-merchant-transaction'][':sofort-merchant-transactionID']['note-text'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'][
      'sofort-merchant-transaction'
    ][':sofort-merchant-transactionID']['note-text'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionSofortMerchantTransactionIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['sofort-merchant-transaction'][':sofort-merchant-transactionID']['note-text'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'][
      'sofort-merchant-transaction'
    ][':sofort-merchant-transactionID']['note-text'][':itemId'].$put(args, options),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDSofortMerchantTransactionSofortMerchantTransactionIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['sofort-merchant-transaction'][':sofort-merchant-transactionID']['note-text'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'][
      'sofort-merchant-transaction'
    ][':sofort-merchant-transactionID']['note-text'][':itemId'].$delete(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDSwitchServicePaymentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['switch-service-payment'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['switch-service-payment'][
      ':itemId'
    ].$get(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDSwitchServicePaymentSwitchServicePaymentIDNoteAttachment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['switch-service-payment'][':switch-service-paymentID']['note-attachment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['switch-service-payment'][
      ':switch-service-paymentID'
    ]['note-attachment'].$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDSwitchServicePaymentSwitchServicePaymentIDNoteAttachment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['switch-service-payment'][':switch-service-paymentID']['note-attachment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['switch-service-payment'][
      ':switch-service-paymentID'
    ]['note-attachment'].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDSwitchServicePaymentSwitchServicePaymentIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['switch-service-payment'][':switch-service-paymentID']['note-attachment'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['switch-service-payment'][
      ':switch-service-paymentID'
    ]['note-attachment'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDSwitchServicePaymentSwitchServicePaymentIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['switch-service-payment'][':switch-service-paymentID']['note-attachment'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['switch-service-payment'][
      ':switch-service-paymentID'
    ]['note-attachment'][':itemId'].$put(args, options),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDSwitchServicePaymentSwitchServicePaymentIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['switch-service-payment'][':switch-service-paymentID']['note-attachment'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['switch-service-payment'][
      ':switch-service-paymentID'
    ]['note-attachment'][':itemId'].$delete(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDSwitchServicePaymentSwitchServicePaymentIDNoteText(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['switch-service-payment'][':switch-service-paymentID']['note-text']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['switch-service-payment'][
      ':switch-service-paymentID'
    ]['note-text'].$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDSwitchServicePaymentSwitchServicePaymentIDNoteText(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['switch-service-payment'][':switch-service-paymentID']['note-text']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['switch-service-payment'][
      ':switch-service-paymentID'
    ]['note-text'].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDSwitchServicePaymentSwitchServicePaymentIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['switch-service-payment'][':switch-service-paymentID']['note-text'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['switch-service-payment'][
      ':switch-service-paymentID'
    ]['note-text'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDSwitchServicePaymentSwitchServicePaymentIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['switch-service-payment'][':switch-service-paymentID']['note-text'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['switch-service-payment'][
      ':switch-service-paymentID'
    ]['note-text'][':itemId'].$put(args, options),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDSwitchServicePaymentSwitchServicePaymentIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['switch-service-payment'][':switch-service-paymentID']['note-text'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['switch-service-payment'][
      ':switch-service-paymentID'
    ]['note-text'][':itemId'].$delete(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDTranslinkTransaction(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['translink-transaction']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['translink-transaction'].$get(
      args,
      options,
    ),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDTranslinkTransaction(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['translink-transaction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'][
      'translink-transaction'
    ].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDTranslinkTransactionItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['translink-transaction'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['translink-transaction'][
      ':itemId'
    ].$get(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDWhitelistSdd(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['whitelist-sdd']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['whitelist-sdd'].$get(
      args,
      options,
    ),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDWhitelistSddItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['whitelist-sdd'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID']['whitelist-sdd'][
      ':itemId'
    ].$get(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDWhitelistWhitelistIDWhitelistResultWhitelistResultIDNoteAttachment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['whitelist'][':whitelistID']['whitelist-result'][':whitelist-resultID']['note-attachment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].whitelist[':whitelistID'][
      'whitelist-result'
    ][':whitelist-resultID']['note-attachment'].$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDWhitelistWhitelistIDWhitelistResultWhitelistResultIDNoteAttachment(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['whitelist'][':whitelistID']['whitelist-result'][':whitelist-resultID']['note-attachment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].whitelist[':whitelistID'][
      'whitelist-result'
    ][':whitelist-resultID']['note-attachment'].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDWhitelistWhitelistIDWhitelistResultWhitelistResultIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['whitelist'][':whitelistID']['whitelist-result'][':whitelist-resultID']['note-attachment'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].whitelist[':whitelistID'][
      'whitelist-result'
    ][':whitelist-resultID']['note-attachment'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDWhitelistWhitelistIDWhitelistResultWhitelistResultIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['whitelist'][':whitelistID']['whitelist-result'][':whitelist-resultID']['note-attachment'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].whitelist[':whitelistID'][
      'whitelist-result'
    ][':whitelist-resultID']['note-attachment'][':itemId'].$put(args, options),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDWhitelistWhitelistIDWhitelistResultWhitelistResultIDNoteAttachmentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['whitelist'][':whitelistID']['whitelist-result'][':whitelist-resultID']['note-attachment'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].whitelist[':whitelistID'][
      'whitelist-result'
    ][':whitelist-resultID']['note-attachment'][':itemId'].$delete(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDWhitelistWhitelistIDWhitelistResultWhitelistResultIDNoteText(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['whitelist'][':whitelistID']['whitelist-result'][':whitelist-resultID']['note-text']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].whitelist[':whitelistID'][
      'whitelist-result'
    ][':whitelist-resultID']['note-text'].$get(args, options),
  )
}

export async function postUserUserIDMonetaryAccountMonetaryAccountIDWhitelistWhitelistIDWhitelistResultWhitelistResultIDNoteText(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['whitelist'][':whitelistID']['whitelist-result'][':whitelist-resultID']['note-text']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].whitelist[':whitelistID'][
      'whitelist-result'
    ][':whitelist-resultID']['note-text'].$post(args, options),
  )
}

export async function getUserUserIDMonetaryAccountMonetaryAccountIDWhitelistWhitelistIDWhitelistResultWhitelistResultIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['whitelist'][':whitelistID']['whitelist-result'][':whitelist-resultID']['note-text'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].whitelist[':whitelistID'][
      'whitelist-result'
    ][':whitelist-resultID']['note-text'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDMonetaryAccountMonetaryAccountIDWhitelistWhitelistIDWhitelistResultWhitelistResultIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['whitelist'][':whitelistID']['whitelist-result'][':whitelist-resultID']['note-text'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].whitelist[':whitelistID'][
      'whitelist-result'
    ][':whitelist-resultID']['note-text'][':itemId'].$put(args, options),
  )
}

export async function deleteUserUserIDMonetaryAccountMonetaryAccountIDWhitelistWhitelistIDWhitelistResultWhitelistResultIDNoteTextItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['monetary-account'][':monetary-accountID']['whitelist'][':whitelistID']['whitelist-result'][':whitelist-resultID']['note-text'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['monetary-account'][':monetary-accountID'].whitelist[':whitelistID'][
      'whitelist-result'
    ][':whitelist-resultID']['note-text'][':itemId'].$delete(args, options),
  )
}

export async function getUserUserIDNotificationFilterEmail(
  args: InferRequestType<(typeof client.user)[':userID']['notification-filter-email']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['notification-filter-email'].$get(args, options),
  )
}

export async function postUserUserIDNotificationFilterEmail(
  args: InferRequestType<(typeof client.user)[':userID']['notification-filter-email']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['notification-filter-email'].$post(args, options),
  )
}

export async function getUserUserIDNotificationFilterPush(
  args: InferRequestType<(typeof client.user)[':userID']['notification-filter-push']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['notification-filter-push'].$get(args, options))
}

export async function postUserUserIDNotificationFilterPush(
  args: InferRequestType<(typeof client.user)[':userID']['notification-filter-push']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['notification-filter-push'].$post(args, options),
  )
}

export async function getUserUserIDNotificationFilterUrl(
  args: InferRequestType<(typeof client.user)[':userID']['notification-filter-url']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['notification-filter-url'].$get(args, options))
}

export async function postUserUserIDNotificationFilterUrl(
  args: InferRequestType<(typeof client.user)[':userID']['notification-filter-url']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['notification-filter-url'].$post(args, options))
}

export async function getUserUserIDOauthClient(
  args: InferRequestType<(typeof client.user)[':userID']['oauth-client']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['oauth-client'].$get(args, options))
}

export async function postUserUserIDOauthClient(
  args: InferRequestType<(typeof client.user)[':userID']['oauth-client']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['oauth-client'].$post(args, options))
}

export async function getUserUserIDOauthClientItemId(
  args: InferRequestType<(typeof client.user)[':userID']['oauth-client'][':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['oauth-client'][':itemId'].$get(args, options))
}

export async function putUserUserIDOauthClientItemId(
  args: InferRequestType<(typeof client.user)[':userID']['oauth-client'][':itemId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['oauth-client'][':itemId'].$put(args, options))
}

export async function getUserUserIDOauthClientOauthClientIDCallbackUrl(
  args: InferRequestType<
    (typeof client.user)[':userID']['oauth-client'][':oauth-clientID']['callback-url']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['oauth-client'][':oauth-clientID']['callback-url'].$get(args, options),
  )
}

export async function postUserUserIDOauthClientOauthClientIDCallbackUrl(
  args: InferRequestType<
    (typeof client.user)[':userID']['oauth-client'][':oauth-clientID']['callback-url']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['oauth-client'][':oauth-clientID']['callback-url'].$post(args, options),
  )
}

export async function getUserUserIDOauthClientOauthClientIDCallbackUrlItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['oauth-client'][':oauth-clientID']['callback-url'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['oauth-client'][':oauth-clientID']['callback-url'][':itemId'].$get(
      args,
      options,
    ),
  )
}

export async function putUserUserIDOauthClientOauthClientIDCallbackUrlItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['oauth-client'][':oauth-clientID']['callback-url'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['oauth-client'][':oauth-clientID']['callback-url'][':itemId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteUserUserIDOauthClientOauthClientIDCallbackUrlItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['oauth-client'][':oauth-clientID']['callback-url'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['oauth-client'][':oauth-clientID']['callback-url'][':itemId'].$delete(
      args,
      options,
    ),
  )
}

export async function getUserUserIDPaymentAutoAllocate(
  args: InferRequestType<(typeof client.user)[':userID']['payment-auto-allocate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['payment-auto-allocate'].$get(args, options))
}

export async function getUserUserIDPaymentServiceProviderDraftPayment(
  args: InferRequestType<
    (typeof client.user)[':userID']['payment-service-provider-draft-payment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['payment-service-provider-draft-payment'].$get(args, options),
  )
}

export async function postUserUserIDPaymentServiceProviderDraftPayment(
  args: InferRequestType<
    (typeof client.user)[':userID']['payment-service-provider-draft-payment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['payment-service-provider-draft-payment'].$post(args, options),
  )
}

export async function getUserUserIDPaymentServiceProviderDraftPaymentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['payment-service-provider-draft-payment'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['payment-service-provider-draft-payment'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDPaymentServiceProviderDraftPaymentItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['payment-service-provider-draft-payment'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['payment-service-provider-draft-payment'][':itemId'].$put(args, options),
  )
}

export async function getUserUserIDRegistryRegistryIDRegistrySettlement(
  args: InferRequestType<
    (typeof client.user)[':userID']['registry'][':registryID']['registry-settlement']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID'].registry[':registryID']['registry-settlement'].$get(args, options),
  )
}

export async function postUserUserIDRegistryRegistryIDRegistrySettlement(
  args: InferRequestType<
    (typeof client.user)[':userID']['registry'][':registryID']['registry-settlement']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID'].registry[':registryID']['registry-settlement'].$post(args, options),
  )
}

export async function getUserUserIDRegistryRegistryIDRegistrySettlementItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['registry'][':registryID']['registry-settlement'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID'].registry[':registryID']['registry-settlement'][':itemId'].$get(
      args,
      options,
    ),
  )
}

export async function getUserUserIDReward(
  args: InferRequestType<(typeof client.user)[':userID']['reward']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID'].reward.$get(args, options))
}

export async function getUserUserIDRewardRecipient(
  args: InferRequestType<(typeof client.user)[':userID']['reward-recipient']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['reward-recipient'].$get(args, options))
}

export async function getUserUserIDRewardRecipientItemId(
  args: InferRequestType<(typeof client.user)[':userID']['reward-recipient'][':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['reward-recipient'][':itemId'].$get(args, options),
  )
}

export async function getUserUserIDRewardSender(
  args: InferRequestType<(typeof client.user)[':userID']['reward-sender']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['reward-sender'].$get(args, options))
}

export async function getUserUserIDRewardSenderItemId(
  args: InferRequestType<(typeof client.user)[':userID']['reward-sender'][':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['reward-sender'][':itemId'].$get(args, options))
}

export async function getUserUserIDRewardItemId(
  args: InferRequestType<(typeof client.user)[':userID']['reward'][':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID'].reward[':itemId'].$get(args, options))
}

export async function getUserUserIDSchedule(
  args: InferRequestType<(typeof client.user)[':userID']['schedule']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID'].schedule.$get(args, options))
}

export async function getUserUserIDShareInviteMonetaryAccountResponse(
  args: InferRequestType<
    (typeof client.user)[':userID']['share-invite-monetary-account-response']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['share-invite-monetary-account-response'].$get(args, options),
  )
}

export async function getUserUserIDShareInviteMonetaryAccountResponseItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['share-invite-monetary-account-response'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['share-invite-monetary-account-response'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDShareInviteMonetaryAccountResponseItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['share-invite-monetary-account-response'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['share-invite-monetary-account-response'][':itemId'].$put(args, options),
  )
}

export async function postUserUserIDTokenQrRequestIdeal(
  args: InferRequestType<(typeof client.user)[':userID']['token-qr-request-ideal']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['token-qr-request-ideal'].$post(args, options))
}

export async function postUserUserIDTokenQrRequestSofort(
  args: InferRequestType<(typeof client.user)[':userID']['token-qr-request-sofort']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['token-qr-request-sofort'].$post(args, options))
}

export async function getUserUserIDTransferwiseCurrency(
  args: InferRequestType<(typeof client.user)[':userID']['transferwise-currency']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['transferwise-currency'].$get(args, options))
}

export async function postUserUserIDTransferwiseQuote(
  args: InferRequestType<(typeof client.user)[':userID']['transferwise-quote']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['transferwise-quote'].$post(args, options))
}

export async function postUserUserIDTransferwiseQuoteTemporary(
  args: InferRequestType<(typeof client.user)[':userID']['transferwise-quote-temporary']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['transferwise-quote-temporary'].$post(args, options),
  )
}

export async function getUserUserIDTransferwiseQuoteTemporaryItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['transferwise-quote-temporary'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['transferwise-quote-temporary'][':itemId'].$get(args, options),
  )
}

export async function getUserUserIDTransferwiseQuoteItemId(
  args: InferRequestType<(typeof client.user)[':userID']['transferwise-quote'][':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['transferwise-quote'][':itemId'].$get(args, options),
  )
}

export async function getUserUserIDTransferwiseQuoteTransferwiseQuoteIDTransferwiseRecipient(
  args: InferRequestType<
    (typeof client.user)[':userID']['transferwise-quote'][':transferwise-quoteID']['transferwise-recipient']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['transferwise-quote'][':transferwise-quoteID'][
      'transferwise-recipient'
    ].$get(args, options),
  )
}

export async function postUserUserIDTransferwiseQuoteTransferwiseQuoteIDTransferwiseRecipient(
  args: InferRequestType<
    (typeof client.user)[':userID']['transferwise-quote'][':transferwise-quoteID']['transferwise-recipient']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['transferwise-quote'][':transferwise-quoteID'][
      'transferwise-recipient'
    ].$post(args, options),
  )
}

export async function getUserUserIDTransferwiseQuoteTransferwiseQuoteIDTransferwiseRecipientRequirement(
  args: InferRequestType<
    (typeof client.user)[':userID']['transferwise-quote'][':transferwise-quoteID']['transferwise-recipient-requirement']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['transferwise-quote'][':transferwise-quoteID'][
      'transferwise-recipient-requirement'
    ].$get(args, options),
  )
}

export async function postUserUserIDTransferwiseQuoteTransferwiseQuoteIDTransferwiseRecipientRequirement(
  args: InferRequestType<
    (typeof client.user)[':userID']['transferwise-quote'][':transferwise-quoteID']['transferwise-recipient-requirement']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['transferwise-quote'][':transferwise-quoteID'][
      'transferwise-recipient-requirement'
    ].$post(args, options),
  )
}

export async function getUserUserIDTransferwiseQuoteTransferwiseQuoteIDTransferwiseRecipientItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['transferwise-quote'][':transferwise-quoteID']['transferwise-recipient'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['transferwise-quote'][':transferwise-quoteID']['transferwise-recipient'][
      ':itemId'
    ].$get(args, options),
  )
}

export async function deleteUserUserIDTransferwiseQuoteTransferwiseQuoteIDTransferwiseRecipientItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['transferwise-quote'][':transferwise-quoteID']['transferwise-recipient'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['transferwise-quote'][':transferwise-quoteID']['transferwise-recipient'][
      ':itemId'
    ].$delete(args, options),
  )
}

export async function getUserUserIDTransferwiseQuoteTransferwiseQuoteIDTransferwiseTransfer(
  args: InferRequestType<
    (typeof client.user)[':userID']['transferwise-quote'][':transferwise-quoteID']['transferwise-transfer']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['transferwise-quote'][':transferwise-quoteID'][
      'transferwise-transfer'
    ].$get(args, options),
  )
}

export async function postUserUserIDTransferwiseQuoteTransferwiseQuoteIDTransferwiseTransfer(
  args: InferRequestType<
    (typeof client.user)[':userID']['transferwise-quote'][':transferwise-quoteID']['transferwise-transfer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['transferwise-quote'][':transferwise-quoteID'][
      'transferwise-transfer'
    ].$post(args, options),
  )
}

export async function postUserUserIDTransferwiseQuoteTransferwiseQuoteIDTransferwiseTransferRequirement(
  args: InferRequestType<
    (typeof client.user)[':userID']['transferwise-quote'][':transferwise-quoteID']['transferwise-transfer-requirement']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['transferwise-quote'][':transferwise-quoteID'][
      'transferwise-transfer-requirement'
    ].$post(args, options),
  )
}

export async function getUserUserIDTransferwiseQuoteTransferwiseQuoteIDTransferwiseTransferItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['transferwise-quote'][':transferwise-quoteID']['transferwise-transfer'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['transferwise-quote'][':transferwise-quoteID']['transferwise-transfer'][
      ':itemId'
    ].$get(args, options),
  )
}

export async function getUserUserIDTransferwiseUser(
  args: InferRequestType<(typeof client.user)[':userID']['transferwise-user']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['transferwise-user'].$get(args, options))
}

export async function postUserUserIDTransferwiseUser(
  args: InferRequestType<(typeof client.user)[':userID']['transferwise-user']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['transferwise-user'].$post(args, options))
}

export async function getUserUserIDTreeProgress(
  args: InferRequestType<(typeof client.user)[':userID']['tree-progress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['tree-progress'].$get(args, options))
}

export async function getUserUserIDWhitelistSdd(
  args: InferRequestType<(typeof client.user)[':userID']['whitelist-sdd']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['whitelist-sdd'].$get(args, options))
}

export async function getUserUserIDWhitelistSddOneOff(
  args: InferRequestType<(typeof client.user)[':userID']['whitelist-sdd-one-off']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['whitelist-sdd-one-off'].$get(args, options))
}

export async function postUserUserIDWhitelistSddOneOff(
  args: InferRequestType<(typeof client.user)[':userID']['whitelist-sdd-one-off']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['whitelist-sdd-one-off'].$post(args, options))
}

export async function getUserUserIDWhitelistSddOneOffItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['whitelist-sdd-one-off'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['whitelist-sdd-one-off'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDWhitelistSddOneOffItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['whitelist-sdd-one-off'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['whitelist-sdd-one-off'][':itemId'].$put(args, options),
  )
}

export async function deleteUserUserIDWhitelistSddOneOffItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['whitelist-sdd-one-off'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['whitelist-sdd-one-off'][':itemId'].$delete(args, options),
  )
}

export async function getUserUserIDWhitelistSddRecurring(
  args: InferRequestType<(typeof client.user)[':userID']['whitelist-sdd-recurring']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['whitelist-sdd-recurring'].$get(args, options))
}

export async function postUserUserIDWhitelistSddRecurring(
  args: InferRequestType<(typeof client.user)[':userID']['whitelist-sdd-recurring']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['whitelist-sdd-recurring'].$post(args, options))
}

export async function getUserUserIDWhitelistSddRecurringItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['whitelist-sdd-recurring'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['whitelist-sdd-recurring'][':itemId'].$get(args, options),
  )
}

export async function putUserUserIDWhitelistSddRecurringItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['whitelist-sdd-recurring'][':itemId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['whitelist-sdd-recurring'][':itemId'].$put(args, options),
  )
}

export async function deleteUserUserIDWhitelistSddRecurringItemId(
  args: InferRequestType<
    (typeof client.user)[':userID']['whitelist-sdd-recurring'][':itemId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.user[':userID']['whitelist-sdd-recurring'][':itemId'].$delete(args, options),
  )
}

export async function getUserUserIDWhitelistSddItemId(
  args: InferRequestType<(typeof client.user)[':userID']['whitelist-sdd'][':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user[':userID']['whitelist-sdd'][':itemId'].$get(args, options))
}
