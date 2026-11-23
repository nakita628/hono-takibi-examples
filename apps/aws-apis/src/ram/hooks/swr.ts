import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAcceptresourceshareinvitationKey() {
  return ['acceptresourceshareinvitation'] as const
}

export function getAssociateresourceshareKey() {
  return ['associateresourceshare'] as const
}

export function getAssociateresourcesharepermissionKey() {
  return ['associateresourcesharepermission'] as const
}

export function getCreatepermissionKey() {
  return ['createpermission'] as const
}

export function getCreatepermissionversionKey() {
  return ['createpermissionversion'] as const
}

export function getCreateresourceshareKey() {
  return ['createresourceshare'] as const
}

export function getDeletepermissionPermissionArnKey() {
  return ['deletepermission#permissionArn'] as const
}

export function getDeletepermissionversionPermissionArnPermissionVersionKey() {
  return ['deletepermissionversion#permissionArn&permissionVersion'] as const
}

export function getDeleteresourceshareResourceShareArnKey() {
  return ['deleteresourceshare#resourceShareArn'] as const
}

export function getDisassociateresourceshareKey() {
  return ['disassociateresourceshare'] as const
}

export function getDisassociateresourcesharepermissionKey() {
  return ['disassociateresourcesharepermission'] as const
}

export function getEnablesharingwithawsorganizationKey() {
  return ['enablesharingwithawsorganization'] as const
}

export function getGetpermissionKey() {
  return ['getpermission'] as const
}

export function getGetresourcepoliciesKey() {
  return ['getresourcepolicies'] as const
}

export function getGetresourceshareassociationsKey() {
  return ['getresourceshareassociations'] as const
}

export function getGetresourceshareinvitationsKey() {
  return ['getresourceshareinvitations'] as const
}

export function getGetresourcesharesKey() {
  return ['getresourceshares'] as const
}

export function getListpendinginvitationresourcesKey() {
  return ['listpendinginvitationresources'] as const
}

export function getListpermissionassociationsKey() {
  return ['listpermissionassociations'] as const
}

export function getListpermissionsKey() {
  return ['listpermissions'] as const
}

export function getListpermissionversionsKey() {
  return ['listpermissionversions'] as const
}

export function getListprincipalsKey() {
  return ['listprincipals'] as const
}

export function getListreplacepermissionassociationsworkKey() {
  return ['listreplacepermissionassociationswork'] as const
}

export function getListresourcesKey() {
  return ['listresources'] as const
}

export function getListresourcesharepermissionsKey() {
  return ['listresourcesharepermissions'] as const
}

export function getListresourcetypesKey() {
  return ['listresourcetypes'] as const
}

export function getPromotepermissioncreatedfrompolicyKey() {
  return ['promotepermissioncreatedfrompolicy'] as const
}

export function getPromoteresourcesharecreatedfrompolicyResourceShareArnKey() {
  return ['promoteresourcesharecreatedfrompolicy#resourceShareArn'] as const
}

export function getRejectresourceshareinvitationKey() {
  return ['rejectresourceshareinvitation'] as const
}

export function getReplacepermissionassociationsKey() {
  return ['replacepermissionassociations'] as const
}

export function getSetdefaultpermissionversionKey() {
  return ['setdefaultpermissionversion'] as const
}

export function getTagresourceKey() {
  return ['tagresource'] as const
}

export function getUntagresourceKey() {
  return ['untagresource'] as const
}

export function getUpdateresourceshareKey() {
  return ['updateresourceshare'] as const
}

export function getPostAcceptresourceshareinvitationKey() {
  return ['acceptresourceshareinvitation', '/acceptresourceshareinvitation', 'POST'] as const
}

