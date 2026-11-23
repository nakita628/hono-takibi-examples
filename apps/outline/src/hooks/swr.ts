import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccessRequestsApproveKey() {
  return ['accessRequests.approve'] as const
}

export function getAccessRequestsCreateKey() {
  return ['accessRequests.create'] as const
}

export function getAccessRequestsDismissKey() {
  return ['accessRequests.dismiss'] as const
}

export function getAccessRequestsInfoKey() {
  return ['accessRequests.info'] as const
}

export function getApiKeysCreateKey() {
  return ['apiKeys.create'] as const
}

export function getApiKeysDeleteKey() {
  return ['apiKeys.delete'] as const
}

export function getApiKeysListKey() {
  return ['apiKeys.list'] as const
}

export function getAttachmentsCreateKey() {
  return ['attachments.create'] as const
}

export function getAttachmentsCreateFromUrlKey() {
  return ['attachments.createFromUrl'] as const
}

export function getAttachmentsDeleteKey() {
  return ['attachments.delete'] as const
}

export function getAttachmentsListKey() {
  return ['attachments.list'] as const
}

export function getAttachmentsRedirectKey() {
  return ['attachments.redirect'] as const
}

export function getAuthConfigKey() {
  return ['auth.config'] as const
}

export function getAuthDeleteKey() {
  return ['auth.delete'] as const
}

export function getAuthInfoKey() {
  return ['auth.info'] as const
}

export function getCollectionsAddGroupKey() {
  return ['collections.add_group'] as const
}

export function getCollectionsAddUserKey() {
  return ['collections.add_user'] as const
}

export function getCollectionsArchiveKey() {
  return ['collections.archive'] as const
}

export function getCollectionsCreateKey() {
  return ['collections.create'] as const
}

export function getCollectionsDeleteKey() {
  return ['collections.delete'] as const
}

export function getCollectionsDocumentsKey() {
  return ['collections.documents'] as const
}

export function getCollectionsDuplicateKey() {
  return ['collections.duplicate'] as const
}

export function getCollectionsExportKey() {
  return ['collections.export'] as const
}

export function getCollectionsExportAllKey() {
  return ['collections.export_all'] as const
}

export function getCollectionsGroupMembershipsKey() {
  return ['collections.group_memberships'] as const
}

export function getCollectionsImportKey() {
  return ['collections.import'] as const
}

export function getCollectionsInfoKey() {
  return ['collections.info'] as const
}

export function getCollectionsListKey() {
  return ['collections.list'] as const
}

export function getCollectionsMembershipsKey() {
  return ['collections.memberships'] as const
}

export function getCollectionsMoveKey() {
  return ['collections.move'] as const
}

export function getCollectionsRemoveGroupKey() {
  return ['collections.remove_group'] as const
}

export function getCollectionsRemoveUserKey() {
  return ['collections.remove_user'] as const
}

export function getCollectionsRestoreKey() {
  return ['collections.restore'] as const
}

export function getCollectionsUpdateKey() {
  return ['collections.update'] as const
}

export function getCommentsAddReactionKey() {
  return ['comments.add_reaction'] as const
}

export function getCommentsCreateKey() {
  return ['comments.create'] as const
}

export function getCommentsDeleteKey() {
  return ['comments.delete'] as const
}

export function getCommentsInfoKey() {
  return ['comments.info'] as const
}

export function getCommentsListKey() {
  return ['comments.list'] as const
}

export function getCommentsRemoveReactionKey() {
  return ['comments.remove_reaction'] as const
}

export function getCommentsResolveKey() {
  return ['comments.resolve'] as const
}

export function getCommentsUnresolveKey() {
  return ['comments.unresolve'] as const
}

export function getCommentsUpdateKey() {
  return ['comments.update'] as const
}

export function getDataAttributesCreateKey() {
  return ['dataAttributes.create'] as const
}

export function getDataAttributesDeleteKey() {
  return ['dataAttributes.delete'] as const
}

export function getDataAttributesInfoKey() {
  return ['dataAttributes.info'] as const
}

export function getDataAttributesListKey() {
  return ['dataAttributes.list'] as const
}

export function getDataAttributesUpdateKey() {
  return ['dataAttributes.update'] as const
}

export function getDocumentsAddGroupKey() {
  return ['documents.add_group'] as const
}

export function getDocumentsAddUserKey() {
  return ['documents.add_user'] as const
}

export function getDocumentsAnswerQuestionKey() {
  return ['documents.answerQuestion'] as const
}

export function getDocumentsArchiveKey() {
  return ['documents.archive'] as const
}

export function getDocumentsArchivedKey() {
  return ['documents.archived'] as const
}

export function getDocumentsCreateKey() {
  return ['documents.create'] as const
}

export function getDocumentsDeleteKey() {
  return ['documents.delete'] as const
}

export function getDocumentsDeletedKey() {
  return ['documents.deleted'] as const
}

export function getDocumentsDocumentsKey() {
  return ['documents.documents'] as const
}

export function getDocumentsDraftsKey() {
  return ['documents.drafts'] as const
}

export function getDocumentsDuplicateKey() {
  return ['documents.duplicate'] as const
}

export function getDocumentsEmptyTrashKey() {
  return ['documents.empty_trash'] as const
}

export function getDocumentsExportKey() {
  return ['documents.export'] as const
}

export function getDocumentsGroupMembershipsKey() {
  return ['documents.group_memberships'] as const
}

export function getDocumentsImportKey() {
  return ['documents.import'] as const
}

export function getDocumentsInfoKey() {
  return ['documents.info'] as const
}

export function getDocumentsInsightsKey() {
  return ['documents.insights'] as const
}

export function getDocumentsListKey() {
  return ['documents.list'] as const
}

export function getDocumentsMembershipsKey() {
  return ['documents.memberships'] as const
}

export function getDocumentsMoveKey() {
  return ['documents.move'] as const
}

export function getDocumentsRemoveGroupKey() {
  return ['documents.remove_group'] as const
}

export function getDocumentsRemoveUserKey() {
  return ['documents.remove_user'] as const
}

export function getDocumentsRestoreKey() {
  return ['documents.restore'] as const
}

export function getDocumentsSearchKey() {
  return ['documents.search'] as const
}

export function getDocumentsSearchTitlesKey() {
  return ['documents.search_titles'] as const
}

export function getDocumentsTemplatizeKey() {
  return ['documents.templatize'] as const
}

export function getDocumentsUnpublishKey() {
  return ['documents.unpublish'] as const
}

export function getDocumentsUpdateKey() {
  return ['documents.update'] as const
}

export function getDocumentsUsersKey() {
  return ['documents.users'] as const
}

export function getDocumentsViewedKey() {
  return ['documents.viewed'] as const
}

export function getEventsListKey() {
  return ['events.list'] as const
}

export function getFileOperationsDeleteKey() {
  return ['fileOperations.delete'] as const
}

export function getFileOperationsInfoKey() {
  return ['fileOperations.info'] as const
}

