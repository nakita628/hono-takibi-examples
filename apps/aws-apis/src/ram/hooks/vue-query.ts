import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
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

export function getPostAcceptresourceshareinvitationMutationKey() {
  return ['acceptresourceshareinvitation', '/acceptresourceshareinvitation', 'POST'] as const
}

export function getPostAcceptresourceshareinvitationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.acceptresourceshareinvitation.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.acceptresourceshareinvitation.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAcceptresourceshareinvitationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.acceptresourceshareinvitation.$post>) {
      return parseResponse(client.acceptresourceshareinvitation.$post(args, options))
    },
  })
}

export function usePostAcceptresourceshareinvitation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.acceptresourceshareinvitation.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.acceptresourceshareinvitation.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAcceptresourceshareinvitationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAssociateresourceshareMutationKey() {
  return ['associateresourceshare', '/associateresourceshare', 'POST'] as const
}

export function getPostAssociateresourceshareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.associateresourceshare.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.associateresourceshare.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssociateresourceshareMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.associateresourceshare.$post>) {
      return parseResponse(client.associateresourceshare.$post(args, options))
    },
  })
}

export function usePostAssociateresourceshare<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.associateresourceshare.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.associateresourceshare.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAssociateresourceshareMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAssociateresourcesharepermissionMutationKey() {
  return ['associateresourcesharepermission', '/associateresourcesharepermission', 'POST'] as const
}

export function getPostAssociateresourcesharepermissionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.associateresourcesharepermission.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.associateresourcesharepermission.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssociateresourcesharepermissionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.associateresourcesharepermission.$post>) {
      return parseResponse(client.associateresourcesharepermission.$post(args, options))
    },
  })
}

export function usePostAssociateresourcesharepermission<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.associateresourcesharepermission.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.associateresourcesharepermission.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAssociateresourcesharepermissionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCreatepermissionMutationKey() {
  return ['createpermission', '/createpermission', 'POST'] as const
}

export function getPostCreatepermissionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createpermission.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.createpermission.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreatepermissionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createpermission.$post>) {
      return parseResponse(client.createpermission.$post(args, options))
    },
  })
}

export function usePostCreatepermission<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.createpermission.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.createpermission.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreatepermissionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCreatepermissionversionMutationKey() {
  return ['createpermissionversion', '/createpermissionversion', 'POST'] as const
}

export function getPostCreatepermissionversionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.createpermissionversion.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.createpermissionversion.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreatepermissionversionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createpermissionversion.$post>) {
      return parseResponse(client.createpermissionversion.$post(args, options))
    },
  })
}

export function usePostCreatepermissionversion<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.createpermissionversion.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.createpermissionversion.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreatepermissionversionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCreateresourceshareMutationKey() {
  return ['createresourceshare', '/createresourceshare', 'POST'] as const
}

export function getPostCreateresourceshareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createresourceshare.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.createresourceshare.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateresourceshareMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createresourceshare.$post>) {
      return parseResponse(client.createresourceshare.$post(args, options))
    },
  })
}

export function usePostCreateresourceshare<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.createresourceshare.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.createresourceshare.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreateresourceshareMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDeletepermissionPermissionArnMutationKey() {
  return ['deletepermission#permissionArn', '/deletepermission#permissionArn', 'DELETE'] as const
}

export function getDeleteDeletepermissionPermissionArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['deletepermission#permissionArn']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['deletepermission#permissionArn']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDeletepermissionPermissionArnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['deletepermission#permissionArn']['$delete']>,
    ) {
      return parseResponse(client['deletepermission#permissionArn'].$delete(args, options))
    },
  })
}

export function useDeleteDeletepermissionPermissionArn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['deletepermission#permissionArn']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['deletepermission#permissionArn']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDeletepermissionPermissionArnMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDeletepermissionversionPermissionArnPermissionVersionMutationKey() {
  return [
    'deletepermissionversion#permissionArn&permissionVersion',
    '/deletepermissionversion#permissionArn&permissionVersion',
    'DELETE',
  ] as const
}

export function getDeleteDeletepermissionversionPermissionArnPermissionVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['deletepermissionversion#permissionArn&permissionVersion']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDeletepermissionversionPermissionArnPermissionVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['deletepermissionversion#permissionArn&permissionVersion']['$delete']
      >,
    ) {
      return parseResponse(
        client['deletepermissionversion#permissionArn&permissionVersion'].$delete(args, options),
      )
    },
  })
}

export function useDeleteDeletepermissionversionPermissionArnPermissionVersion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['deletepermissionversion#permissionArn&permissionVersion']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteDeletepermissionversionPermissionArnPermissionVersionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteDeleteresourceshareResourceShareArnMutationKey() {
  return [
    'deleteresourceshare#resourceShareArn',
    '/deleteresourceshare#resourceShareArn',
    'DELETE',
  ] as const
}

export function getDeleteDeleteresourceshareResourceShareArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['deleteresourceshare#resourceShareArn']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['deleteresourceshare#resourceShareArn']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDeleteresourceshareResourceShareArnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['deleteresourceshare#resourceShareArn']['$delete']>,
    ) {
      return parseResponse(client['deleteresourceshare#resourceShareArn'].$delete(args, options))
    },
  })
}

export function useDeleteDeleteresourceshareResourceShareArn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['deleteresourceshare#resourceShareArn']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['deleteresourceshare#resourceShareArn']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDeleteresourceshareResourceShareArnMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDisassociateresourceshareMutationKey() {
  return ['disassociateresourceshare', '/disassociateresourceshare', 'POST'] as const
}

export function getPostDisassociateresourceshareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.disassociateresourceshare.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.disassociateresourceshare.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDisassociateresourceshareMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.disassociateresourceshare.$post>) {
      return parseResponse(client.disassociateresourceshare.$post(args, options))
    },
  })
}

export function usePostDisassociateresourceshare<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.disassociateresourceshare.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.disassociateresourceshare.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDisassociateresourceshareMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDisassociateresourcesharepermissionMutationKey() {
  return [
    'disassociateresourcesharepermission',
    '/disassociateresourcesharepermission',
    'POST',
  ] as const
}

export function getPostDisassociateresourcesharepermissionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.disassociateresourcesharepermission.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.disassociateresourcesharepermission.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDisassociateresourcesharepermissionMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.disassociateresourcesharepermission.$post>,
    ) {
      return parseResponse(client.disassociateresourcesharepermission.$post(args, options))
    },
  })
}

export function usePostDisassociateresourcesharepermission<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.disassociateresourcesharepermission.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.disassociateresourcesharepermission.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDisassociateresourcesharepermissionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostEnablesharingwithawsorganizationMutationKey() {
  return ['enablesharingwithawsorganization', '/enablesharingwithawsorganization', 'POST'] as const
}

export function getPostEnablesharingwithawsorganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.enablesharingwithawsorganization.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.enablesharingwithawsorganization.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEnablesharingwithawsorganizationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.enablesharingwithawsorganization.$post>) {
      return parseResponse(client.enablesharingwithawsorganization.$post(args, options))
    },
  })
}

export function usePostEnablesharingwithawsorganization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.enablesharingwithawsorganization.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.enablesharingwithawsorganization.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEnablesharingwithawsorganizationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetpermissionMutationKey() {
  return ['getpermission', '/getpermission', 'POST'] as const
}

export function getPostGetpermissionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getpermission.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.getpermission.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetpermissionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getpermission.$post>) {
      return parseResponse(client.getpermission.$post(args, options))
    },
  })
}

export function usePostGetpermission<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getpermission.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.getpermission.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetpermissionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetresourcepoliciesMutationKey() {
  return ['getresourcepolicies', '/getresourcepolicies', 'POST'] as const
}

export function getPostGetresourcepoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getresourcepolicies.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.getresourcepolicies.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetresourcepoliciesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getresourcepolicies.$post>) {
      return parseResponse(client.getresourcepolicies.$post(args, options))
    },
  })
}

export function usePostGetresourcepolicies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getresourcepolicies.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.getresourcepolicies.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetresourcepoliciesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetresourceshareassociationsMutationKey() {
  return ['getresourceshareassociations', '/getresourceshareassociations', 'POST'] as const
}

export function getPostGetresourceshareassociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getresourceshareassociations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.getresourceshareassociations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetresourceshareassociationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getresourceshareassociations.$post>) {
      return parseResponse(client.getresourceshareassociations.$post(args, options))
    },
  })
}

export function usePostGetresourceshareassociations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.getresourceshareassociations.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.getresourceshareassociations.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetresourceshareassociationsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetresourceshareinvitationsMutationKey() {
  return ['getresourceshareinvitations', '/getresourceshareinvitations', 'POST'] as const
}

export function getPostGetresourceshareinvitationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getresourceshareinvitations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.getresourceshareinvitations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetresourceshareinvitationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getresourceshareinvitations.$post>) {
      return parseResponse(client.getresourceshareinvitations.$post(args, options))
    },
  })
}

export function usePostGetresourceshareinvitations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.getresourceshareinvitations.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.getresourceshareinvitations.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetresourceshareinvitationsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetresourcesharesMutationKey() {
  return ['getresourceshares', '/getresourceshares', 'POST'] as const
}