export function usePostAcceptresourceshareinvitation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.acceptresourceshareinvitation.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.acceptresourceshareinvitation.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAcceptresourceshareinvitationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.acceptresourceshareinvitation.$post> },
      ) => parseResponse(client.acceptresourceshareinvitation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssociateresourceshareKey() {
  return ['associateresourceshare', '/associateresourceshare', 'POST'] as const
}

export function usePostAssociateresourceshare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.associateresourceshare.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.associateresourceshare.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssociateresourceshareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.associateresourceshare.$post> },
      ) => parseResponse(client.associateresourceshare.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssociateresourcesharepermissionKey() {
  return ['associateresourcesharepermission', '/associateresourcesharepermission', 'POST'] as const
}

export function usePostAssociateresourcesharepermission<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.associateresourcesharepermission.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.associateresourcesharepermission.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssociateresourcesharepermissionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.associateresourcesharepermission.$post> },
      ) => parseResponse(client.associateresourcesharepermission.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreatepermissionKey() {
  return ['createpermission', '/createpermission', 'POST'] as const
}

export function usePostCreatepermission<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createpermission.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.createpermission.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreatepermissionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.createpermission.$post> }) =>
        parseResponse(client.createpermission.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreatepermissionversionKey() {
  return ['createpermissionversion', '/createpermissionversion', 'POST'] as const
}

export function usePostCreatepermissionversion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.createpermissionversion.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.createpermissionversion.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreatepermissionversionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.createpermissionversion.$post> },
      ) => parseResponse(client.createpermissionversion.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateresourceshareKey() {
  return ['createresourceshare', '/createresourceshare', 'POST'] as const
}

export function usePostCreateresourceshare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createresourceshare.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.createresourceshare.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateresourceshareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.createresourceshare.$post> }) =>
        parseResponse(client.createresourceshare.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDeletepermissionPermissionArnKey() {
  return ['deletepermission#permissionArn', '/deletepermission#permissionArn', 'DELETE'] as const
}

export function useDeleteDeletepermissionPermissionArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['deletepermission#permissionArn']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['deletepermission#permissionArn']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDeletepermissionPermissionArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['deletepermission#permissionArn']['$delete']> },
      ) => parseResponse(client['deletepermission#permissionArn'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDeletepermissionversionPermissionArnPermissionVersionKey() {
  return [
    'deletepermissionversion#permissionArn&permissionVersion',
    '/deletepermissionversion#permissionArn&permissionVersion',
    'DELETE',
  ] as const
}

export function useDeleteDeletepermissionversionPermissionArnPermissionVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['deletepermissionversion#permissionArn&permissionVersion']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['deletepermissionversion#permissionArn&permissionVersion']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDeletepermissionversionPermissionArnPermissionVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['deletepermissionversion#permissionArn&permissionVersion']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['deletepermissionversion#permissionArn&permissionVersion'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDeleteresourceshareResourceShareArnKey() {
  return [
    'deleteresourceshare#resourceShareArn',
    '/deleteresourceshare#resourceShareArn',
    'DELETE',
  ] as const
}

export function useDeleteDeleteresourceshareResourceShareArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['deleteresourceshare#resourceShareArn']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['deleteresourceshare#resourceShareArn']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDeleteresourceshareResourceShareArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['deleteresourceshare#resourceShareArn']['$delete']>
        },
      ) =>
        parseResponse(client['deleteresourceshare#resourceShareArn'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDisassociateresourceshareKey() {
  return ['disassociateresourceshare', '/disassociateresourceshare', 'POST'] as const
}

export function usePostDisassociateresourceshare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.disassociateresourceshare.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.disassociateresourceshare.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDisassociateresourceshareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.disassociateresourceshare.$post> },
      ) => parseResponse(client.disassociateresourceshare.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDisassociateresourcesharepermissionKey() {
  return [
    'disassociateresourcesharepermission',
    '/disassociateresourcesharepermission',
    'POST',
  ] as const
}

export function usePostDisassociateresourcesharepermission<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.disassociateresourcesharepermission.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.disassociateresourcesharepermission.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDisassociateresourcesharepermissionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.disassociateresourcesharepermission.$post> },
      ) => parseResponse(client.disassociateresourcesharepermission.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEnablesharingwithawsorganizationKey() {
  return ['enablesharingwithawsorganization', '/enablesharingwithawsorganization', 'POST'] as const
}

export function usePostEnablesharingwithawsorganization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.enablesharingwithawsorganization.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.enablesharingwithawsorganization.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEnablesharingwithawsorganizationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.enablesharingwithawsorganization.$post> },
      ) => parseResponse(client.enablesharingwithawsorganization.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetpermissionKey() {
  return ['getpermission', '/getpermission', 'POST'] as const
}

export function usePostGetpermission<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getpermission.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.getpermission.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetpermissionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getpermission.$post> }) =>
        parseResponse(client.getpermission.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetresourcepoliciesKey() {
  return ['getresourcepolicies', '/getresourcepolicies', 'POST'] as const
}

export function usePostGetresourcepolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getresourcepolicies.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.getresourcepolicies.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetresourcepoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getresourcepolicies.$post> }) =>
        parseResponse(client.getresourcepolicies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetresourceshareassociationsKey() {
  return ['getresourceshareassociations', '/getresourceshareassociations', 'POST'] as const
}

export function usePostGetresourceshareassociations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getresourceshareassociations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.getresourceshareassociations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetresourceshareassociationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.getresourceshareassociations.$post> },
      ) => parseResponse(client.getresourceshareassociations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetresourceshareinvitationsKey() {
  return ['getresourceshareinvitations', '/getresourceshareinvitations', 'POST'] as const
}

export function usePostGetresourceshareinvitations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getresourceshareinvitations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.getresourceshareinvitations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetresourceshareinvitationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.getresourceshareinvitations.$post> },
      ) => parseResponse(client.getresourceshareinvitations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetresourcesharesKey() {
  return ['getresourceshares', '/getresourceshares', 'POST'] as const
}

export function usePostGetresourceshares<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getresourceshares.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.getresourceshares.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetresourcesharesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getresourceshares.$post> }) =>
        parseResponse(client.getresourceshares.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListpendinginvitationresourcesKey() {
  return ['listpendinginvitationresources', '/listpendinginvitationresources', 'POST'] as const
}

export function usePostListpendinginvitationresources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.listpendinginvitationresources.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.listpendinginvitationresources.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListpendinginvitationresourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.listpendinginvitationresources.$post> },
      ) => parseResponse(client.listpendinginvitationresources.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListpermissionassociationsKey() {
  return ['listpermissionassociations', '/listpermissionassociations', 'POST'] as const
}

export function usePostListpermissionassociations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.listpermissionassociations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.listpermissionassociations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListpermissionassociationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.listpermissionassociations.$post> },
      ) => parseResponse(client.listpermissionassociations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListpermissionversionsKey() {
  return ['listpermissionversions', '/listpermissionversions', 'POST'] as const
}

export function usePostListpermissionversions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.listpermissionversions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.listpermissionversions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListpermissionversionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.listpermissionversions.$post> },
      ) => parseResponse(client.listpermissionversions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListpermissionsKey() {
  return ['listpermissions', '/listpermissions', 'POST'] as const
}

export function usePostListpermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listpermissions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.listpermissions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListpermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.listpermissions.$post> }) =>
        parseResponse(client.listpermissions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListprincipalsKey() {
  return ['listprincipals', '/listprincipals', 'POST'] as const
}

export function usePostListprincipals<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listprincipals.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.listprincipals.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListprincipalsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.listprincipals.$post> }) =>
        parseResponse(client.listprincipals.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListreplacepermissionassociationsworkKey() {
  return [
    'listreplacepermissionassociationswork',
    '/listreplacepermissionassociationswork',
    'POST',
  ] as const
}

export function usePostListreplacepermissionassociationswork<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.listreplacepermissionassociationswork.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.listreplacepermissionassociationswork.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListreplacepermissionassociationsworkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.listreplacepermissionassociationswork.$post> },
      ) => parseResponse(client.listreplacepermissionassociationswork.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListresourcesharepermissionsKey() {
  return ['listresourcesharepermissions', '/listresourcesharepermissions', 'POST'] as const
}

export function usePostListresourcesharepermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.listresourcesharepermissions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.listresourcesharepermissions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListresourcesharepermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.listresourcesharepermissions.$post> },
      ) => parseResponse(client.listresourcesharepermissions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListresourcetypesKey() {
  return ['listresourcetypes', '/listresourcetypes', 'POST'] as const
}

export function usePostListresourcetypes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listresourcetypes.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.listresourcetypes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListresourcetypesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.listresourcetypes.$post> }) =>
        parseResponse(client.listresourcetypes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListresourcesKey() {
  return ['listresources', '/listresources', 'POST'] as const
}

export function usePostListresources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listresources.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.listresources.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListresourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.listresources.$post> }) =>
        parseResponse(client.listresources.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPromotepermissioncreatedfrompolicyKey() {
  return [
    'promotepermissioncreatedfrompolicy',
    '/promotepermissioncreatedfrompolicy',
    'POST',
  ] as const
}

export function usePostPromotepermissioncreatedfrompolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.promotepermissioncreatedfrompolicy.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.promotepermissioncreatedfrompolicy.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPromotepermissioncreatedfrompolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.promotepermissioncreatedfrompolicy.$post> },
      ) => parseResponse(client.promotepermissioncreatedfrompolicy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPromoteresourcesharecreatedfrompolicyResourceShareArnKey() {
  return [
    'promoteresourcesharecreatedfrompolicy#resourceShareArn',
    '/promoteresourcesharecreatedfrompolicy#resourceShareArn',
    'POST',
  ] as const
}

export function usePostPromoteresourcesharecreatedfrompolicyResourceShareArn<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['promoteresourcesharecreatedfrompolicy#resourceShareArn']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['promoteresourcesharecreatedfrompolicy#resourceShareArn']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPromoteresourcesharecreatedfrompolicyResourceShareArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['promoteresourcesharecreatedfrompolicy#resourceShareArn']['$post']
          >
        },
      ) =>
        parseResponse(
          client['promoteresourcesharecreatedfrompolicy#resourceShareArn'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRejectresourceshareinvitationKey() {
  return ['rejectresourceshareinvitation', '/rejectresourceshareinvitation', 'POST'] as const
}

export function usePostRejectresourceshareinvitation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.rejectresourceshareinvitation.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.rejectresourceshareinvitation.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRejectresourceshareinvitationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.rejectresourceshareinvitation.$post> },
      ) => parseResponse(client.rejectresourceshareinvitation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostReplacepermissionassociationsKey() {
  return ['replacepermissionassociations', '/replacepermissionassociations', 'POST'] as const
}

export function usePostReplacepermissionassociations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.replacepermissionassociations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.replacepermissionassociations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReplacepermissionassociationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.replacepermissionassociations.$post> },
      ) => parseResponse(client.replacepermissionassociations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSetdefaultpermissionversionKey() {
  return ['setdefaultpermissionversion', '/setdefaultpermissionversion', 'POST'] as const
}

export function usePostSetdefaultpermissionversion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setdefaultpermissionversion.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.setdefaultpermissionversion.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSetdefaultpermissionversionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.setdefaultpermissionversion.$post> },
      ) => parseResponse(client.setdefaultpermissionversion.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTagresourceKey() {
  return ['tagresource', '/tagresource', 'POST'] as const
}

export function usePostTagresource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tagresource.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tagresource.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagresourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tagresource.$post> }) =>
        parseResponse(client.tagresource.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUntagresourceKey() {
  return ['untagresource', '/untagresource', 'POST'] as const
}

export function usePostUntagresource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.untagresource.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.untagresource.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUntagresourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.untagresource.$post> }) =>
        parseResponse(client.untagresource.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateresourceshareKey() {
  return ['updateresourceshare', '/updateresourceshare', 'POST'] as const
}

export function usePostUpdateresourceshare<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.updateresourceshare.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.updateresourceshare.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateresourceshareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.updateresourceshare.$post> }) =>
        parseResponse(client.updateresourceshare.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