export function getFileOperationsListKey() {
  return ['fileOperations.list'] as const
}

export function getFileOperationsRedirectKey() {
  return ['fileOperations.redirect'] as const
}

export function getGroupMembershipsListKey() {
  return ['groupMemberships.list'] as const
}

export function getGroupsAddUserKey() {
  return ['groups.add_user'] as const
}

export function getGroupsCreateKey() {
  return ['groups.create'] as const
}

export function getGroupsDeleteKey() {
  return ['groups.delete'] as const
}

export function getGroupsInfoKey() {
  return ['groups.info'] as const
}

export function getGroupsListKey() {
  return ['groups.list'] as const
}

export function getGroupsMembershipsKey() {
  return ['groups.memberships'] as const
}

export function getGroupsRemoveUserKey() {
  return ['groups.remove_user'] as const
}

export function getGroupsUpdateKey() {
  return ['groups.update'] as const
}

export function getGroupsUpdateUserKey() {
  return ['groups.update_user'] as const
}

export function getNotificationsListKey() {
  return ['notifications.list'] as const
}

export function getNotificationsUpdateKey() {
  return ['notifications.update'] as const
}

export function getNotificationsUpdateAllKey() {
  return ['notifications.update_all'] as const
}

export function getOauthAuthenticationsDeleteKey() {
  return ['oauthAuthentications.delete'] as const
}

export function getOauthAuthenticationsListKey() {
  return ['oauthAuthentications.list'] as const
}

export function getOauthClientsCreateKey() {
  return ['oauthClients.create'] as const
}

export function getOauthClientsDeleteKey() {
  return ['oauthClients.delete'] as const
}

export function getOauthClientsInfoKey() {
  return ['oauthClients.info'] as const
}

export function getOauthClientsListKey() {
  return ['oauthClients.list'] as const
}

export function getOauthClientsRotateSecretKey() {
  return ['oauthClients.rotate_secret'] as const
}

export function getOauthClientsUpdateKey() {
  return ['oauthClients.update'] as const
}

export function getPinsCreateKey() {
  return ['pins.create'] as const
}

export function getPinsDeleteKey() {
  return ['pins.delete'] as const
}

export function getPinsInfoKey() {
  return ['pins.info'] as const
}

export function getPinsListKey() {
  return ['pins.list'] as const
}

export function getPinsUpdateKey() {
  return ['pins.update'] as const
}

export function getReactionsListKey() {
  return ['reactions.list'] as const
}

export function getRevisionsDeleteKey() {
  return ['revisions.delete'] as const
}

export function getRevisionsExportKey() {
  return ['revisions.export'] as const
}

export function getRevisionsInfoKey() {
  return ['revisions.info'] as const
}

export function getRevisionsListKey() {
  return ['revisions.list'] as const
}

export function getRevisionsUpdateKey() {
  return ['revisions.update'] as const
}

export function getSharesCreateKey() {
  return ['shares.create'] as const
}

export function getSharesInfoKey() {
  return ['shares.info'] as const
}

export function getSharesListKey() {
  return ['shares.list'] as const
}

export function getSharesRevokeKey() {
  return ['shares.revoke'] as const
}

export function getSharesUpdateKey() {
  return ['shares.update'] as const
}

export function getStarsCreateKey() {
  return ['stars.create'] as const
}

export function getStarsDeleteKey() {
  return ['stars.delete'] as const
}

export function getStarsListKey() {
  return ['stars.list'] as const
}

export function getStarsUpdateKey() {
  return ['stars.update'] as const
}

export function getSubscriptionsCreateKey() {
  return ['subscriptions.create'] as const
}

export function getSubscriptionsDeleteKey() {
  return ['subscriptions.delete'] as const
}

export function getSubscriptionsInfoKey() {
  return ['subscriptions.info'] as const
}

export function getSubscriptionsListKey() {
  return ['subscriptions.list'] as const
}

export function getTemplatesCreateKey() {
  return ['templates.create'] as const
}

export function getTemplatesDeleteKey() {
  return ['templates.delete'] as const
}

export function getTemplatesDuplicateKey() {
  return ['templates.duplicate'] as const
}

export function getTemplatesInfoKey() {
  return ['templates.info'] as const
}

export function getTemplatesListKey() {
  return ['templates.list'] as const
}

export function getTemplatesRestoreKey() {
  return ['templates.restore'] as const
}

export function getTemplatesUpdateKey() {
  return ['templates.update'] as const
}

export function getUserMembershipsListKey() {
  return ['userMemberships.list'] as const
}

export function getUserMembershipsUpdateKey() {
  return ['userMemberships.update'] as const
}

export function getUsersActivateKey() {
  return ['users.activate'] as const
}

export function getUsersDeleteKey() {
  return ['users.delete'] as const
}

export function getUsersInfoKey() {
  return ['users.info'] as const
}

export function getUsersInviteKey() {
  return ['users.invite'] as const
}

export function getUsersListKey() {
  return ['users.list'] as const
}

export function getUsersNotificationsSubscribeKey() {
  return ['users.notificationsSubscribe'] as const
}

export function getUsersNotificationsUnsubscribeKey() {
  return ['users.notificationsUnsubscribe'] as const
}

export function getUsersResendInviteKey() {
  return ['users.resendInvite'] as const
}

export function getUsersSuspendKey() {
  return ['users.suspend'] as const
}

export function getUsersUpdateKey() {
  return ['users.update'] as const
}

export function getUsersUpdateRoleKey() {
  return ['users.update_role'] as const
}

export function getViewsListKey() {
  return ['views.list'] as const
}

export function getWebhookSubscriptionsCreateKey() {
  return ['webhookSubscriptions.create'] as const
}

export function getWebhookSubscriptionsDeleteKey() {
  return ['webhookSubscriptions.delete'] as const
}

export function getWebhookSubscriptionsListKey() {
  return ['webhookSubscriptions.list'] as const
}

export function getWebhookSubscriptionsUpdateKey() {
  return ['webhookSubscriptions.update'] as const
}

export function getPostAccessRequestsCreateKey() {
  return ['accessRequests.create', '/accessRequests.create', 'POST'] as const
}