export function getPostGetresourcesharesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getresourceshares.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.getresourceshares.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetresourcesharesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getresourceshares.$post>) {
      return parseResponse(client.getresourceshares.$post(args, options))
    },
  })
}

export function usePostGetresourceshares<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getresourceshares.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.getresourceshares.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetresourcesharesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListpendinginvitationresourcesMutationKey() {
  return ['listpendinginvitationresources', '/listpendinginvitationresources', 'POST'] as const
}

export function getPostListpendinginvitationresourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.listpendinginvitationresources.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.listpendinginvitationresources.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListpendinginvitationresourcesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listpendinginvitationresources.$post>) {
      return parseResponse(client.listpendinginvitationresources.$post(args, options))
    },
  })
}

export function usePostListpendinginvitationresources<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.listpendinginvitationresources.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.listpendinginvitationresources.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListpendinginvitationresourcesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListpermissionassociationsMutationKey() {
  return ['listpermissionassociations', '/listpermissionassociations', 'POST'] as const
}

export function getPostListpermissionassociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.listpermissionassociations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.listpermissionassociations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListpermissionassociationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listpermissionassociations.$post>) {
      return parseResponse(client.listpermissionassociations.$post(args, options))
    },
  })
}

export function usePostListpermissionassociations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.listpermissionassociations.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.listpermissionassociations.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListpermissionassociationsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListpermissionversionsMutationKey() {
  return ['listpermissionversions', '/listpermissionversions', 'POST'] as const
}

export function getPostListpermissionversionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.listpermissionversions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.listpermissionversions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListpermissionversionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listpermissionversions.$post>) {
      return parseResponse(client.listpermissionversions.$post(args, options))
    },
  })
}

export function usePostListpermissionversions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listpermissionversions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.listpermissionversions.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListpermissionversionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListpermissionsMutationKey() {
  return ['listpermissions', '/listpermissions', 'POST'] as const
}

export function getPostListpermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listpermissions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.listpermissions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListpermissionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listpermissions.$post>) {
      return parseResponse(client.listpermissions.$post(args, options))
    },
  })
}

export function usePostListpermissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listpermissions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.listpermissions.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListpermissionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListprincipalsMutationKey() {
  return ['listprincipals', '/listprincipals', 'POST'] as const
}

export function getPostListprincipalsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listprincipals.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.listprincipals.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListprincipalsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listprincipals.$post>) {
      return parseResponse(client.listprincipals.$post(args, options))
    },
  })
}

export function usePostListprincipals<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listprincipals.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.listprincipals.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListprincipalsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListreplacepermissionassociationsworkMutationKey() {
  return [
    'listreplacepermissionassociationswork',
    '/listreplacepermissionassociationswork',
    'POST',
  ] as const
}

export function getPostListreplacepermissionassociationsworkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.listreplacepermissionassociationswork.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.listreplacepermissionassociationswork.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListreplacepermissionassociationsworkMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.listreplacepermissionassociationswork.$post>,
    ) {
      return parseResponse(client.listreplacepermissionassociationswork.$post(args, options))
    },
  })
}

export function usePostListreplacepermissionassociationswork<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.listreplacepermissionassociationswork.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.listreplacepermissionassociationswork.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListreplacepermissionassociationsworkMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListresourcesharepermissionsMutationKey() {
  return ['listresourcesharepermissions', '/listresourcesharepermissions', 'POST'] as const
}

export function getPostListresourcesharepermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.listresourcesharepermissions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.listresourcesharepermissions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListresourcesharepermissionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listresourcesharepermissions.$post>) {
      return parseResponse(client.listresourcesharepermissions.$post(args, options))
    },
  })
}

export function usePostListresourcesharepermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.listresourcesharepermissions.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.listresourcesharepermissions.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListresourcesharepermissionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListresourcetypesMutationKey() {
  return ['listresourcetypes', '/listresourcetypes', 'POST'] as const
}

export function getPostListresourcetypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listresourcetypes.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.listresourcetypes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListresourcetypesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listresourcetypes.$post>) {
      return parseResponse(client.listresourcetypes.$post(args, options))
    },
  })
}

export function usePostListresourcetypes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listresourcetypes.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.listresourcetypes.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListresourcetypesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListresourcesMutationKey() {
  return ['listresources', '/listresources', 'POST'] as const
}

export function getPostListresourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listresources.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.listresources.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListresourcesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listresources.$post>) {
      return parseResponse(client.listresources.$post(args, options))
    },
  })
}

export function usePostListresources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listresources.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.listresources.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListresourcesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPromotepermissioncreatedfrompolicyMutationKey() {
  return [
    'promotepermissioncreatedfrompolicy',
    '/promotepermissioncreatedfrompolicy',
    'POST',
  ] as const
}

export function getPostPromotepermissioncreatedfrompolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.promotepermissioncreatedfrompolicy.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.promotepermissioncreatedfrompolicy.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPromotepermissioncreatedfrompolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.promotepermissioncreatedfrompolicy.$post>,
    ) {
      return parseResponse(client.promotepermissioncreatedfrompolicy.$post(args, options))
    },
  })
}

export function usePostPromotepermissioncreatedfrompolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.promotepermissioncreatedfrompolicy.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.promotepermissioncreatedfrompolicy.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPromotepermissioncreatedfrompolicyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPromoteresourcesharecreatedfrompolicyResourceShareArnMutationKey() {
  return [
    'promoteresourcesharecreatedfrompolicy#resourceShareArn',
    '/promoteresourcesharecreatedfrompolicy#resourceShareArn',
    'POST',
  ] as const
}

export function getPostPromoteresourcesharecreatedfrompolicyResourceShareArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['promoteresourcesharecreatedfrompolicy#resourceShareArn']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPromoteresourcesharecreatedfrompolicyResourceShareArnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['promoteresourcesharecreatedfrompolicy#resourceShareArn']['$post']
      >,
    ) {
      return parseResponse(
        client['promoteresourcesharecreatedfrompolicy#resourceShareArn'].$post(args, options),
      )
    },
  })
}

export function usePostPromoteresourcesharecreatedfrompolicyResourceShareArn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['promoteresourcesharecreatedfrompolicy#resourceShareArn']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostPromoteresourcesharecreatedfrompolicyResourceShareArnMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRejectresourceshareinvitationMutationKey() {
  return ['rejectresourceshareinvitation', '/rejectresourceshareinvitation', 'POST'] as const
}

export function getPostRejectresourceshareinvitationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.rejectresourceshareinvitation.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.rejectresourceshareinvitation.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRejectresourceshareinvitationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rejectresourceshareinvitation.$post>) {
      return parseResponse(client.rejectresourceshareinvitation.$post(args, options))
    },
  })
}

export function usePostRejectresourceshareinvitation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.rejectresourceshareinvitation.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.rejectresourceshareinvitation.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRejectresourceshareinvitationMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostReplacepermissionassociationsMutationKey() {
  return ['replacepermissionassociations', '/replacepermissionassociations', 'POST'] as const
}

export function getPostReplacepermissionassociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.replacepermissionassociations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.replacepermissionassociations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReplacepermissionassociationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.replacepermissionassociations.$post>) {
      return parseResponse(client.replacepermissionassociations.$post(args, options))
    },
  })
}

export function usePostReplacepermissionassociations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.replacepermissionassociations.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.replacepermissionassociations.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostReplacepermissionassociationsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSetdefaultpermissionversionMutationKey() {
  return ['setdefaultpermissionversion', '/setdefaultpermissionversion', 'POST'] as const
}

export function getPostSetdefaultpermissionversionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.setdefaultpermissionversion.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.setdefaultpermissionversion.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetdefaultpermissionversionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setdefaultpermissionversion.$post>) {
      return parseResponse(client.setdefaultpermissionversion.$post(args, options))
    },
  })
}

export function usePostSetdefaultpermissionversion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.setdefaultpermissionversion.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.setdefaultpermissionversion.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSetdefaultpermissionversionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTagresourceMutationKey() {
  return ['tagresource', '/tagresource', 'POST'] as const
}

export function getPostTagresourceMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tagresource.$post>>>>>,
    TError,
    InferRequestType<typeof client.tagresource.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTagresourceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tagresource.$post>) {
      return parseResponse(client.tagresource.$post(args, options))
    },
  })
}

export function usePostTagresource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tagresource.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.tagresource.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagresourceMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUntagresourceMutationKey() {
  return ['untagresource', '/untagresource', 'POST'] as const
}

export function getPostUntagresourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.untagresource.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.untagresource.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUntagresourceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.untagresource.$post>) {
      return parseResponse(client.untagresource.$post(args, options))
    },
  })
}

export function usePostUntagresource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.untagresource.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.untagresource.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUntagresourceMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUpdateresourceshareMutationKey() {
  return ['updateresourceshare', '/updateresourceshare', 'POST'] as const
}

export function getPostUpdateresourceshareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.updateresourceshare.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.updateresourceshare.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateresourceshareMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.updateresourceshare.$post>) {
      return parseResponse(client.updateresourceshare.$post(args, options))
    },
  })
}

export function usePostUpdateresourceshare<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.updateresourceshare.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.updateresourceshare.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUpdateresourceshareMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