export function usePostAccessRequestsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['accessRequests.create']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['accessRequests.create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccessRequestsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['accessRequests.create']['$post']> },
      ) => parseResponse(client['accessRequests.create'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccessRequestsInfoKey() {
  return ['accessRequests.info', '/accessRequests.info', 'POST'] as const
}

export function usePostAccessRequestsInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['accessRequests.info']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['accessRequests.info']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccessRequestsInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['accessRequests.info']['$post']> },
      ) => parseResponse(client['accessRequests.info'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccessRequestsApproveKey() {
  return ['accessRequests.approve', '/accessRequests.approve', 'POST'] as const
}

export function usePostAccessRequestsApprove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['accessRequests.approve']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['accessRequests.approve']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccessRequestsApproveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['accessRequests.approve']['$post']> },
      ) => parseResponse(client['accessRequests.approve'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccessRequestsDismissKey() {
  return ['accessRequests.dismiss', '/accessRequests.dismiss', 'POST'] as const
}

export function usePostAccessRequestsDismiss<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['accessRequests.dismiss']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['accessRequests.dismiss']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccessRequestsDismissKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['accessRequests.dismiss']['$post']> },
      ) => parseResponse(client['accessRequests.dismiss'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiKeysCreateKey() {
  return ['apiKeys.create', '/apiKeys.create', 'POST'] as const
}

export function usePostApiKeysCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['apiKeys.create']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['apiKeys.create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiKeysCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['apiKeys.create']['$post']> },
      ) => parseResponse(client['apiKeys.create'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiKeysListKey() {
  return ['apiKeys.list', '/apiKeys.list', 'POST'] as const
}

export function usePostApiKeysList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['apiKeys.list']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['apiKeys.list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiKeysListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['apiKeys.list']['$post']> },
      ) => parseResponse(client['apiKeys.list'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiKeysDeleteKey() {
  return ['apiKeys.delete', '/apiKeys.delete', 'POST'] as const
}

export function usePostApiKeysDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['apiKeys.delete']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['apiKeys.delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiKeysDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['apiKeys.delete']['$post']> },
      ) => parseResponse(client['apiKeys.delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAttachmentsCreateKey() {
  return ['attachments.create', '/attachments.create', 'POST'] as const
}

export function usePostAttachmentsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['attachments.create']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['attachments.create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAttachmentsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['attachments.create']['$post']> },
      ) => parseResponse(client['attachments.create'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAttachmentsRedirectKey() {
  return ['attachments.redirect', '/attachments.redirect', 'POST'] as const
}

export function usePostAttachmentsRedirect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['attachments.redirect']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['attachments.redirect']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAttachmentsRedirectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['attachments.redirect']['$post']> },
      ) => parseResponse(client['attachments.redirect'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAttachmentsDeleteKey() {
  return ['attachments.delete', '/attachments.delete', 'POST'] as const
}

export function usePostAttachmentsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['attachments.delete']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['attachments.delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAttachmentsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['attachments.delete']['$post']> },
      ) => parseResponse(client['attachments.delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAttachmentsListKey() {
  return ['attachments.list', '/attachments.list', 'POST'] as const
}

export function usePostAttachmentsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['attachments.list']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['attachments.list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAttachmentsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['attachments.list']['$post']> },
      ) => parseResponse(client['attachments.list'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAttachmentsCreateFromUrlKey() {
  return ['attachments.createFromUrl', '/attachments.createFromUrl', 'POST'] as const
}

export function usePostAttachmentsCreateFromUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['attachments.createFromUrl']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['attachments.createFromUrl']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAttachmentsCreateFromUrlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['attachments.createFromUrl']['$post']> },
      ) => parseResponse(client['attachments.createFromUrl'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthInfoKey() {
  return ['auth.info', '/auth.info', 'POST'] as const
}

export function usePostAuthInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['auth.info']['$post']>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['auth.info'].$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthConfigKey() {
  return ['auth.config', '/auth.config', 'POST'] as const
}

export function usePostAuthConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['auth.config']['$post']>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['auth.config'].$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthDeleteKey() {
  return ['auth.delete', '/auth.delete', 'POST'] as const
}

export function usePostAuthDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['auth.delete']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['auth.delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['auth.delete']['$post']> }) =>
        parseResponse(client['auth.delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsInfoKey() {
  return ['collections.info', '/collections.info', 'POST'] as const
}

export function usePostCollectionsInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['collections.info']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['collections.info']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['collections.info']['$post']> },
      ) => parseResponse(client['collections.info'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsDocumentsKey() {
  return ['collections.documents', '/collections.documents', 'POST'] as const
}

export function usePostCollectionsDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['collections.documents']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['collections.documents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['collections.documents']['$post']> },
      ) => parseResponse(client['collections.documents'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsListKey() {
  return ['collections.list', '/collections.list', 'POST'] as const
}

export function usePostCollectionsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['collections.list']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['collections.list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['collections.list']['$post']> },
      ) => parseResponse(client['collections.list'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsCreateKey() {
  return ['collections.create', '/collections.create', 'POST'] as const
}

export function usePostCollectionsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['collections.create']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['collections.create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['collections.create']['$post']> },
      ) => parseResponse(client['collections.create'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsDuplicateKey() {
  return ['collections.duplicate', '/collections.duplicate', 'POST'] as const
}

export function usePostCollectionsDuplicate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['collections.duplicate']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['collections.duplicate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsDuplicateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['collections.duplicate']['$post']> },
      ) => parseResponse(client['collections.duplicate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsUpdateKey() {
  return ['collections.update', '/collections.update', 'POST'] as const
}

export function usePostCollectionsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['collections.update']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['collections.update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['collections.update']['$post']> },
      ) => parseResponse(client['collections.update'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsAddUserKey() {
  return ['collections.add_user', '/collections.add_user', 'POST'] as const
}

export function usePostCollectionsAddUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['collections.add_user']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['collections.add_user']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsAddUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['collections.add_user']['$post']> },
      ) => parseResponse(client['collections.add_user'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsRemoveUserKey() {
  return ['collections.remove_user', '/collections.remove_user', 'POST'] as const
}

export function usePostCollectionsRemoveUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['collections.remove_user']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['collections.remove_user']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsRemoveUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['collections.remove_user']['$post']> },
      ) => parseResponse(client['collections.remove_user'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsMembershipsKey() {
  return ['collections.memberships', '/collections.memberships', 'POST'] as const
}

export function usePostCollectionsMemberships<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['collections.memberships']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['collections.memberships']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsMembershipsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['collections.memberships']['$post']> },
      ) => parseResponse(client['collections.memberships'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsAddGroupKey() {
  return ['collections.add_group', '/collections.add_group', 'POST'] as const
}

export function usePostCollectionsAddGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['collections.add_group']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['collections.add_group']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsAddGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['collections.add_group']['$post']> },
      ) => parseResponse(client['collections.add_group'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsRemoveGroupKey() {
  return ['collections.remove_group', '/collections.remove_group', 'POST'] as const
}

export function usePostCollectionsRemoveGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['collections.remove_group']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['collections.remove_group']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsRemoveGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['collections.remove_group']['$post']> },
      ) => parseResponse(client['collections.remove_group'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsGroupMembershipsKey() {
  return ['collections.group_memberships', '/collections.group_memberships', 'POST'] as const
}

export function usePostCollectionsGroupMemberships<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['collections.group_memberships']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['collections.group_memberships']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsGroupMembershipsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['collections.group_memberships']['$post']> },
      ) => parseResponse(client['collections.group_memberships'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsDeleteKey() {
  return ['collections.delete', '/collections.delete', 'POST'] as const
}

export function usePostCollectionsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['collections.delete']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['collections.delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['collections.delete']['$post']> },
      ) => parseResponse(client['collections.delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsExportKey() {
  return ['collections.export', '/collections.export', 'POST'] as const
}

export function usePostCollectionsExport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['collections.export']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['collections.export']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['collections.export']['$post']> },
      ) => parseResponse(client['collections.export'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsExportAllKey() {
  return ['collections.export_all', '/collections.export_all', 'POST'] as const
}

export function usePostCollectionsExportAll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['collections.export_all']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['collections.export_all']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsExportAllKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['collections.export_all']['$post']> },
      ) => parseResponse(client['collections.export_all'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsArchiveKey() {
  return ['collections.archive', '/collections.archive', 'POST'] as const
}

export function usePostCollectionsArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['collections.archive']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['collections.archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['collections.archive']['$post']> },
      ) => parseResponse(client['collections.archive'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsRestoreKey() {
  return ['collections.restore', '/collections.restore', 'POST'] as const
}

export function usePostCollectionsRestore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['collections.restore']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['collections.restore']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsRestoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['collections.restore']['$post']> },
      ) => parseResponse(client['collections.restore'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsMoveKey() {
  return ['collections.move', '/collections.move', 'POST'] as const
}

export function usePostCollectionsMove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['collections.move']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['collections.move']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsMoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['collections.move']['$post']> },
      ) => parseResponse(client['collections.move'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCollectionsImportKey() {
  return ['collections.import', '/collections.import', 'POST'] as const
}

export function usePostCollectionsImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['collections.import']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['collections.import']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCollectionsImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['collections.import']['$post']> },
      ) => parseResponse(client['collections.import'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCommentsCreateKey() {
  return ['comments.create', '/comments.create', 'POST'] as const
}

export function usePostCommentsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['comments.create']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['comments.create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCommentsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['comments.create']['$post']> },
      ) => parseResponse(client['comments.create'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCommentsInfoKey() {
  return ['comments.info', '/comments.info', 'POST'] as const
}

export function usePostCommentsInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['comments.info']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['comments.info']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCommentsInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['comments.info']['$post']> },
      ) => parseResponse(client['comments.info'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCommentsUpdateKey() {
  return ['comments.update', '/comments.update', 'POST'] as const
}

export function usePostCommentsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['comments.update']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['comments.update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCommentsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['comments.update']['$post']> },
      ) => parseResponse(client['comments.update'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCommentsDeleteKey() {
  return ['comments.delete', '/comments.delete', 'POST'] as const
}

export function usePostCommentsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['comments.delete']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['comments.delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCommentsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['comments.delete']['$post']> },
      ) => parseResponse(client['comments.delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCommentsListKey() {
  return ['comments.list', '/comments.list', 'POST'] as const
}

export function usePostCommentsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['comments.list']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['comments.list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCommentsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['comments.list']['$post']> },
      ) => parseResponse(client['comments.list'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCommentsResolveKey() {
  return ['comments.resolve', '/comments.resolve', 'POST'] as const
}

export function usePostCommentsResolve<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['comments.resolve']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['comments.resolve']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCommentsResolveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['comments.resolve']['$post']> },
      ) => parseResponse(client['comments.resolve'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCommentsUnresolveKey() {
  return ['comments.unresolve', '/comments.unresolve', 'POST'] as const
}

export function usePostCommentsUnresolve<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['comments.unresolve']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['comments.unresolve']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCommentsUnresolveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['comments.unresolve']['$post']> },
      ) => parseResponse(client['comments.unresolve'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCommentsAddReactionKey() {
  return ['comments.add_reaction', '/comments.add_reaction', 'POST'] as const
}

export function usePostCommentsAddReaction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['comments.add_reaction']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['comments.add_reaction']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCommentsAddReactionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['comments.add_reaction']['$post']> },
      ) => parseResponse(client['comments.add_reaction'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCommentsRemoveReactionKey() {
  return ['comments.remove_reaction', '/comments.remove_reaction', 'POST'] as const
}

export function usePostCommentsRemoveReaction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['comments.remove_reaction']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['comments.remove_reaction']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCommentsRemoveReactionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['comments.remove_reaction']['$post']> },
      ) => parseResponse(client['comments.remove_reaction'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDataAttributesInfoKey() {
  return ['dataAttributes.info', '/dataAttributes.info', 'POST'] as const
}

export function usePostDataAttributesInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dataAttributes.info']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dataAttributes.info']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataAttributesInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dataAttributes.info']['$post']> },
      ) => parseResponse(client['dataAttributes.info'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDataAttributesListKey() {
  return ['dataAttributes.list', '/dataAttributes.list', 'POST'] as const
}

export function usePostDataAttributesList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dataAttributes.list']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dataAttributes.list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataAttributesListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dataAttributes.list']['$post']> },
      ) => parseResponse(client['dataAttributes.list'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDataAttributesCreateKey() {
  return ['dataAttributes.create', '/dataAttributes.create', 'POST'] as const
}

export function usePostDataAttributesCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dataAttributes.create']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dataAttributes.create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataAttributesCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dataAttributes.create']['$post']> },
      ) => parseResponse(client['dataAttributes.create'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDataAttributesUpdateKey() {
  return ['dataAttributes.update', '/dataAttributes.update', 'POST'] as const
}

export function usePostDataAttributesUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dataAttributes.update']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dataAttributes.update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataAttributesUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dataAttributes.update']['$post']> },
      ) => parseResponse(client['dataAttributes.update'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDataAttributesDeleteKey() {
  return ['dataAttributes.delete', '/dataAttributes.delete', 'POST'] as const
}

export function usePostDataAttributesDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['dataAttributes.delete']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['dataAttributes.delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDataAttributesDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['dataAttributes.delete']['$post']> },
      ) => parseResponse(client['dataAttributes.delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentsInfoKey() {
  return ['documents.info', '/documents.info', 'POST'] as const
}

export function usePostDocumentsInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.info']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['documents.info']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['documents.info']['$post']> },
      ) => parseResponse(client['documents.info'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentsInsightsKey() {
  return ['documents.insights', '/documents.insights', 'POST'] as const
}

export function usePostDocumentsInsights<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.insights']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['documents.insights']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsInsightsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['documents.insights']['$post']> },
      ) => parseResponse(client['documents.insights'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentsImportKey() {
  return ['documents.import', '/documents.import', 'POST'] as const
}

export function usePostDocumentsImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.import']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['documents.import']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['documents.import']['$post']> },
      ) => parseResponse(client['documents.import'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentsExportKey() {
  return ['documents.export', '/documents.export', 'POST'] as const
}

export function usePostDocumentsExport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.export']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['documents.export']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['documents.export']['$post']> },
      ) => parseResponse(client['documents.export'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentsListKey() {
  return ['documents.list', '/documents.list', 'POST'] as const
}

export function usePostDocumentsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.list']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['documents.list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['documents.list']['$post']> },
      ) => parseResponse(client['documents.list'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentsDocumentsKey() {
  return ['documents.documents', '/documents.documents', 'POST'] as const
}

export function usePostDocumentsDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.documents']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['documents.documents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['documents.documents']['$post']> },
      ) => parseResponse(client['documents.documents'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentsDraftsKey() {
  return ['documents.drafts', '/documents.drafts', 'POST'] as const
}

export function usePostDocumentsDrafts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.drafts']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['documents.drafts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsDraftsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['documents.drafts']['$post']> },
      ) => parseResponse(client['documents.drafts'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentsViewedKey() {
  return ['documents.viewed', '/documents.viewed', 'POST'] as const
}

export function usePostDocumentsViewed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.viewed']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['documents.viewed']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsViewedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['documents.viewed']['$post']> },
      ) => parseResponse(client['documents.viewed'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentsAnswerQuestionKey() {
  return ['documents.answerQuestion', '/documents.answerQuestion', 'POST'] as const
}

export function usePostDocumentsAnswerQuestion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['documents.answerQuestion']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['documents.answerQuestion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsAnswerQuestionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['documents.answerQuestion']['$post']> },
      ) => parseResponse(client['documents.answerQuestion'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentsSearchTitlesKey() {
  return ['documents.search_titles', '/documents.search_titles', 'POST'] as const
}

export function usePostDocumentsSearchTitles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['documents.search_titles']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['documents.search_titles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsSearchTitlesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['documents.search_titles']['$post']> },
      ) => parseResponse(client['documents.search_titles'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentsSearchKey() {
  return ['documents.search', '/documents.search', 'POST'] as const
}

export function usePostDocumentsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.search']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['documents.search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['documents.search']['$post']> },
      ) => parseResponse(client['documents.search'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentsCreateKey() {
  return ['documents.create', '/documents.create', 'POST'] as const
}

export function usePostDocumentsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.create']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['documents.create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['documents.create']['$post']> },
      ) => parseResponse(client['documents.create'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentsUpdateKey() {
  return ['documents.update', '/documents.update', 'POST'] as const
}

export function usePostDocumentsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.update']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['documents.update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['documents.update']['$post']> },
      ) => parseResponse(client['documents.update'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentsTemplatizeKey() {
  return ['documents.templatize', '/documents.templatize', 'POST'] as const
}

export function usePostDocumentsTemplatize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.templatize']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['documents.templatize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsTemplatizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['documents.templatize']['$post']> },
      ) => parseResponse(client['documents.templatize'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentsUnpublishKey() {
  return ['documents.unpublish', '/documents.unpublish', 'POST'] as const
}

export function usePostDocumentsUnpublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.unpublish']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['documents.unpublish']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsUnpublishKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['documents.unpublish']['$post']> },
      ) => parseResponse(client['documents.unpublish'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentsMoveKey() {
  return ['documents.move', '/documents.move', 'POST'] as const
}

export function usePostDocumentsMove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.move']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['documents.move']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsMoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['documents.move']['$post']> },
      ) => parseResponse(client['documents.move'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentsArchiveKey() {
  return ['documents.archive', '/documents.archive', 'POST'] as const
}

export function usePostDocumentsArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.archive']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['documents.archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['documents.archive']['$post']> },
      ) => parseResponse(client['documents.archive'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentsRestoreKey() {
  return ['documents.restore', '/documents.restore', 'POST'] as const
}

export function usePostDocumentsRestore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.restore']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['documents.restore']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsRestoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['documents.restore']['$post']> },
      ) => parseResponse(client['documents.restore'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentsDeleteKey() {
  return ['documents.delete', '/documents.delete', 'POST'] as const
}

export function usePostDocumentsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.delete']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['documents.delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['documents.delete']['$post']> },
      ) => parseResponse(client['documents.delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentsUsersKey() {
  return ['documents.users', '/documents.users', 'POST'] as const
}

export function usePostDocumentsUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.users']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['documents.users']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['documents.users']['$post']> },
      ) => parseResponse(client['documents.users'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentsMembershipsKey() {
  return ['documents.memberships', '/documents.memberships', 'POST'] as const
}

export function usePostDocumentsMemberships<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.memberships']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['documents.memberships']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsMembershipsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['documents.memberships']['$post']> },
      ) => parseResponse(client['documents.memberships'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentsAddUserKey() {
  return ['documents.add_user', '/documents.add_user', 'POST'] as const
}

export function usePostDocumentsAddUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.add_user']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['documents.add_user']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsAddUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['documents.add_user']['$post']> },
      ) => parseResponse(client['documents.add_user'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentsRemoveUserKey() {
  return ['documents.remove_user', '/documents.remove_user', 'POST'] as const
}

export function usePostDocumentsRemoveUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.remove_user']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['documents.remove_user']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsRemoveUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['documents.remove_user']['$post']> },
      ) => parseResponse(client['documents.remove_user'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentsArchivedKey() {
  return ['documents.archived', '/documents.archived', 'POST'] as const
}

export function usePostDocumentsArchived<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.archived']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['documents.archived']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsArchivedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['documents.archived']['$post']> },
      ) => parseResponse(client['documents.archived'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentsDeletedKey() {
  return ['documents.deleted', '/documents.deleted', 'POST'] as const
}

export function usePostDocumentsDeleted<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.deleted']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['documents.deleted']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsDeletedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['documents.deleted']['$post']> },
      ) => parseResponse(client['documents.deleted'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentsDuplicateKey() {
  return ['documents.duplicate', '/documents.duplicate', 'POST'] as const
}

export function usePostDocumentsDuplicate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.duplicate']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['documents.duplicate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsDuplicateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['documents.duplicate']['$post']> },
      ) => parseResponse(client['documents.duplicate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentsAddGroupKey() {
  return ['documents.add_group', '/documents.add_group', 'POST'] as const
}

export function usePostDocumentsAddGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.add_group']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['documents.add_group']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsAddGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['documents.add_group']['$post']> },
      ) => parseResponse(client['documents.add_group'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentsRemoveGroupKey() {
  return ['documents.remove_group', '/documents.remove_group', 'POST'] as const
}

export function usePostDocumentsRemoveGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['documents.remove_group']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['documents.remove_group']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsRemoveGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['documents.remove_group']['$post']> },
      ) => parseResponse(client['documents.remove_group'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentsGroupMembershipsKey() {
  return ['documents.group_memberships', '/documents.group_memberships', 'POST'] as const
}

export function usePostDocumentsGroupMemberships<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['documents.group_memberships']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['documents.group_memberships']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsGroupMembershipsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['documents.group_memberships']['$post']> },
      ) => parseResponse(client['documents.group_memberships'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDocumentsEmptyTrashKey() {
  return ['documents.empty_trash', '/documents.empty_trash', 'POST'] as const
}

export function usePostDocumentsEmptyTrash<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['documents.empty_trash']['$post']>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentsEmptyTrashKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['documents.empty_trash'].$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEventsListKey() {
  return ['events.list', '/events.list', 'POST'] as const
}

export function usePostEventsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['events.list']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['events.list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEventsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['events.list']['$post']> }) =>
        parseResponse(client['events.list'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFileOperationsInfoKey() {
  return ['fileOperations.info', '/fileOperations.info', 'POST'] as const
}

export function usePostFileOperationsInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['fileOperations.info']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['fileOperations.info']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFileOperationsInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['fileOperations.info']['$post']> },
      ) => parseResponse(client['fileOperations.info'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFileOperationsDeleteKey() {
  return ['fileOperations.delete', '/fileOperations.delete', 'POST'] as const
}

export function usePostFileOperationsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['fileOperations.delete']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['fileOperations.delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFileOperationsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['fileOperations.delete']['$post']> },
      ) => parseResponse(client['fileOperations.delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFileOperationsRedirectKey() {
  return ['fileOperations.redirect', '/fileOperations.redirect', 'POST'] as const
}

export function usePostFileOperationsRedirect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['fileOperations.redirect']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['fileOperations.redirect']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFileOperationsRedirectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['fileOperations.redirect']['$post']> },
      ) => parseResponse(client['fileOperations.redirect'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFileOperationsListKey() {
  return ['fileOperations.list', '/fileOperations.list', 'POST'] as const
}

export function usePostFileOperationsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['fileOperations.list']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['fileOperations.list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFileOperationsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['fileOperations.list']['$post']> },
      ) => parseResponse(client['fileOperations.list'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGroupMembershipsListKey() {
  return ['groupMemberships.list', '/groupMemberships.list', 'POST'] as const
}

export function usePostGroupMembershipsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['groupMemberships.list']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['groupMemberships.list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupMembershipsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['groupMemberships.list']['$post']> },
      ) => parseResponse(client['groupMemberships.list'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGroupsInfoKey() {
  return ['groups.info', '/groups.info', 'POST'] as const
}

export function usePostGroupsInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.info']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['groups.info']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['groups.info']['$post']> }) =>
        parseResponse(client['groups.info'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGroupsListKey() {
  return ['groups.list', '/groups.list', 'POST'] as const
}

export function usePostGroupsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.list']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['groups.list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['groups.list']['$post']> }) =>
        parseResponse(client['groups.list'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGroupsCreateKey() {
  return ['groups.create', '/groups.create', 'POST'] as const
}

export function usePostGroupsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.create']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['groups.create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['groups.create']['$post']> },
      ) => parseResponse(client['groups.create'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGroupsUpdateKey() {
  return ['groups.update', '/groups.update', 'POST'] as const
}

export function usePostGroupsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.update']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['groups.update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['groups.update']['$post']> },
      ) => parseResponse(client['groups.update'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGroupsDeleteKey() {
  return ['groups.delete', '/groups.delete', 'POST'] as const
}

export function usePostGroupsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.delete']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['groups.delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['groups.delete']['$post']> },
      ) => parseResponse(client['groups.delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGroupsMembershipsKey() {
  return ['groups.memberships', '/groups.memberships', 'POST'] as const
}

export function usePostGroupsMemberships<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.memberships']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['groups.memberships']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsMembershipsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['groups.memberships']['$post']> },
      ) => parseResponse(client['groups.memberships'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGroupsAddUserKey() {
  return ['groups.add_user', '/groups.add_user', 'POST'] as const
}

export function usePostGroupsAddUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.add_user']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['groups.add_user']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsAddUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['groups.add_user']['$post']> },
      ) => parseResponse(client['groups.add_user'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGroupsRemoveUserKey() {
  return ['groups.remove_user', '/groups.remove_user', 'POST'] as const
}

export function usePostGroupsRemoveUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.remove_user']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['groups.remove_user']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsRemoveUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['groups.remove_user']['$post']> },
      ) => parseResponse(client['groups.remove_user'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGroupsUpdateUserKey() {
  return ['groups.update_user', '/groups.update_user', 'POST'] as const
}

export function usePostGroupsUpdateUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['groups.update_user']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['groups.update_user']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsUpdateUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['groups.update_user']['$post']> },
      ) => parseResponse(client['groups.update_user'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNotificationsListKey() {
  return ['notifications.list', '/notifications.list', 'POST'] as const
}

export function usePostNotificationsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['notifications.list']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['notifications.list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotificationsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['notifications.list']['$post']> },
      ) => parseResponse(client['notifications.list'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNotificationsUpdateKey() {
  return ['notifications.update', '/notifications.update', 'POST'] as const
}

export function usePostNotificationsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['notifications.update']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['notifications.update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotificationsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['notifications.update']['$post']> },
      ) => parseResponse(client['notifications.update'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNotificationsUpdateAllKey() {
  return ['notifications.update_all', '/notifications.update_all', 'POST'] as const
}

export function usePostNotificationsUpdateAll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['notifications.update_all']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['notifications.update_all']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNotificationsUpdateAllKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['notifications.update_all']['$post']> },
      ) => parseResponse(client['notifications.update_all'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauthAuthenticationsListKey() {
  return ['oauthAuthentications.list', '/oauthAuthentications.list', 'POST'] as const
}

export function usePostOauthAuthenticationsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['oauthAuthentications.list']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['oauthAuthentications.list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthAuthenticationsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['oauthAuthentications.list']['$post']> },
      ) => parseResponse(client['oauthAuthentications.list'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauthAuthenticationsDeleteKey() {
  return ['oauthAuthentications.delete', '/oauthAuthentications.delete', 'POST'] as const
}

export function usePostOauthAuthenticationsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['oauthAuthentications.delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['oauthAuthentications.delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthAuthenticationsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['oauthAuthentications.delete']['$post']> },
      ) => parseResponse(client['oauthAuthentications.delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauthClientsInfoKey() {
  return ['oauthClients.info', '/oauthClients.info', 'POST'] as const
}

export function usePostOauthClientsInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['oauthClients.info']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['oauthClients.info']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthClientsInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['oauthClients.info']['$post']> },
      ) => parseResponse(client['oauthClients.info'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauthClientsListKey() {
  return ['oauthClients.list', '/oauthClients.list', 'POST'] as const
}

export function usePostOauthClientsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['oauthClients.list']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['oauthClients.list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthClientsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['oauthClients.list']['$post']> },
      ) => parseResponse(client['oauthClients.list'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauthClientsCreateKey() {
  return ['oauthClients.create', '/oauthClients.create', 'POST'] as const
}

export function usePostOauthClientsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['oauthClients.create']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['oauthClients.create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthClientsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['oauthClients.create']['$post']> },
      ) => parseResponse(client['oauthClients.create'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauthClientsUpdateKey() {
  return ['oauthClients.update', '/oauthClients.update', 'POST'] as const
}

export function usePostOauthClientsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['oauthClients.update']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['oauthClients.update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthClientsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['oauthClients.update']['$post']> },
      ) => parseResponse(client['oauthClients.update'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauthClientsRotateSecretKey() {
  return ['oauthClients.rotate_secret', '/oauthClients.rotate_secret', 'POST'] as const
}

export function usePostOauthClientsRotateSecret<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['oauthClients.rotate_secret']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['oauthClients.rotate_secret']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthClientsRotateSecretKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['oauthClients.rotate_secret']['$post']> },
      ) => parseResponse(client['oauthClients.rotate_secret'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauthClientsDeleteKey() {
  return ['oauthClients.delete', '/oauthClients.delete', 'POST'] as const
}

export function usePostOauthClientsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['oauthClients.delete']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['oauthClients.delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthClientsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['oauthClients.delete']['$post']> },
      ) => parseResponse(client['oauthClients.delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPinsCreateKey() {
  return ['pins.create', '/pins.create', 'POST'] as const
}

export function usePostPinsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.create']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['pins.create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPinsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['pins.create']['$post']> }) =>
        parseResponse(client['pins.create'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPinsInfoKey() {
  return ['pins.info', '/pins.info', 'POST'] as const
}

export function usePostPinsInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.info']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['pins.info']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPinsInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['pins.info']['$post']> }) =>
        parseResponse(client['pins.info'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPinsListKey() {
  return ['pins.list', '/pins.list', 'POST'] as const
}

export function usePostPinsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.list']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['pins.list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPinsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['pins.list']['$post']> }) =>
        parseResponse(client['pins.list'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPinsUpdateKey() {
  return ['pins.update', '/pins.update', 'POST'] as const
}

export function usePostPinsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.update']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['pins.update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPinsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['pins.update']['$post']> }) =>
        parseResponse(client['pins.update'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPinsDeleteKey() {
  return ['pins.delete', '/pins.delete', 'POST'] as const
}

export function usePostPinsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['pins.delete']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['pins.delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPinsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['pins.delete']['$post']> }) =>
        parseResponse(client['pins.delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostReactionsListKey() {
  return ['reactions.list', '/reactions.list', 'POST'] as const
}

export function usePostReactionsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['reactions.list']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['reactions.list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReactionsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['reactions.list']['$post']> },
      ) => parseResponse(client['reactions.list'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRevisionsInfoKey() {
  return ['revisions.info', '/revisions.info', 'POST'] as const
}

export function usePostRevisionsInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['revisions.info']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['revisions.info']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRevisionsInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['revisions.info']['$post']> },
      ) => parseResponse(client['revisions.info'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRevisionsListKey() {
  return ['revisions.list', '/revisions.list', 'POST'] as const
}

export function usePostRevisionsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['revisions.list']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['revisions.list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRevisionsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['revisions.list']['$post']> },
      ) => parseResponse(client['revisions.list'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRevisionsUpdateKey() {
  return ['revisions.update', '/revisions.update', 'POST'] as const
}

export function usePostRevisionsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['revisions.update']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['revisions.update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRevisionsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['revisions.update']['$post']> },
      ) => parseResponse(client['revisions.update'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRevisionsDeleteKey() {
  return ['revisions.delete', '/revisions.delete', 'POST'] as const
}

export function usePostRevisionsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['revisions.delete']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['revisions.delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRevisionsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['revisions.delete']['$post']> },
      ) => parseResponse(client['revisions.delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRevisionsExportKey() {
  return ['revisions.export', '/revisions.export', 'POST'] as const
}

export function usePostRevisionsExport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['revisions.export']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['revisions.export']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRevisionsExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['revisions.export']['$post']> },
      ) => parseResponse(client['revisions.export'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSharesInfoKey() {
  return ['shares.info', '/shares.info', 'POST'] as const
}

export function usePostSharesInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['shares.info']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['shares.info']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSharesInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['shares.info']['$post']> }) =>
        parseResponse(client['shares.info'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSharesListKey() {
  return ['shares.list', '/shares.list', 'POST'] as const
}

export function usePostSharesList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['shares.list']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['shares.list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSharesListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['shares.list']['$post']> }) =>
        parseResponse(client['shares.list'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSharesCreateKey() {
  return ['shares.create', '/shares.create', 'POST'] as const
}

export function usePostSharesCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['shares.create']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['shares.create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSharesCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['shares.create']['$post']> },
      ) => parseResponse(client['shares.create'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSharesUpdateKey() {
  return ['shares.update', '/shares.update', 'POST'] as const
}

export function usePostSharesUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['shares.update']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['shares.update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSharesUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['shares.update']['$post']> },
      ) => parseResponse(client['shares.update'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSharesRevokeKey() {
  return ['shares.revoke', '/shares.revoke', 'POST'] as const
}

export function usePostSharesRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['shares.revoke']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['shares.revoke']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSharesRevokeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['shares.revoke']['$post']> },
      ) => parseResponse(client['shares.revoke'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStarsCreateKey() {
  return ['stars.create', '/stars.create', 'POST'] as const
}

export function usePostStarsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['stars.create']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['stars.create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStarsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['stars.create']['$post']> },
      ) => parseResponse(client['stars.create'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStarsListKey() {
  return ['stars.list', '/stars.list', 'POST'] as const
}

export function usePostStarsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['stars.list']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['stars.list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStarsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['stars.list']['$post']> }) =>
        parseResponse(client['stars.list'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStarsUpdateKey() {
  return ['stars.update', '/stars.update', 'POST'] as const
}

export function usePostStarsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['stars.update']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['stars.update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStarsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['stars.update']['$post']> },
      ) => parseResponse(client['stars.update'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStarsDeleteKey() {
  return ['stars.delete', '/stars.delete', 'POST'] as const
}

export function usePostStarsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['stars.delete']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['stars.delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStarsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['stars.delete']['$post']> },
      ) => parseResponse(client['stars.delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsListKey() {
  return ['subscriptions.list', '/subscriptions.list', 'POST'] as const
}

export function usePostSubscriptionsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['subscriptions.list']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['subscriptions.list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['subscriptions.list']['$post']> },
      ) => parseResponse(client['subscriptions.list'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsInfoKey() {
  return ['subscriptions.info', '/subscriptions.info', 'POST'] as const
}

export function usePostSubscriptionsInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['subscriptions.info']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['subscriptions.info']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['subscriptions.info']['$post']> },
      ) => parseResponse(client['subscriptions.info'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsCreateKey() {
  return ['subscriptions.create', '/subscriptions.create', 'POST'] as const
}

export function usePostSubscriptionsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['subscriptions.create']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['subscriptions.create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['subscriptions.create']['$post']> },
      ) => parseResponse(client['subscriptions.create'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsDeleteKey() {
  return ['subscriptions.delete', '/subscriptions.delete', 'POST'] as const
}

export function usePostSubscriptionsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['subscriptions.delete']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['subscriptions.delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['subscriptions.delete']['$post']> },
      ) => parseResponse(client['subscriptions.delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemplatesCreateKey() {
  return ['templates.create', '/templates.create', 'POST'] as const
}

export function usePostTemplatesCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['templates.create']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['templates.create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['templates.create']['$post']> },
      ) => parseResponse(client['templates.create'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemplatesListKey() {
  return ['templates.list', '/templates.list', 'POST'] as const
}

export function usePostTemplatesList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['templates.list']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['templates.list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['templates.list']['$post']> },
      ) => parseResponse(client['templates.list'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemplatesInfoKey() {
  return ['templates.info', '/templates.info', 'POST'] as const
}

export function usePostTemplatesInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['templates.info']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['templates.info']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['templates.info']['$post']> },
      ) => parseResponse(client['templates.info'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemplatesUpdateKey() {
  return ['templates.update', '/templates.update', 'POST'] as const
}

export function usePostTemplatesUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['templates.update']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['templates.update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['templates.update']['$post']> },
      ) => parseResponse(client['templates.update'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemplatesDeleteKey() {
  return ['templates.delete', '/templates.delete', 'POST'] as const
}

export function usePostTemplatesDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['templates.delete']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['templates.delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['templates.delete']['$post']> },
      ) => parseResponse(client['templates.delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemplatesRestoreKey() {
  return ['templates.restore', '/templates.restore', 'POST'] as const
}

export function usePostTemplatesRestore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['templates.restore']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['templates.restore']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesRestoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['templates.restore']['$post']> },
      ) => parseResponse(client['templates.restore'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemplatesDuplicateKey() {
  return ['templates.duplicate', '/templates.duplicate', 'POST'] as const
}

export function usePostTemplatesDuplicate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['templates.duplicate']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['templates.duplicate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesDuplicateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['templates.duplicate']['$post']> },
      ) => parseResponse(client['templates.duplicate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserMembershipsListKey() {
  return ['userMemberships.list', '/userMemberships.list', 'POST'] as const
}

export function usePostUserMembershipsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['userMemberships.list']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['userMemberships.list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserMembershipsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['userMemberships.list']['$post']> },
      ) => parseResponse(client['userMemberships.list'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserMembershipsUpdateKey() {
  return ['userMemberships.update', '/userMemberships.update', 'POST'] as const
}

export function usePostUserMembershipsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['userMemberships.update']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['userMemberships.update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserMembershipsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['userMemberships.update']['$post']> },
      ) => parseResponse(client['userMemberships.update'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersInviteKey() {
  return ['users.invite', '/users.invite', 'POST'] as const
}

export function usePostUsersInvite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['users.invite']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['users.invite']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersInviteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['users.invite']['$post']> },
      ) => parseResponse(client['users.invite'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersInfoKey() {
  return ['users.info', '/users.info', 'POST'] as const
}

export function usePostUsersInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['users.info']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['users.info']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['users.info']['$post']> }) =>
        parseResponse(client['users.info'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersListKey() {
  return ['users.list', '/users.list', 'POST'] as const
}

export function usePostUsersList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['users.list']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['users.list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['users.list']['$post']> }) =>
        parseResponse(client['users.list'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersUpdateKey() {
  return ['users.update', '/users.update', 'POST'] as const
}

export function usePostUsersUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['users.update']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['users.update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['users.update']['$post']> },
      ) => parseResponse(client['users.update'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersUpdateRoleKey() {
  return ['users.update_role', '/users.update_role', 'POST'] as const
}

export function usePostUsersUpdateRole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['users.update_role']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['users.update_role']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersUpdateRoleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['users.update_role']['$post']> },
      ) => parseResponse(client['users.update_role'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersSuspendKey() {
  return ['users.suspend', '/users.suspend', 'POST'] as const
}

export function usePostUsersSuspend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['users.suspend']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['users.suspend']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersSuspendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['users.suspend']['$post']> },
      ) => parseResponse(client['users.suspend'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersActivateKey() {
  return ['users.activate', '/users.activate', 'POST'] as const
}

export function usePostUsersActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['users.activate']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['users.activate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersActivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['users.activate']['$post']> },
      ) => parseResponse(client['users.activate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersDeleteKey() {
  return ['users.delete', '/users.delete', 'POST'] as const
}

export function usePostUsersDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['users.delete']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['users.delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['users.delete']['$post']> },
      ) => parseResponse(client['users.delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersResendInviteKey() {
  return ['users.resendInvite', '/users.resendInvite', 'POST'] as const
}

export function usePostUsersResendInvite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['users.resendInvite']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['users.resendInvite']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersResendInviteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['users.resendInvite']['$post']> },
      ) => parseResponse(client['users.resendInvite'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersNotificationsSubscribeKey() {
  return ['users.notificationsSubscribe', '/users.notificationsSubscribe', 'POST'] as const
}

export function usePostUsersNotificationsSubscribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['users.notificationsSubscribe']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['users.notificationsSubscribe']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersNotificationsSubscribeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['users.notificationsSubscribe']['$post']> },
      ) => parseResponse(client['users.notificationsSubscribe'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersNotificationsUnsubscribeKey() {
  return ['users.notificationsUnsubscribe', '/users.notificationsUnsubscribe', 'POST'] as const
}

export function usePostUsersNotificationsUnsubscribe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['users.notificationsUnsubscribe']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['users.notificationsUnsubscribe']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersNotificationsUnsubscribeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['users.notificationsUnsubscribe']['$post']> },
      ) => parseResponse(client['users.notificationsUnsubscribe'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostViewsListKey() {
  return ['views.list', '/views.list', 'POST'] as const
}

export function usePostViewsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['views.list']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['views.list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostViewsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['views.list']['$post']> }) =>
        parseResponse(client['views.list'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebhookSubscriptionsListKey() {
  return ['webhookSubscriptions.list', '/webhookSubscriptions.list', 'POST'] as const
}

export function usePostWebhookSubscriptionsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['webhookSubscriptions.list']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['webhookSubscriptions.list']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhookSubscriptionsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['webhookSubscriptions.list']['$post']> },
      ) => parseResponse(client['webhookSubscriptions.list'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebhookSubscriptionsCreateKey() {
  return ['webhookSubscriptions.create', '/webhookSubscriptions.create', 'POST'] as const
}

export function usePostWebhookSubscriptionsCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['webhookSubscriptions.create']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['webhookSubscriptions.create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhookSubscriptionsCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['webhookSubscriptions.create']['$post']> },
      ) => parseResponse(client['webhookSubscriptions.create'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebhookSubscriptionsUpdateKey() {
  return ['webhookSubscriptions.update', '/webhookSubscriptions.update', 'POST'] as const
}

export function usePostWebhookSubscriptionsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['webhookSubscriptions.update']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['webhookSubscriptions.update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhookSubscriptionsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['webhookSubscriptions.update']['$post']> },
      ) => parseResponse(client['webhookSubscriptions.update'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebhookSubscriptionsDeleteKey() {
  return ['webhookSubscriptions.delete', '/webhookSubscriptions.delete', 'POST'] as const
}

export function usePostWebhookSubscriptionsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['webhookSubscriptions.delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['webhookSubscriptions.delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhookSubscriptionsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['webhookSubscriptions.delete']['$post']> },
      ) => parseResponse(client['webhookSubscriptions.delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
