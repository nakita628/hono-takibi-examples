import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getEmployerKey() {
  return ['Employer'] as const
}

export function getEmployersKey() {
  return ['Employers'] as const
}

export function getHealthcheckKey() {
  return ['Healthcheck'] as const
}

export function getJobsKey() {
  return ['Jobs'] as const
}

export function getJournalInstructionKey() {
  return ['JournalInstruction'] as const
}

export function getJournalInstructionsKey() {
  return ['JournalInstructions'] as const
}

export function getPermissionKey() {
  return ['Permission'] as const
}

export function getPermissionsKey() {
  return ['Permissions'] as const
}

export function getQueryKey() {
  return ['Query'] as const
}

export function getReferenceDataKey() {
  return ['ReferenceData'] as const
}

export function getReportKey() {
  return ['Report'] as const
}

export function getReportsKey() {
  return ['Reports'] as const
}

export function getSchemasKey() {
  return ['Schemas'] as const
}

export function getSecretKey() {
  return ['Secret'] as const
}

export function getSecretsKey() {
  return ['Secrets'] as const
}

export function getTemplateKey() {
  return ['Template'] as const
}

export function getTemplatesKey() {
  return ['Templates'] as const
}

export function getTransformKey() {
  return ['Transform'] as const
}

export function getTransformsKey() {
  return ['Transforms'] as const
}

export function getUserKey() {
  return ['User'] as const
}

export function getUsersKey() {
  return ['Users'] as const
}

export function getEmployerEmployerIdQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId', keyArgs] as const
}

export function getEmployerEmployerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Employer)[':EmployerId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEmployerEmployerIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutEmployerEmployerIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId', 'PUT'] as const
}

export function getPutEmployerEmployerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.Employer)[':EmployerId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEmployerEmployerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Employer)[':EmployerId']['$put']>) {
      return parseResponse(client.Employer[':EmployerId'].$put(args, options))
    },
  })
}

export function injectPutEmployerEmployerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Employer)[':EmployerId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEmployerEmployerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId', 'DELETE'] as const
}

export function getDeleteEmployerEmployerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Employer)[':EmployerId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Employer)[':EmployerId']['$delete']>) {
      return parseResponse(client.Employer[':EmployerId'].$delete(args, options))
    },
  })
}

export function injectDeleteEmployerEmployerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.Employer)[':EmployerId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEmployerEmployerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchEmployerEmployerIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId', 'PATCH'] as const
}

export function getPatchEmployerEmployerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.Employer)[':EmployerId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchEmployerEmployerIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Employer)[':EmployerId']['$patch']>) {
      return parseResponse(client.Employer[':EmployerId'].$patch(args, options))
    },
  })
}

export function injectPatchEmployerEmployerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Employer)[':EmployerId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchEmployerEmployerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdCisLineTypeCisLineTypeIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/CisLineType/:CisLineTypeId', keyArgs] as const
}

export function getEmployerEmployerIdCisLineTypeCisLineTypeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdCisLineTypeCisLineTypeIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdCisLineTypeCisLineTypeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].CisLineType[':CisLineTypeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdCisLineTypeCisLineTypeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdCisLineTypeCisLineTypeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdCisLineTypeCisLineTypeIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutEmployerEmployerIdCisLineTypeCisLineTypeIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/CisLineType/:CisLineTypeId', 'PUT'] as const
}

export function getPutEmployerEmployerIdCisLineTypeCisLineTypeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutEmployerEmployerIdCisLineTypeCisLineTypeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['$put']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].CisLineType[':CisLineTypeId'].$put(args, options),
      )
    },
  })
}

export function injectPutEmployerEmployerIdCisLineTypeCisLineTypeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEmployerEmployerIdCisLineTypeCisLineTypeIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdCisLineTypeCisLineTypeIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/CisLineType/:CisLineTypeId', 'DELETE'] as const
}

export function getDeleteEmployerEmployerIdCisLineTypeCisLineTypeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdCisLineTypeCisLineTypeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].CisLineType[':CisLineTypeId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdCisLineTypeCisLineTypeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEmployerEmployerIdCisLineTypeCisLineTypeIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/CisLineType/:CisLineTypeId/Tag/:TagId',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tag'][':TagId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].CisLineType[':CisLineTypeId'].Tag[':TagId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tag'][':TagId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tag'][':TagId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/CisLineType/:CisLineTypeId/Tag/:TagId', 'PUT'] as const
}

export function getPutEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tag'][':TagId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tag'][':TagId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tag'][':TagId']['$put']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].CisLineType[':CisLineTypeId'].Tag[':TagId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tag'][':TagId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tag'][':TagId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/CisLineType/:CisLineTypeId/Tag/:TagId',
    'DELETE',
  ] as const
}

export function getDeleteEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tag'][':TagId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tag'][':TagId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tag'][':TagId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].CisLineType[':CisLineTypeId'].Tag[':TagId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tag'][':TagId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tag'][':TagId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdCisLineTypeCisLineTypeIdTagsQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/CisLineType/:CisLineTypeId/Tags', keyArgs] as const
}

export function getEmployerEmployerIdCisLineTypeCisLineTypeIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdCisLineTypeCisLineTypeIdTagsQueryKey>
  >({
    queryKey: getEmployerEmployerIdCisLineTypeCisLineTypeIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].CisLineType[':CisLineTypeId'].Tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdCisLineTypeCisLineTypeIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['CisLineType'][':CisLineTypeId']['Tags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdCisLineTypeCisLineTypeIdTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdCisLineTypeCisLineTypeIdTagsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdCisLineTypesQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/CisLineTypes', keyArgs] as const
}

export function getEmployerEmployerIdCisLineTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdCisLineTypesQueryKey>
  >({
    queryKey: getEmployerEmployerIdCisLineTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].CisLineTypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdCisLineTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdCisLineTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdCisLineTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostEmployerEmployerIdCisLineTypesMutationKey() {
  return ['Employer', '/Employer/:EmployerId/CisLineTypes', 'POST'] as const
}

export function getPostEmployerEmployerIdCisLineTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmployerEmployerIdCisLineTypesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['$post']>,
    ) {
      return parseResponse(client.Employer[':EmployerId'].CisLineTypes.$post(args, options))
    },
  })
}

export function injectPostEmployerEmployerIdCisLineTypes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmployerEmployerIdCisLineTypesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdCisLineTypesTagTagIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisLineTypes']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/CisLineTypes/Tag/:TagId', keyArgs] as const
}

export function getEmployerEmployerIdCisLineTypesTagTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['CisLineTypes']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisLineTypes']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['CisLineTypes']['Tag'][':TagId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdCisLineTypesTagTagIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdCisLineTypesTagTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].CisLineTypes.Tag[':TagId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdCisLineTypesTagTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['CisLineTypes']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisLineTypes']['Tag'][':TagId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['CisLineTypes']['Tag'][':TagId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdCisLineTypesTagTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdCisLineTypesTagTagIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdCisLineTypesTagsQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['Tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/CisLineTypes/Tags', keyArgs] as const
}

export function getEmployerEmployerIdCisLineTypesTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['Tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['Tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['Tags']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdCisLineTypesTagsQueryKey>
  >({
    queryKey: getEmployerEmployerIdCisLineTypesTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].CisLineTypes.Tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdCisLineTypesTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['Tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisLineTypes']['Tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Employer)[':EmployerId']['CisLineTypes']['Tags']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdCisLineTypesTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdCisLineTypesTagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdCisTransactionCisTransactionIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisTransaction'][':CisTransactionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/CisTransaction/:CisTransactionId', keyArgs] as const
}

export function getEmployerEmployerIdCisTransactionCisTransactionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['CisTransaction'][':CisTransactionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisTransaction'][':CisTransactionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['CisTransaction'][':CisTransactionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdCisTransactionCisTransactionIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdCisTransactionCisTransactionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].CisTransaction[':CisTransactionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdCisTransactionCisTransactionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['CisTransaction'][':CisTransactionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['CisTransaction'][':CisTransactionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['CisTransaction'][':CisTransactionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdCisTransactionCisTransactionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdCisTransactionCisTransactionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdCisTransactionCisTransactionIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/CisTransaction/:CisTransactionId', 'DELETE'] as const
}

export function getDeleteEmployerEmployerIdCisTransactionCisTransactionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['CisTransaction'][':CisTransactionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['CisTransaction'][':CisTransactionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdCisTransactionCisTransactionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['CisTransaction'][':CisTransactionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].CisTransaction[':CisTransactionId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdCisTransactionCisTransactionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['CisTransaction'][':CisTransactionId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['CisTransaction'][':CisTransactionId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployerEmployerIdCisTransactionCisTransactionIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdCisTransactionsQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['CisTransactions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/CisTransactions', keyArgs] as const
}

export function getEmployerEmployerIdCisTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['CisTransactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['CisTransactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['CisTransactions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdCisTransactionsQueryKey>
  >({
    queryKey: getEmployerEmployerIdCisTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].CisTransactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdCisTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['CisTransactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Employer)[':EmployerId']['CisTransactions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Employer)[':EmployerId']['CisTransactions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdCisTransactionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdCisTransactionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdDpsMessageDpsMessageIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/DpsMessage/:DpsMessageId', keyArgs] as const
}

export function getEmployerEmployerIdDpsMessageDpsMessageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdDpsMessageDpsMessageIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdDpsMessageDpsMessageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].DpsMessage[':DpsMessageId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdDpsMessageDpsMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdDpsMessageDpsMessageIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdDpsMessageDpsMessageIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutEmployerEmployerIdDpsMessageDpsMessageIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/DpsMessage/:DpsMessageId', 'PUT'] as const
}

export function getPutEmployerEmployerIdDpsMessageDpsMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutEmployerEmployerIdDpsMessageDpsMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$put']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].DpsMessage[':DpsMessageId'].$put(args, options),
      )
    },
  })
}

export function injectPutEmployerEmployerIdDpsMessageDpsMessageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEmployerEmployerIdDpsMessageDpsMessageIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdDpsMessageDpsMessageIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/DpsMessage/:DpsMessageId', 'DELETE'] as const
}

export function getDeleteEmployerEmployerIdDpsMessageDpsMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdDpsMessageDpsMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].DpsMessage[':DpsMessageId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdDpsMessageDpsMessageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEmployerEmployerIdDpsMessageDpsMessageIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchEmployerEmployerIdDpsMessageDpsMessageIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/DpsMessage/:DpsMessageId', 'PATCH'] as const
}

export function getPatchEmployerEmployerIdDpsMessageDpsMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchEmployerEmployerIdDpsMessageDpsMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$patch']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].DpsMessage[':DpsMessageId'].$patch(args, options),
      )
    },
  })
}

export function injectPatchEmployerEmployerIdDpsMessageDpsMessageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['DpsMessage'][':DpsMessageId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchEmployerEmployerIdDpsMessageDpsMessageIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdDpsMessagesQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['DpsMessages']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/DpsMessages', keyArgs] as const
}

export function getEmployerEmployerIdDpsMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['DpsMessages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['DpsMessages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['DpsMessages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdDpsMessagesQueryKey>
  >({
    queryKey: getEmployerEmployerIdDpsMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].DpsMessages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdDpsMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['DpsMessages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Employer)[':EmployerId']['DpsMessages']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['DpsMessages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdDpsMessagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdDpsMessagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostEmployerEmployerIdDpsMessagesMutationKey() {
  return ['Employer', '/Employer/:EmployerId/DpsMessages', 'POST'] as const
}

export function getPostEmployerEmployerIdDpsMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['DpsMessages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employer)[':EmployerId']['DpsMessages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmployerEmployerIdDpsMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Employer)[':EmployerId']['DpsMessages']['$post']>,
    ) {
      return parseResponse(client.Employer[':EmployerId'].DpsMessages.$post(args, options))
    },
  })
}

export function injectPostEmployerEmployerIdDpsMessages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['DpsMessages']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Employer)[':EmployerId']['DpsMessages']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmployerEmployerIdDpsMessagesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeeEmployeeIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId', keyArgs] as const
}

export function getEmployerEmployerIdEmployeeEmployeeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeeEmployeeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeeEmployeeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeeEmployeeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutEmployerEmployerIdEmployeeEmployeeIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId', 'PUT'] as const
}

export function getPutEmployerEmployerIdEmployeeEmployeeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEmployerEmployerIdEmployeeEmployeeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$put']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].$put(args, options),
      )
    },
  })
}

export function injectPutEmployerEmployerIdEmployeeEmployeeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEmployerEmployerIdEmployeeEmployeeIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdEmployeeEmployeeIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId', 'DELETE'] as const
}

export function getDeleteEmployerEmployerIdEmployeeEmployeeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdEmployeeEmployeeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdEmployeeEmployeeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEmployerEmployerIdEmployeeEmployeeIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchEmployerEmployerIdEmployeeEmployeeIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId', 'PATCH'] as const
}

export function getPatchEmployerEmployerIdEmployeeEmployeeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchEmployerEmployerIdEmployeeEmployeeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$patch']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].$patch(args, options),
      )
    },
  })
}

export function injectPatchEmployerEmployerIdEmployeeEmployeeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchEmployerEmployerIdEmployeeEmployeeIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessment'][':AEAssessmentId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/AEAssessment/:AEAssessmentId',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessment'][':AEAssessmentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessment'][':AEAssessmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessment'][':AEAssessmentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].AEAssessment[':AEAssessmentId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessment'][':AEAssessmentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessment'][':AEAssessmentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessment'][':AEAssessmentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/AEAssessment/:AEAssessmentId',
    'PUT',
  ] as const
}

export function getPutEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessment'][':AEAssessmentId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessment'][':AEAssessmentId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessment'][':AEAssessmentId']['$put']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].AEAssessment[':AEAssessmentId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessment'][':AEAssessmentId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessment'][':AEAssessmentId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/AEAssessment/:AEAssessmentId',
    'DELETE',
  ] as const
}

export function getDeleteEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessment'][':AEAssessmentId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessment'][':AEAssessmentId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessment'][':AEAssessmentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].AEAssessment[
          ':AEAssessmentId'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessment'][':AEAssessmentId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessment'][':AEAssessmentId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployerEmployerIdEmployeeEmployeeIdAEAssessmentAEAssessmentIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeeEmployeeIdAEAssessmentsQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessments']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/AEAssessments', keyArgs] as const
}

export function getEmployerEmployerIdEmployeeEmployeeIdAEAssessmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdAEAssessmentsQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeeEmployeeIdAEAssessmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].AEAssessments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeeEmployeeIdAEAssessments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessments']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdAEAssessmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeeEmployeeIdAEAssessmentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostEmployerEmployerIdEmployeeEmployeeIdAEAssessmentsMutationKey() {
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/AEAssessments', 'POST'] as const
}

export function getPostEmployerEmployerIdEmployeeEmployeeIdAEAssessmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostEmployerEmployerIdEmployeeEmployeeIdAEAssessmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessments']['$post']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].AEAssessments.$post(args, options),
      )
    },
  })
}

export function injectPostEmployerEmployerIdEmployeeEmployeeIdAEAssessments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessments']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['AEAssessments']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostEmployerEmployerIdEmployeeEmployeeIdAEAssessmentsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeeEmployeeIdCommentariesQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Commentaries']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/Commentaries', keyArgs] as const
}

export function getEmployerEmployerIdEmployeeEmployeeIdCommentariesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Commentaries']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Commentaries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Commentaries']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdCommentariesQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeeEmployeeIdCommentariesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].Commentaries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeeEmployeeIdCommentaries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Commentaries']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Commentaries']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Commentaries']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdCommentariesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeeEmployeeIdCommentariesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeeEmployeeIdCommentaryCommentaryIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Commentary'][':CommentaryId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/Commentary/:CommentaryId',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdEmployeeEmployeeIdCommentaryCommentaryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Commentary'][':CommentaryId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Commentary'][':CommentaryId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Commentary'][':CommentaryId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdCommentaryCommentaryIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeeEmployeeIdCommentaryCommentaryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].Commentary[':CommentaryId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeeEmployeeIdCommentaryCommentaryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Commentary'][':CommentaryId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Commentary'][':CommentaryId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Commentary'][':CommentaryId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdCommentaryCommentaryIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeeEmployeeIdCommentaryCommentaryIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeeEmployeeIdJournalLinesQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['JournalLines']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/JournalLines', keyArgs] as const
}

export function getEmployerEmployerIdEmployeeEmployeeIdJournalLinesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['JournalLines']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['JournalLines']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['JournalLines']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdJournalLinesQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeeEmployeeIdJournalLinesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].JournalLines.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeeEmployeeIdJournalLines<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['JournalLines']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['JournalLines']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['JournalLines']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdJournalLinesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeeEmployeeIdJournalLinesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/PayInstruction/:PayInstructionId',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstruction[
          ':PayInstructionId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/PayInstruction/:PayInstructionId',
    'PUT',
  ] as const
}

export function getPutEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$put']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstruction[
          ':PayInstructionId'
        ].$put(args, options),
      )
    },
  })
}

export function injectPutEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/PayInstruction/:PayInstructionId',
    'DELETE',
  ] as const
}

export function getDeleteEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstruction[
          ':PayInstructionId'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/PayInstruction/:PayInstructionId',
    'PATCH',
  ] as const
}

export function getPatchEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$patch']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstruction[
          ':PayInstructionId'
        ].$patch(args, options),
      )
    },
  })
}

export function injectPatchEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/PayInstruction/:PayInstructionId/Tag/:TagId',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tag'][':TagId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdQueryKey
    >
  >({
    queryKey:
      getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstruction[
          ':PayInstructionId'
        ].Tag[':TagId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tag'][':TagId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tag'][':TagId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/PayInstruction/:PayInstructionId/Tag/:TagId',
    'PUT',
  ] as const
}

export function getPutEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tag'][':TagId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tag'][':TagId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tag'][':TagId']['$put']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstruction[
          ':PayInstructionId'
        ].Tag[':TagId'].$put(args, options),
      )
    },
  })
}

export function injectPutEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tag'][':TagId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tag'][':TagId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/PayInstruction/:PayInstructionId/Tag/:TagId',
    'DELETE',
  ] as const
}

export function getDeleteEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tag'][':TagId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tag'][':TagId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tag'][':TagId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstruction[
          ':PayInstructionId'
        ].Tag[':TagId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tag'][':TagId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tag'][':TagId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagsQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/PayInstruction/:PayInstructionId/Tags',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagsQueryKey
    >
  >({
    queryKey:
      getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstruction[
          ':PayInstructionId'
        ].Tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstruction'][':PayInstructionId']['Tags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/PayInstructions',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstructions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeeEmployeeIdPayInstructions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostEmployerEmployerIdEmployeeEmployeeIdPayInstructionsMutationKey() {
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/PayInstructions', 'POST'] as const
}

export function getPostEmployerEmployerIdEmployeeEmployeeIdPayInstructionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostEmployerEmployerIdEmployeeEmployeeIdPayInstructionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['$post']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstructions.$post(args, options),
      )
    },
  })
}

export function injectPostEmployerEmployerIdEmployeeEmployeeIdPayInstructions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostEmployerEmployerIdEmployeeEmployeeIdPayInstructionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTagTagIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/PayInstructions/Tag/:TagId',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTagTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['Tag'][':TagId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTagTagIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTagTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstructions.Tag[':TagId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTagTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['Tag'][':TagId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['Tag'][':TagId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTagTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTagTagIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTagsQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/PayInstructions/Tags',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['Tags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTagsQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].PayInstructions.Tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['Tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayInstructions']['Tags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTagsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/PayLine/:PayLineId',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].PayLine[':PayLineId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/PayLine/:PayLineId/Tag/:TagId',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tag'][':TagId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].PayLine[':PayLineId'].Tag[
          ':TagId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tag'][':TagId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tag'][':TagId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/PayLine/:PayLineId/Tag/:TagId',
    'PUT',
  ] as const
}

export function getPutEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tag'][':TagId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tag'][':TagId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tag'][':TagId']['$put']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].PayLine[':PayLineId'].Tag[
          ':TagId'
        ].$put(args, options),
      )
    },
  })
}

export function injectPutEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tag'][':TagId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tag'][':TagId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/PayLine/:PayLineId/Tag/:TagId',
    'DELETE',
  ] as const
}

export function getDeleteEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tag'][':TagId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tag'][':TagId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tag'][':TagId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].PayLine[':PayLineId'].Tag[
          ':TagId'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tag'][':TagId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tag'][':TagId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagsQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/PayLine/:PayLineId/Tags',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagsQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].PayLine[':PayLineId'].Tags.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLine'][':PayLineId']['Tags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeeEmployeeIdPayLinesQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/PayLines', keyArgs] as const
}

export function getEmployerEmployerIdEmployeeEmployeeIdPayLinesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdPayLinesQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeeEmployeeIdPayLinesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].PayLines.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeeEmployeeIdPayLines<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdPayLinesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeeEmployeeIdPayLinesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeeEmployeeIdPayLinesTagTagIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/PayLines/Tag/:TagId',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdEmployeeEmployeeIdPayLinesTagTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['Tag'][':TagId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdPayLinesTagTagIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeeEmployeeIdPayLinesTagTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].PayLines.Tag[':TagId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeeEmployeeIdPayLinesTagTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['Tag'][':TagId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['Tag'][':TagId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdPayLinesTagTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeeEmployeeIdPayLinesTagTagIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeeEmployeeIdPayLinesTagsQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/PayLines/Tags', keyArgs] as const
}

export function getEmployerEmployerIdEmployeeEmployeeIdPayLinesTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['Tags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdPayLinesTagsQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeeEmployeeIdPayLinesTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].PayLines.Tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeeEmployeeIdPayLinesTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['Tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayLines']['Tags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdPayLinesTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeeEmployeeIdPayLinesTagsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeeEmployeeIdPayRunsQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayRuns']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/PayRuns', keyArgs] as const
}

export function getEmployerEmployerIdEmployeeEmployeeIdPayRunsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayRuns']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayRuns']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayRuns']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdPayRunsQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeeEmployeeIdPayRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].PayRuns.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeeEmployeeIdPayRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayRuns']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayRuns']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['PayRuns']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdPayRunsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeeEmployeeIdPayRunsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/Revision/:RevisionNumber',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].Revision[':RevisionNumber'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/Revision/:RevisionNumber',
    'DELETE',
  ] as const
}

export function getDeleteEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].Revision[':RevisionNumber'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberSummaryQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['Summary']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/Revision/:RevisionNumber/Summary',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['Summary']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['Summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['Summary']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberSummaryQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].Revision[
          ':RevisionNumber'
        ].Summary.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['Summary']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['Summary']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revision'][':RevisionNumber']['Summary']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberSummaryQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeeEmployeeIdRevisionRevisionNumberSummaryQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeeEmployeeIdRevisionsQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revisions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/Revisions', keyArgs] as const
}

export function getEmployerEmployerIdEmployeeEmployeeIdRevisionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revisions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revisions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdRevisionsQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeeEmployeeIdRevisionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].Revisions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeeEmployeeIdRevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revisions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revisions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revisions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdRevisionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeeEmployeeIdRevisionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeeEmployeeIdRevisionsSummaryQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revisions']['Summary']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/Revisions/Summary',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdEmployeeEmployeeIdRevisionsSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revisions']['Summary']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revisions']['Summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revisions']['Summary']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdRevisionsSummaryQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeeEmployeeIdRevisionsSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].Revisions.Summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeeEmployeeIdRevisionsSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revisions']['Summary']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revisions']['Summary']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Revisions']['Summary']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdRevisionsSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeeEmployeeIdRevisionsSummaryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeeEmployeeIdSecretSecretIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secret'][':SecretId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/Secret/:SecretId',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdEmployeeEmployeeIdSecretSecretIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secret'][':SecretId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secret'][':SecretId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secret'][':SecretId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdSecretSecretIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeeEmployeeIdSecretSecretIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].Secret[':SecretId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeeEmployeeIdSecretSecretId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secret'][':SecretId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secret'][':SecretId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secret'][':SecretId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdSecretSecretIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeeEmployeeIdSecretSecretIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutEmployerEmployerIdEmployeeEmployeeIdSecretSecretIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/Secret/:SecretId', 'PUT'] as const
}

export function getPutEmployerEmployerIdEmployeeEmployeeIdSecretSecretIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secret'][':SecretId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secret'][':SecretId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutEmployerEmployerIdEmployeeEmployeeIdSecretSecretIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secret'][':SecretId']['$put']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].Secret[':SecretId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutEmployerEmployerIdEmployeeEmployeeIdSecretSecretId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secret'][':SecretId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secret'][':SecretId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutEmployerEmployerIdEmployeeEmployeeIdSecretSecretIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdEmployeeEmployeeIdSecretSecretIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/Secret/:SecretId',
    'DELETE',
  ] as const
}

export function getDeleteEmployerEmployerIdEmployeeEmployeeIdSecretSecretIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secret'][':SecretId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secret'][':SecretId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdEmployeeEmployeeIdSecretSecretIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secret'][':SecretId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].Secret[':SecretId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdEmployeeEmployeeIdSecretSecretId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secret'][':SecretId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secret'][':SecretId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployerEmployerIdEmployeeEmployeeIdSecretSecretIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeeEmployeeIdSecretsQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secrets']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/Secrets', keyArgs] as const
}

export function getEmployerEmployerIdEmployeeEmployeeIdSecretsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secrets']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secrets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secrets']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdSecretsQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeeEmployeeIdSecretsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].Secrets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeeEmployeeIdSecrets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secrets']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secrets']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secrets']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdSecretsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeeEmployeeIdSecretsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostEmployerEmployerIdEmployeeEmployeeIdSecretsMutationKey() {
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/Secrets', 'POST'] as const
}

export function getPostEmployerEmployerIdEmployeeEmployeeIdSecretsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secrets']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secrets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostEmployerEmployerIdEmployeeEmployeeIdSecretsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secrets']['$post']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].Secrets.$post(args, options),
      )
    },
  })
}

export function injectPostEmployerEmployerIdEmployeeEmployeeIdSecrets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secrets']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Secrets']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmployerEmployerIdEmployeeEmployeeIdSecretsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeeEmployeeIdSummaryQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Summary']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/Summary', keyArgs] as const
}

export function getEmployerEmployerIdEmployeeEmployeeIdSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Summary']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Summary']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdSummaryQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeeEmployeeIdSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].Summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeeEmployeeIdSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Summary']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Summary']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Summary']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeeEmployeeIdSummaryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeeEmployeeIdTagTagIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/Tag/:TagId', keyArgs] as const
}

export function getEmployerEmployerIdEmployeeEmployeeIdTagTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdTagTagIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeeEmployeeIdTagTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].Tag[':TagId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeeEmployeeIdTagTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdTagTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeeEmployeeIdTagTagIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutEmployerEmployerIdEmployeeEmployeeIdTagTagIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/Tag/:TagId', 'PUT'] as const
}

export function getPutEmployerEmployerIdEmployeeEmployeeIdTagTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutEmployerEmployerIdEmployeeEmployeeIdTagTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId']['$put']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].Tag[':TagId'].$put(args, options),
      )
    },
  })
}

export function injectPutEmployerEmployerIdEmployeeEmployeeIdTagTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEmployerEmployerIdEmployeeEmployeeIdTagTagIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdEmployeeEmployeeIdTagTagIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/Tag/:TagId', 'DELETE'] as const
}

export function getDeleteEmployerEmployerIdEmployeeEmployeeIdTagTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdEmployeeEmployeeIdTagTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].Tag[':TagId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdEmployeeEmployeeIdTagTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEmployerEmployerIdEmployeeEmployeeIdTagTagIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeeEmployeeIdTagTagIdEffectiveDateQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/Tag/:TagId/:EffectiveDate',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdEmployeeEmployeeIdTagTagIdEffectiveDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId'][':EffectiveDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId'][':EffectiveDate']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdTagTagIdEffectiveDateQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeeEmployeeIdTagTagIdEffectiveDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].Tag[':TagId'][':EffectiveDate'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeeEmployeeIdTagTagIdEffectiveDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId'][':EffectiveDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId'][':EffectiveDate']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tag'][':TagId'][':EffectiveDate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdTagTagIdEffectiveDateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeeEmployeeIdTagTagIdEffectiveDateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeeEmployeeIdTagsQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/Tags', keyArgs] as const
}

export function getEmployerEmployerIdEmployeeEmployeeIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdTagsQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeeEmployeeIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].Tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeeEmployeeIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeeEmployeeIdTagsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeeEmployeeIdTagsEffectiveDateQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tags'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/Tags/:EffectiveDate',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdEmployeeEmployeeIdTagsEffectiveDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tags'][':EffectiveDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tags'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tags'][':EffectiveDate']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdTagsEffectiveDateQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeeEmployeeIdTagsEffectiveDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'].Tags[':EffectiveDate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeeEmployeeIdTagsEffectiveDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tags'][':EffectiveDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tags'][':EffectiveDate']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId']['Tags'][':EffectiveDate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdTagsEffectiveDateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeeEmployeeIdTagsEffectiveDateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeeEmployeeIdEffectiveDateQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employee/:EmployeeId/:EffectiveDate', keyArgs] as const
}

export function getEmployerEmployerIdEmployeeEmployeeIdEffectiveDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdEffectiveDateQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeeEmployeeIdEffectiveDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'][':EffectiveDate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeeEmployeeIdEffectiveDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdEffectiveDateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeeEmployeeIdEffectiveDateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdEmployeeEmployeeIdEffectiveDateMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/:EffectiveDate',
    'DELETE',
  ] as const
}

export function getDeleteEmployerEmployerIdEmployeeEmployeeIdEffectiveDateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdEmployeeEmployeeIdEffectiveDateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'][':EffectiveDate'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdEmployeeEmployeeIdEffectiveDate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployerEmployerIdEmployeeEmployeeIdEffectiveDateMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeeEmployeeIdEffectiveDateSummaryQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['Summary']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Employee/:EmployeeId/:EffectiveDate/Summary',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdEmployeeEmployeeIdEffectiveDateSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['Summary']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['Summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['Summary']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdEffectiveDateSummaryQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeeEmployeeIdEffectiveDateSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employee[':EmployeeId'][':EffectiveDate'].Summary.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeeEmployeeIdEffectiveDateSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['Summary']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['Summary']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employee'][':EmployeeId'][':EffectiveDate']['Summary']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEmployeeEmployeeIdEffectiveDateSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeeEmployeeIdEffectiveDateSummaryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeesQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Employees']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employees', keyArgs] as const
}

export function getEmployerEmployerIdEmployeesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Employees']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Employees']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Employees']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeesQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employees.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployees<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Employees']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Employer)[':EmployerId']['Employees']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Employees']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEmployeesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostEmployerEmployerIdEmployeesMutationKey() {
  return ['Employer', '/Employer/:EmployerId/Employees', 'POST'] as const
}

export function getPostEmployerEmployerIdEmployeesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Employees']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employer)[':EmployerId']['Employees']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmployerEmployerIdEmployeesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Employer)[':EmployerId']['Employees']['$post']>,
    ) {
      return parseResponse(client.Employer[':EmployerId'].Employees.$post(args, options))
    },
  })
}

export function injectPostEmployerEmployerIdEmployees<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Employees']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Employer)[':EmployerId']['Employees']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmployerEmployerIdEmployeesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeesSummaryQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Employees']['Summary']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employees/Summary', keyArgs] as const
}

export function getEmployerEmployerIdEmployeesSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Employees']['Summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Employees']['Summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['Employees']['Summary']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeesSummaryQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeesSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employees.Summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeesSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Employees']['Summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employees']['Summary']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Employer)[':EmployerId']['Employees']['Summary']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEmployeesSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeesSummaryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeesTagTagIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employees']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employees/Tag/:TagId', keyArgs] as const
}

export function getEmployerEmployerIdEmployeesTagTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['Employees']['Tag'][':TagId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employees']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employees']['Tag'][':TagId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeesTagTagIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeesTagTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employees.Tag[':TagId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeesTagTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['Employees']['Tag'][':TagId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employees']['Tag'][':TagId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employees']['Tag'][':TagId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEmployeesTagTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeesTagTagIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeesTagsQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Employees']['Tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employees/Tags', keyArgs] as const
}

export function getEmployerEmployerIdEmployeesTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Employees']['Tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Employees']['Tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Employees']['Tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeesTagsQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeesTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employees.Tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeesTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Employees']['Tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employees']['Tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Employer)[':EmployerId']['Employees']['Tags']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEmployeesTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeesTagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeesEffectiveDateQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employees'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employees/:EffectiveDate', keyArgs] as const
}

export function getEmployerEmployerIdEmployeesEffectiveDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['Employees'][':EffectiveDate']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employees'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employees'][':EffectiveDate']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeesEffectiveDateQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeesEffectiveDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employees[':EffectiveDate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeesEffectiveDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['Employees'][':EffectiveDate']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employees'][':EffectiveDate']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employees'][':EffectiveDate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEmployeesEffectiveDateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeesEffectiveDateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEmployeesEffectiveDateSummaryQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employees'][':EffectiveDate']['Summary']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Employees/:EffectiveDate/Summary', keyArgs] as const
}

export function getEmployerEmployerIdEmployeesEffectiveDateSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employees'][':EffectiveDate']['Summary']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employees'][':EffectiveDate']['Summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Employees'][':EffectiveDate']['Summary']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEmployeesEffectiveDateSummaryQueryKey>
  >({
    queryKey: getEmployerEmployerIdEmployeesEffectiveDateSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Employees[':EffectiveDate'].Summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdEmployeesEffectiveDateSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Employees'][':EffectiveDate']['Summary']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Employees'][':EffectiveDate']['Summary']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Employees'][':EffectiveDate']['Summary']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEmployeesEffectiveDateSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEmployeesEffectiveDateSummaryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdHolidaySchemeHolidaySchemeIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId', keyArgs] as const
}

export function getEmployerEmployerIdHolidaySchemeHolidaySchemeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdHolidaySchemeHolidaySchemeIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdHolidaySchemeHolidaySchemeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdHolidaySchemeHolidaySchemeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdHolidaySchemeHolidaySchemeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdHolidaySchemeHolidaySchemeIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutEmployerEmployerIdHolidaySchemeHolidaySchemeIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId', 'PUT'] as const
}

export function getPutEmployerEmployerIdHolidaySchemeHolidaySchemeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutEmployerEmployerIdHolidaySchemeHolidaySchemeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$put']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].$put(args, options),
      )
    },
  })
}

export function injectPutEmployerEmployerIdHolidaySchemeHolidaySchemeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEmployerEmployerIdHolidaySchemeHolidaySchemeIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId', 'DELETE'] as const
}

export function getDeleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdHolidaySchemeHolidaySchemeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchEmployerEmployerIdHolidaySchemeHolidaySchemeIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId', 'PATCH'] as const
}

export function getPatchEmployerEmployerIdHolidaySchemeHolidaySchemeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchEmployerEmployerIdHolidaySchemeHolidaySchemeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$patch']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].$patch(args, options),
      )
    },
  })
}

export function injectPatchEmployerEmployerIdHolidaySchemeHolidaySchemeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchEmployerEmployerIdHolidaySchemeHolidaySchemeIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionRevisionNumberQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revision'][':RevisionNumber']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId/Revision/:RevisionNumber',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionRevisionNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revision'][':RevisionNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revision'][':RevisionNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revision'][':RevisionNumber']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionRevisionNumberQueryKey
    >
  >({
    queryKey: getEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionRevisionNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].Revision[
          ':RevisionNumber'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionRevisionNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revision'][':RevisionNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revision'][':RevisionNumber']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revision'][':RevisionNumber']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionRevisionNumberQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionRevisionNumberQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionRevisionNumberMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId/Revision/:RevisionNumber',
    'DELETE',
  ] as const
}

export function getDeleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionRevisionNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revision'][':RevisionNumber']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revision'][':RevisionNumber']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionRevisionNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revision'][':RevisionNumber']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].Revision[
          ':RevisionNumber'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionRevisionNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revision'][':RevisionNumber']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revision'][':RevisionNumber']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionRevisionNumberMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionsQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revisions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId/Revisions',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revisions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revisions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionsQueryKey>
  >({
    queryKey: getEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].Revisions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revisions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revisions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Revisions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdHolidaySchemeHolidaySchemeIdRevisionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId/Tag/:TagId',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].Tag[':TagId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId/Tag/:TagId',
    'PUT',
  ] as const
}

export function getPutEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId']['$put']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].Tag[':TagId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId/Tag/:TagId',
    'DELETE',
  ] as const
}

export function getDeleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].Tag[':TagId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdEffectiveDateQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId/Tag/:TagId/:EffectiveDate',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdEffectiveDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId'][':EffectiveDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId'][':EffectiveDate']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdEffectiveDateQueryKey
    >
  >({
    queryKey: getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdEffectiveDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].Tag[':TagId'][
          ':EffectiveDate'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdEffectiveDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId'][':EffectiveDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId'][':EffectiveDate']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tag'][':TagId'][':EffectiveDate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdEffectiveDateQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdEffectiveDateQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagsQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId/Tags', keyArgs] as const
}

export function getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagsQueryKey>
  >({
    queryKey: getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].Tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdHolidaySchemeHolidaySchemeIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagsEffectiveDateQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tags'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId/Tags/:EffectiveDate',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagsEffectiveDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tags'][':EffectiveDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tags'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tags'][':EffectiveDate']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagsEffectiveDateQueryKey>
  >({
    queryKey: getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagsEffectiveDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'].Tags[
          ':EffectiveDate'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagsEffectiveDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tags'][':EffectiveDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tags'][':EffectiveDate']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId']['Tags'][':EffectiveDate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagsEffectiveDateQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagsEffectiveDateQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdHolidaySchemeHolidaySchemeIdEffectiveDateQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId/:EffectiveDate',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdHolidaySchemeHolidaySchemeIdEffectiveDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId'][':EffectiveDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId'][':EffectiveDate']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdHolidaySchemeHolidaySchemeIdEffectiveDateQueryKey>
  >({
    queryKey: getEmployerEmployerIdHolidaySchemeHolidaySchemeIdEffectiveDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'][':EffectiveDate'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectEmployerEmployerIdHolidaySchemeHolidaySchemeIdEffectiveDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId'][':EffectiveDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId'][':EffectiveDate']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId'][':EffectiveDate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdHolidaySchemeHolidaySchemeIdEffectiveDateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdHolidaySchemeHolidaySchemeIdEffectiveDateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdEffectiveDateMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/HolidayScheme/:HolidaySchemeId/:EffectiveDate',
    'DELETE',
  ] as const
}

export function getDeleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdEffectiveDateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId'][':EffectiveDate']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId'][':EffectiveDate']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdEffectiveDateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId'][':EffectiveDate']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].HolidayScheme[':HolidaySchemeId'][':EffectiveDate'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdEffectiveDate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId'][':EffectiveDate']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['HolidayScheme'][':HolidaySchemeId'][':EffectiveDate']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdEffectiveDateMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdHolidaySchemesQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/HolidaySchemes', keyArgs] as const
}

export function getEmployerEmployerIdHolidaySchemesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdHolidaySchemesQueryKey>
  >({
    queryKey: getEmployerEmployerIdHolidaySchemesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].HolidaySchemes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdHolidaySchemes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdHolidaySchemesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdHolidaySchemesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostEmployerEmployerIdHolidaySchemesMutationKey() {
  return ['Employer', '/Employer/:EmployerId/HolidaySchemes', 'POST'] as const
}

export function getPostEmployerEmployerIdHolidaySchemesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmployerEmployerIdHolidaySchemesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['$post']>,
    ) {
      return parseResponse(client.Employer[':EmployerId'].HolidaySchemes.$post(args, options))
    },
  })
}

export function injectPostEmployerEmployerIdHolidaySchemes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmployerEmployerIdHolidaySchemesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdHolidaySchemesTagTagIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidaySchemes']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/HolidaySchemes/Tag/:TagId', keyArgs] as const
}

export function getEmployerEmployerIdHolidaySchemesTagTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['HolidaySchemes']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidaySchemes']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['HolidaySchemes']['Tag'][':TagId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdHolidaySchemesTagTagIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdHolidaySchemesTagTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].HolidaySchemes.Tag[':TagId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdHolidaySchemesTagTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['HolidaySchemes']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidaySchemes']['Tag'][':TagId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['HolidaySchemes']['Tag'][':TagId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdHolidaySchemesTagTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdHolidaySchemesTagTagIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdHolidaySchemesTagsQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['Tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/HolidaySchemes/Tags', keyArgs] as const
}

export function getEmployerEmployerIdHolidaySchemesTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['Tags']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['Tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['Tags']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdHolidaySchemesTagsQueryKey>
  >({
    queryKey: getEmployerEmployerIdHolidaySchemesTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].HolidaySchemes.Tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdHolidaySchemesTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['HolidaySchemes']['Tags']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidaySchemes']['Tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['HolidaySchemes']['Tags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdHolidaySchemesTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdHolidaySchemesTagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdHolidaySchemesEffectiveDateQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidaySchemes'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/HolidaySchemes/:EffectiveDate', keyArgs] as const
}

export function getEmployerEmployerIdHolidaySchemesEffectiveDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['HolidaySchemes'][':EffectiveDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidaySchemes'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['HolidaySchemes'][':EffectiveDate']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdHolidaySchemesEffectiveDateQueryKey>
  >({
    queryKey: getEmployerEmployerIdHolidaySchemesEffectiveDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].HolidaySchemes[':EffectiveDate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdHolidaySchemesEffectiveDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['HolidaySchemes'][':EffectiveDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['HolidaySchemes'][':EffectiveDate']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['HolidaySchemes'][':EffectiveDate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdHolidaySchemesEffectiveDateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdHolidaySchemesEffectiveDateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdJournalInstructionJournalInstructionIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalInstruction'][':JournalInstructionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/JournalInstruction/:JournalInstructionId',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdJournalInstructionJournalInstructionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['JournalInstruction'][':JournalInstructionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalInstruction'][':JournalInstructionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['JournalInstruction'][':JournalInstructionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdJournalInstructionJournalInstructionIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdJournalInstructionJournalInstructionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].JournalInstruction[':JournalInstructionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdJournalInstructionJournalInstructionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['JournalInstruction'][':JournalInstructionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalInstruction'][':JournalInstructionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['JournalInstruction'][':JournalInstructionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdJournalInstructionJournalInstructionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdJournalInstructionJournalInstructionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutEmployerEmployerIdJournalInstructionJournalInstructionIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/JournalInstruction/:JournalInstructionId',
    'PUT',
  ] as const
}

export function getPutEmployerEmployerIdJournalInstructionJournalInstructionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['JournalInstruction'][':JournalInstructionId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['JournalInstruction'][':JournalInstructionId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutEmployerEmployerIdJournalInstructionJournalInstructionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['JournalInstruction'][':JournalInstructionId']['$put']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].JournalInstruction[':JournalInstructionId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutEmployerEmployerIdJournalInstructionJournalInstructionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['JournalInstruction'][':JournalInstructionId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['JournalInstruction'][':JournalInstructionId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutEmployerEmployerIdJournalInstructionJournalInstructionIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdJournalInstructionJournalInstructionIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/JournalInstruction/:JournalInstructionId',
    'DELETE',
  ] as const
}

export function getDeleteEmployerEmployerIdJournalInstructionJournalInstructionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['JournalInstruction'][':JournalInstructionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['JournalInstruction'][':JournalInstructionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdJournalInstructionJournalInstructionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['JournalInstruction'][':JournalInstructionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].JournalInstruction[':JournalInstructionId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdJournalInstructionJournalInstructionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Employer)[':EmployerId']['JournalInstruction'][':JournalInstructionId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['JournalInstruction'][':JournalInstructionId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployerEmployerIdJournalInstructionJournalInstructionIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdJournalInstructionsQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['JournalInstructions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/JournalInstructions', keyArgs] as const
}

export function getEmployerEmployerIdJournalInstructionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['JournalInstructions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['JournalInstructions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['JournalInstructions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdJournalInstructionsQueryKey>
  >({
    queryKey: getEmployerEmployerIdJournalInstructionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].JournalInstructions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdJournalInstructions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['JournalInstructions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalInstructions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Employer)[':EmployerId']['JournalInstructions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdJournalInstructionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdJournalInstructionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostEmployerEmployerIdJournalInstructionsMutationKey() {
  return ['Employer', '/Employer/:EmployerId/JournalInstructions', 'POST'] as const
}

export function getPostEmployerEmployerIdJournalInstructionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['JournalInstructions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employer)[':EmployerId']['JournalInstructions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmployerEmployerIdJournalInstructionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['JournalInstructions']['$post']
      >,
    ) {
      return parseResponse(client.Employer[':EmployerId'].JournalInstructions.$post(args, options))
    },
  })
}

export function injectPostEmployerEmployerIdJournalInstructions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Employer)[':EmployerId']['JournalInstructions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Employer)[':EmployerId']['JournalInstructions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmployerEmployerIdJournalInstructionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdJournalLineJournalLineIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/JournalLine/:JournalLineId', keyArgs] as const
}

export function getEmployerEmployerIdJournalLineJournalLineIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdJournalLineJournalLineIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdJournalLineJournalLineIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].JournalLine[':JournalLineId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdJournalLineJournalLineId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdJournalLineJournalLineIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdJournalLineJournalLineIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdJournalLineJournalLineIdTagTagIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/JournalLine/:JournalLineId/Tag/:TagId',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdJournalLineJournalLineIdTagTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tag'][':TagId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdJournalLineJournalLineIdTagTagIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdJournalLineJournalLineIdTagTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].JournalLine[':JournalLineId'].Tag[':TagId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdJournalLineJournalLineIdTagTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tag'][':TagId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tag'][':TagId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdJournalLineJournalLineIdTagTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdJournalLineJournalLineIdTagTagIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutEmployerEmployerIdJournalLineJournalLineIdTagTagIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/JournalLine/:JournalLineId/Tag/:TagId', 'PUT'] as const
}

export function getPutEmployerEmployerIdJournalLineJournalLineIdTagTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tag'][':TagId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tag'][':TagId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutEmployerEmployerIdJournalLineJournalLineIdTagTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tag'][':TagId']['$put']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].JournalLine[':JournalLineId'].Tag[':TagId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutEmployerEmployerIdJournalLineJournalLineIdTagTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tag'][':TagId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tag'][':TagId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutEmployerEmployerIdJournalLineJournalLineIdTagTagIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdJournalLineJournalLineIdTagTagIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/JournalLine/:JournalLineId/Tag/:TagId',
    'DELETE',
  ] as const
}

export function getDeleteEmployerEmployerIdJournalLineJournalLineIdTagTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tag'][':TagId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tag'][':TagId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdJournalLineJournalLineIdTagTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tag'][':TagId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].JournalLine[':JournalLineId'].Tag[':TagId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdJournalLineJournalLineIdTagTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tag'][':TagId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tag'][':TagId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployerEmployerIdJournalLineJournalLineIdTagTagIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdJournalLineJournalLineIdTagsQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/JournalLine/:JournalLineId/Tags', keyArgs] as const
}

export function getEmployerEmployerIdJournalLineJournalLineIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdJournalLineJournalLineIdTagsQueryKey>
  >({
    queryKey: getEmployerEmployerIdJournalLineJournalLineIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].JournalLine[':JournalLineId'].Tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdJournalLineJournalLineIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['JournalLine'][':JournalLineId']['Tags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdJournalLineJournalLineIdTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdJournalLineJournalLineIdTagsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdJournalLinesQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['JournalLines']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/JournalLines', keyArgs] as const
}

export function getEmployerEmployerIdJournalLinesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['JournalLines']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['JournalLines']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['JournalLines']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdJournalLinesQueryKey>
  >({
    queryKey: getEmployerEmployerIdJournalLinesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].JournalLines.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdJournalLines<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['JournalLines']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Employer)[':EmployerId']['JournalLines']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['JournalLines']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdJournalLinesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdJournalLinesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdJournalLinesTagTagIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalLines']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/JournalLines/Tag/:TagId', keyArgs] as const
}

export function getEmployerEmployerIdJournalLinesTagTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['JournalLines']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalLines']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['JournalLines']['Tag'][':TagId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdJournalLinesTagTagIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdJournalLinesTagTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].JournalLines.Tag[':TagId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdJournalLinesTagTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['JournalLines']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalLines']['Tag'][':TagId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['JournalLines']['Tag'][':TagId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdJournalLinesTagTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdJournalLinesTagTagIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdJournalLinesTagsQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['JournalLines']['Tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/JournalLines/Tags', keyArgs] as const
}

export function getEmployerEmployerIdJournalLinesTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['JournalLines']['Tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['JournalLines']['Tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['JournalLines']['Tags']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdJournalLinesTagsQueryKey>
  >({
    queryKey: getEmployerEmployerIdJournalLinesTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].JournalLines.Tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdJournalLinesTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['JournalLines']['Tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['JournalLines']['Tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Employer)[':EmployerId']['JournalLines']['Tags']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdJournalLinesTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdJournalLinesTagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdNominalCodeNominalCodeIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/NominalCode/:NominalCodeId', keyArgs] as const
}

export function getEmployerEmployerIdNominalCodeNominalCodeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdNominalCodeNominalCodeIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdNominalCodeNominalCodeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].NominalCode[':NominalCodeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdNominalCodeNominalCodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdNominalCodeNominalCodeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdNominalCodeNominalCodeIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutEmployerEmployerIdNominalCodeNominalCodeIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/NominalCode/:NominalCodeId', 'PUT'] as const
}

export function getPutEmployerEmployerIdNominalCodeNominalCodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutEmployerEmployerIdNominalCodeNominalCodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['$put']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].NominalCode[':NominalCodeId'].$put(args, options),
      )
    },
  })
}

export function injectPutEmployerEmployerIdNominalCodeNominalCodeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEmployerEmployerIdNominalCodeNominalCodeIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdNominalCodeNominalCodeIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/NominalCode/:NominalCodeId', 'DELETE'] as const
}

export function getDeleteEmployerEmployerIdNominalCodeNominalCodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdNominalCodeNominalCodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].NominalCode[':NominalCodeId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdNominalCodeNominalCodeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEmployerEmployerIdNominalCodeNominalCodeIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdNominalCodeNominalCodeIdPayCodesQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['PayCodes']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/NominalCode/:NominalCodeId/PayCodes', keyArgs] as const
}

export function getEmployerEmployerIdNominalCodeNominalCodeIdPayCodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['PayCodes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['PayCodes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['PayCodes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdNominalCodeNominalCodeIdPayCodesQueryKey>
  >({
    queryKey: getEmployerEmployerIdNominalCodeNominalCodeIdPayCodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].NominalCode[':NominalCodeId'].PayCodes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdNominalCodeNominalCodeIdPayCodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['PayCodes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['PayCodes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['NominalCode'][':NominalCodeId']['PayCodes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdNominalCodeNominalCodeIdPayCodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdNominalCodeNominalCodeIdPayCodesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdNominalCodesQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['NominalCodes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/NominalCodes', keyArgs] as const
}

export function getEmployerEmployerIdNominalCodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['NominalCodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['NominalCodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['NominalCodes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdNominalCodesQueryKey>
  >({
    queryKey: getEmployerEmployerIdNominalCodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].NominalCodes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdNominalCodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['NominalCodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Employer)[':EmployerId']['NominalCodes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['NominalCodes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdNominalCodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdNominalCodesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostEmployerEmployerIdNominalCodesMutationKey() {
  return ['Employer', '/Employer/:EmployerId/NominalCodes', 'POST'] as const
}

export function getPostEmployerEmployerIdNominalCodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['NominalCodes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employer)[':EmployerId']['NominalCodes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmployerEmployerIdNominalCodesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Employer)[':EmployerId']['NominalCodes']['$post']>,
    ) {
      return parseResponse(client.Employer[':EmployerId'].NominalCodes.$post(args, options))
    },
  })
}

export function injectPostEmployerEmployerIdNominalCodes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['NominalCodes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Employer)[':EmployerId']['NominalCodes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmployerEmployerIdNominalCodesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPayCodePayCodeIdQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/PayCode/:PayCodeId', keyArgs] as const
}

export function getEmployerEmployerIdPayCodePayCodeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdPayCodePayCodeIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdPayCodePayCodeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].PayCode[':PayCodeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdPayCodePayCodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdPayCodePayCodeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPayCodePayCodeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutEmployerEmployerIdPayCodePayCodeIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/PayCode/:PayCodeId', 'PUT'] as const
}

export function getPutEmployerEmployerIdPayCodePayCodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEmployerEmployerIdPayCodePayCodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$put']
      >,
    ) {
      return parseResponse(client.Employer[':EmployerId'].PayCode[':PayCodeId'].$put(args, options))
    },
  })
}

export function injectPutEmployerEmployerIdPayCodePayCodeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEmployerEmployerIdPayCodePayCodeIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdPayCodePayCodeIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/PayCode/:PayCodeId', 'DELETE'] as const
}

export function getDeleteEmployerEmployerIdPayCodePayCodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdPayCodePayCodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].PayCode[':PayCodeId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdPayCodePayCodeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEmployerEmployerIdPayCodePayCodeIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchEmployerEmployerIdPayCodePayCodeIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/PayCode/:PayCodeId', 'PATCH'] as const
}

export function getPatchEmployerEmployerIdPayCodePayCodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchEmployerEmployerIdPayCodePayCodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$patch']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].PayCode[':PayCodeId'].$patch(args, options),
      )
    },
  })
}

export function injectPatchEmployerEmployerIdPayCodePayCodeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchEmployerEmployerIdPayCodePayCodeIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPayCodePayCodeIdRevisionRevisionNumberQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revision'][':RevisionNumber']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/PayCode/:PayCodeId/Revision/:RevisionNumber',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdPayCodePayCodeIdRevisionRevisionNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revision'][':RevisionNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revision'][':RevisionNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revision'][':RevisionNumber']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdPayCodePayCodeIdRevisionRevisionNumberQueryKey>
  >({
    queryKey: getEmployerEmployerIdPayCodePayCodeIdRevisionRevisionNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].PayCode[':PayCodeId'].Revision[':RevisionNumber'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectEmployerEmployerIdPayCodePayCodeIdRevisionRevisionNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revision'][':RevisionNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revision'][':RevisionNumber']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revision'][':RevisionNumber']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdPayCodePayCodeIdRevisionRevisionNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPayCodePayCodeIdRevisionRevisionNumberQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdPayCodePayCodeIdRevisionRevisionNumberMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/PayCode/:PayCodeId/Revision/:RevisionNumber',
    'DELETE',
  ] as const
}

export function getDeleteEmployerEmployerIdPayCodePayCodeIdRevisionRevisionNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revision'][':RevisionNumber']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revision'][':RevisionNumber']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdPayCodePayCodeIdRevisionRevisionNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revision'][':RevisionNumber']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].PayCode[':PayCodeId'].Revision[':RevisionNumber'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdPayCodePayCodeIdRevisionRevisionNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revision'][':RevisionNumber']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revision'][':RevisionNumber']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployerEmployerIdPayCodePayCodeIdRevisionRevisionNumberMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPayCodePayCodeIdRevisionsQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revisions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/PayCode/:PayCodeId/Revisions', keyArgs] as const
}

export function getEmployerEmployerIdPayCodePayCodeIdRevisionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revisions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revisions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdPayCodePayCodeIdRevisionsQueryKey>
  >({
    queryKey: getEmployerEmployerIdPayCodePayCodeIdRevisionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].PayCode[':PayCodeId'].Revisions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdPayCodePayCodeIdRevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revisions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revisions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Revisions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdPayCodePayCodeIdRevisionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPayCodePayCodeIdRevisionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPayCodePayCodeIdTagTagIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/PayCode/:PayCodeId/Tag/:TagId', keyArgs] as const
}

export function getEmployerEmployerIdPayCodePayCodeIdTagTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tag'][':TagId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdPayCodePayCodeIdTagTagIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdPayCodePayCodeIdTagTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].PayCode[':PayCodeId'].Tag[':TagId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdPayCodePayCodeIdTagTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tag'][':TagId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tag'][':TagId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdPayCodePayCodeIdTagTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPayCodePayCodeIdTagTagIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutEmployerEmployerIdPayCodePayCodeIdTagTagIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/PayCode/:PayCodeId/Tag/:TagId', 'PUT'] as const
}

export function getPutEmployerEmployerIdPayCodePayCodeIdTagTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tag'][':TagId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tag'][':TagId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutEmployerEmployerIdPayCodePayCodeIdTagTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tag'][':TagId']['$put']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].PayCode[':PayCodeId'].Tag[':TagId'].$put(args, options),
      )
    },
  })
}

export function injectPutEmployerEmployerIdPayCodePayCodeIdTagTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tag'][':TagId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tag'][':TagId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEmployerEmployerIdPayCodePayCodeIdTagTagIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdPayCodePayCodeIdTagTagIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/PayCode/:PayCodeId/Tag/:TagId', 'DELETE'] as const
}

export function getDeleteEmployerEmployerIdPayCodePayCodeIdTagTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tag'][':TagId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tag'][':TagId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdPayCodePayCodeIdTagTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tag'][':TagId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].PayCode[':PayCodeId'].Tag[':TagId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdPayCodePayCodeIdTagTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tag'][':TagId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tag'][':TagId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEmployerEmployerIdPayCodePayCodeIdTagTagIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPayCodePayCodeIdTagsQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/PayCode/:PayCodeId/Tags', keyArgs] as const
}

export function getEmployerEmployerIdPayCodePayCodeIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdPayCodePayCodeIdTagsQueryKey>
  >({
    queryKey: getEmployerEmployerIdPayCodePayCodeIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].PayCode[':PayCodeId'].Tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdPayCodePayCodeIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId']['Tags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdPayCodePayCodeIdTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPayCodePayCodeIdTagsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPayCodePayCodeIdEffectiveDateQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/PayCode/:PayCodeId/:EffectiveDate', keyArgs] as const
}

export function getEmployerEmployerIdPayCodePayCodeIdEffectiveDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId'][':EffectiveDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId'][':EffectiveDate']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdPayCodePayCodeIdEffectiveDateQueryKey>
  >({
    queryKey: getEmployerEmployerIdPayCodePayCodeIdEffectiveDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].PayCode[':PayCodeId'][':EffectiveDate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdPayCodePayCodeIdEffectiveDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId'][':EffectiveDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId'][':EffectiveDate']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId'][':EffectiveDate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdPayCodePayCodeIdEffectiveDateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPayCodePayCodeIdEffectiveDateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdPayCodePayCodeIdEffectiveDateMutationKey() {
  return ['Employer', '/Employer/:EmployerId/PayCode/:PayCodeId/:EffectiveDate', 'DELETE'] as const
}

export function getDeleteEmployerEmployerIdPayCodePayCodeIdEffectiveDateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId'][':EffectiveDate']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId'][':EffectiveDate']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdPayCodePayCodeIdEffectiveDateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId'][':EffectiveDate']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].PayCode[':PayCodeId'][':EffectiveDate'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdPayCodePayCodeIdEffectiveDate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId'][':EffectiveDate']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['PayCode'][':PayCodeId'][':EffectiveDate']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployerEmployerIdPayCodePayCodeIdEffectiveDateMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPayCodesQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['PayCodes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/PayCodes', keyArgs] as const
}

export function getEmployerEmployerIdPayCodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['PayCodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['PayCodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['PayCodes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdPayCodesQueryKey>
  >({
    queryKey: getEmployerEmployerIdPayCodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].PayCodes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdPayCodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['PayCodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Employer)[':EmployerId']['PayCodes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['PayCodes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdPayCodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPayCodesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostEmployerEmployerIdPayCodesMutationKey() {
  return ['Employer', '/Employer/:EmployerId/PayCodes', 'POST'] as const
}

export function getPostEmployerEmployerIdPayCodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['PayCodes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employer)[':EmployerId']['PayCodes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmployerEmployerIdPayCodesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Employer)[':EmployerId']['PayCodes']['$post']>,
    ) {
      return parseResponse(client.Employer[':EmployerId'].PayCodes.$post(args, options))
    },
  })
}

export function injectPostEmployerEmployerIdPayCodes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['PayCodes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Employer)[':EmployerId']['PayCodes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmployerEmployerIdPayCodesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPayCodesTagTagIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCodes']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/PayCodes/Tag/:TagId', keyArgs] as const
}

export function getEmployerEmployerIdPayCodesTagTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['PayCodes']['Tag'][':TagId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCodes']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['PayCodes']['Tag'][':TagId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdPayCodesTagTagIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdPayCodesTagTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].PayCodes.Tag[':TagId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdPayCodesTagTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['PayCodes']['Tag'][':TagId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCodes']['Tag'][':TagId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['PayCodes']['Tag'][':TagId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdPayCodesTagTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPayCodesTagTagIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPayCodesTagsQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['PayCodes']['Tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/PayCodes/Tags', keyArgs] as const
}

export function getEmployerEmployerIdPayCodesTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['PayCodes']['Tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['PayCodes']['Tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['PayCodes']['Tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdPayCodesTagsQueryKey>
  >({
    queryKey: getEmployerEmployerIdPayCodesTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].PayCodes.Tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdPayCodesTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['PayCodes']['Tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Employer)[':EmployerId']['PayCodes']['Tags']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Employer)[':EmployerId']['PayCodes']['Tags']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdPayCodesTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPayCodesTagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPayCodesEffectiveDateQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCodes'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/PayCodes/:EffectiveDate', keyArgs] as const
}

export function getEmployerEmployerIdPayCodesEffectiveDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['PayCodes'][':EffectiveDate']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCodes'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PayCodes'][':EffectiveDate']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdPayCodesEffectiveDateQueryKey>
  >({
    queryKey: getEmployerEmployerIdPayCodesEffectiveDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].PayCodes[':EffectiveDate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdPayCodesEffectiveDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['PayCodes'][':EffectiveDate']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['PayCodes'][':EffectiveDate']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['PayCodes'][':EffectiveDate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdPayCodesEffectiveDateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPayCodesEffectiveDateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/PaySchedule/:PayScheduleId', keyArgs] as const
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdPaySchedulePayScheduleIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdPaySchedulePayScheduleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdPaySchedulePayScheduleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdPaySchedulePayScheduleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPaySchedulePayScheduleIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutEmployerEmployerIdPaySchedulePayScheduleIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/PaySchedule/:PayScheduleId', 'PUT'] as const
}

export function getPutEmployerEmployerIdPaySchedulePayScheduleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutEmployerEmployerIdPaySchedulePayScheduleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['$put']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].$put(args, options),
      )
    },
  })
}

export function injectPutEmployerEmployerIdPaySchedulePayScheduleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEmployerEmployerIdPaySchedulePayScheduleIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdPaySchedulePayScheduleIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/PaySchedule/:PayScheduleId', 'DELETE'] as const
}

export function getDeleteEmployerEmployerIdPaySchedulePayScheduleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdPaySchedulePayScheduleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdPaySchedulePayScheduleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEmployerEmployerIdPaySchedulePayScheduleIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdEmployeesQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Employees']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/Employees',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdEmployeesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Employees']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Employees']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Employees']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdPaySchedulePayScheduleIdEmployeesQueryKey>
  >({
    queryKey: getEmployerEmployerIdPaySchedulePayScheduleIdEmployeesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].Employees.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdPaySchedulePayScheduleIdEmployees<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Employees']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Employees']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Employees']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdPaySchedulePayScheduleIdEmployeesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPaySchedulePayScheduleIdEmployeesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdEmployeesEffectiveDateQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Employees'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/Employees/:EffectiveDate',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdEmployeesEffectiveDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Employees'][':EffectiveDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Employees'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Employees'][':EffectiveDate']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdPaySchedulePayScheduleIdEmployeesEffectiveDateQueryKey>
  >({
    queryKey: getEmployerEmployerIdPaySchedulePayScheduleIdEmployeesEffectiveDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].Employees[
          ':EffectiveDate'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmployerEmployerIdPaySchedulePayScheduleIdEmployeesEffectiveDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Employees'][':EffectiveDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Employees'][':EffectiveDate']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Employees'][':EffectiveDate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getEmployerEmployerIdPaySchedulePayScheduleIdEmployeesEffectiveDateQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPaySchedulePayScheduleIdEmployeesEffectiveDateQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[':PayRunId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId',
    'DELETE',
  ] as const
}

export function getDeleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[':PayRunId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdAEAssessmentsQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['AEAssessments']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId/AEAssessments',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdAEAssessmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['AEAssessments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['AEAssessments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['AEAssessments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdAEAssessmentsQueryKey
    >
  >({
    queryKey:
      getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdAEAssessmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[
          ':PayRunId'
        ].AEAssessments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdAEAssessments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['AEAssessments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['AEAssessments']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['AEAssessments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdAEAssessmentsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdAEAssessmentsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdCommentariesQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Commentaries']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId/Commentaries',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdCommentariesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Commentaries']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Commentaries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Commentaries']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdCommentariesQueryKey
    >
  >({
    queryKey: getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdCommentariesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[
          ':PayRunId'
        ].Commentaries.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdCommentaries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Commentaries']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Commentaries']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Commentaries']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdCommentariesQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdCommentariesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeeEmployeeIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId/Employee/:EmployeeId',
    'DELETE',
  ] as const
}

export function getDeleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeeEmployeeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employee'][':EmployeeId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employee'][':EmployeeId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeeEmployeeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employee'][':EmployeeId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[':PayRunId'].Employee[
          ':EmployeeId'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeeEmployeeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employee'][':EmployeeId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employee'][':EmployeeId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeeEmployeeIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeeEmployeeIdCommentaryQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employee'][':EmployeeId']['Commentary']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId/Employee/:EmployeeId/Commentary',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeeEmployeeIdCommentaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employee'][':EmployeeId']['Commentary']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employee'][':EmployeeId']['Commentary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employee'][':EmployeeId']['Commentary']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeeEmployeeIdCommentaryQueryKey
    >
  >({
    queryKey:
      getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeeEmployeeIdCommentaryQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[':PayRunId'].Employee[
          ':EmployeeId'
        ].Commentary.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeeEmployeeIdCommentary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employee'][':EmployeeId']['Commentary']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employee'][':EmployeeId']['Commentary']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employee'][':EmployeeId']['Commentary']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeeEmployeeIdCommentaryQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeeEmployeeIdCommentaryQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeesQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employees']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId/Employees',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employees']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employees']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employees']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeesQueryKey>
  >({
    queryKey: getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[
          ':PayRunId'
        ].Employees.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployees<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employees']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employees']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Employees']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeesQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdEmployeesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdJournalLinesQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['JournalLines']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId/JournalLines',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdJournalLinesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['JournalLines']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['JournalLines']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['JournalLines']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdJournalLinesQueryKey
    >
  >({
    queryKey: getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdJournalLinesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[
          ':PayRunId'
        ].JournalLines.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdJournalLines<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['JournalLines']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['JournalLines']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['JournalLines']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdJournalLinesQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdJournalLinesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdPayLinesQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['PayLines']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId/PayLines',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdPayLinesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['PayLines']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['PayLines']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['PayLines']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdPayLinesQueryKey>
  >({
    queryKey: getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdPayLinesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[
          ':PayRunId'
        ].PayLines.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdPayLines<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['PayLines']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['PayLines']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['PayLines']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdPayLinesQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdPayLinesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdReportLinesQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['ReportLines']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId/ReportLines',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdReportLinesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['ReportLines']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['ReportLines']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['ReportLines']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdReportLinesQueryKey
    >
  >({
    queryKey: getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdReportLinesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[
          ':PayRunId'
        ].ReportLines.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdReportLines<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['ReportLines']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['ReportLines']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['ReportLines']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdReportLinesQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdReportLinesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId/Tag/:TagId',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tag'][':TagId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[':PayRunId'].Tag[
          ':TagId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tag'][':TagId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tag'][':TagId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId/Tag/:TagId',
    'PUT',
  ] as const
}

export function getPutEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tag'][':TagId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tag'][':TagId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tag'][':TagId']['$put']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[':PayRunId'].Tag[
          ':TagId'
        ].$put(args, options),
      )
    },
  })
}

export function injectPutEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tag'][':TagId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tag'][':TagId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId/Tag/:TagId',
    'DELETE',
  ] as const
}

export function getDeleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tag'][':TagId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tag'][':TagId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tag'][':TagId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[':PayRunId'].Tag[
          ':TagId'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tag'][':TagId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tag'][':TagId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagsQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRun/:PayRunId/Tags',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagsQueryKey>
  >({
    queryKey: getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRun[':PayRunId'].Tags.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRun'][':PayRunId']['Tags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRuns', keyArgs] as const
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsQueryKey>
  >({
    queryKey: getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRuns.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdPaySchedulePayScheduleIdPayRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTagTagIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRuns/Tag/:TagId',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTagTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['Tag'][':TagId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTagTagIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTagTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRuns.Tag[':TagId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTagTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['Tag'][':TagId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['Tag'][':TagId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTagTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTagTagIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTagsQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/PayRuns/Tags',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['Tags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTagsQueryKey>
  >({
    queryKey: getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].PayRuns.Tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['Tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['PayRuns']['Tags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTagsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/Tag/:TagId',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tag'][':TagId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].Tag[':TagId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdPaySchedulePayScheduleIdTagTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tag'][':TagId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tag'][':TagId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/PaySchedule/:PayScheduleId/Tag/:TagId', 'PUT'] as const
}

export function getPutEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tag'][':TagId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tag'][':TagId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tag'][':TagId']['$put']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].Tag[':TagId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutEmployerEmployerIdPaySchedulePayScheduleIdTagTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tag'][':TagId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tag'][':TagId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/PaySchedule/:PayScheduleId/Tag/:TagId',
    'DELETE',
  ] as const
}

export function getDeleteEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tag'][':TagId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tag'][':TagId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tag'][':TagId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].Tag[':TagId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdPaySchedulePayScheduleIdTagTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tag'][':TagId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tag'][':TagId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdTagsQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/PaySchedule/:PayScheduleId/Tags', keyArgs] as const
}

export function getEmployerEmployerIdPaySchedulePayScheduleIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdPaySchedulePayScheduleIdTagsQueryKey>
  >({
    queryKey: getEmployerEmployerIdPaySchedulePayScheduleIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].PaySchedule[':PayScheduleId'].Tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdPaySchedulePayScheduleIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['PaySchedule'][':PayScheduleId']['Tags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdPaySchedulePayScheduleIdTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPaySchedulePayScheduleIdTagsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPaySchedulesQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['PaySchedules']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/PaySchedules', keyArgs] as const
}

export function getEmployerEmployerIdPaySchedulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['PaySchedules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['PaySchedules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['PaySchedules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdPaySchedulesQueryKey>
  >({
    queryKey: getEmployerEmployerIdPaySchedulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].PaySchedules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdPaySchedules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['PaySchedules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Employer)[':EmployerId']['PaySchedules']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['PaySchedules']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdPaySchedulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPaySchedulesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostEmployerEmployerIdPaySchedulesMutationKey() {
  return ['Employer', '/Employer/:EmployerId/PaySchedules', 'POST'] as const
}

export function getPostEmployerEmployerIdPaySchedulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['PaySchedules']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employer)[':EmployerId']['PaySchedules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmployerEmployerIdPaySchedulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Employer)[':EmployerId']['PaySchedules']['$post']>,
    ) {
      return parseResponse(client.Employer[':EmployerId'].PaySchedules.$post(args, options))
    },
  })
}

export function injectPostEmployerEmployerIdPaySchedules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['PaySchedules']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Employer)[':EmployerId']['PaySchedules']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmployerEmployerIdPaySchedulesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPaySchedulesTagTagIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedules']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/PaySchedules/Tag/:TagId', keyArgs] as const
}

export function getEmployerEmployerIdPaySchedulesTagTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedules']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedules']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['PaySchedules']['Tag'][':TagId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdPaySchedulesTagTagIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdPaySchedulesTagTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].PaySchedules.Tag[':TagId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdPaySchedulesTagTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['PaySchedules']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedules']['Tag'][':TagId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['PaySchedules']['Tag'][':TagId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdPaySchedulesTagTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPaySchedulesTagTagIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPaySchedulesTagsQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['PaySchedules']['Tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/PaySchedules/Tags', keyArgs] as const
}

export function getEmployerEmployerIdPaySchedulesTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['PaySchedules']['Tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['PaySchedules']['Tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['PaySchedules']['Tags']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdPaySchedulesTagsQueryKey>
  >({
    queryKey: getEmployerEmployerIdPaySchedulesTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].PaySchedules.Tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdPaySchedulesTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['PaySchedules']['Tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['PaySchedules']['Tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Employer)[':EmployerId']['PaySchedules']['Tags']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdPaySchedulesTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPaySchedulesTagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPensionPensionIdQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Pension/:PensionId', keyArgs] as const
}

export function getEmployerEmployerIdPensionPensionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdPensionPensionIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdPensionPensionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Pension[':PensionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdPensionPensionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdPensionPensionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPensionPensionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutEmployerEmployerIdPensionPensionIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/Pension/:PensionId', 'PUT'] as const
}

export function getPutEmployerEmployerIdPensionPensionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEmployerEmployerIdPensionPensionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$put']
      >,
    ) {
      return parseResponse(client.Employer[':EmployerId'].Pension[':PensionId'].$put(args, options))
    },
  })
}

export function injectPutEmployerEmployerIdPensionPensionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEmployerEmployerIdPensionPensionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdPensionPensionIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/Pension/:PensionId', 'DELETE'] as const
}

export function getDeleteEmployerEmployerIdPensionPensionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdPensionPensionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].Pension[':PensionId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdPensionPensionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEmployerEmployerIdPensionPensionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchEmployerEmployerIdPensionPensionIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/Pension/:PensionId', 'PATCH'] as const
}

export function getPatchEmployerEmployerIdPensionPensionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchEmployerEmployerIdPensionPensionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$patch']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].Pension[':PensionId'].$patch(args, options),
      )
    },
  })
}

export function injectPatchEmployerEmployerIdPensionPensionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchEmployerEmployerIdPensionPensionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPensionPensionIdRevisionRevisionNumberQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revision'][':RevisionNumber']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/Pension/:PensionId/Revision/:RevisionNumber',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdPensionPensionIdRevisionRevisionNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revision'][':RevisionNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revision'][':RevisionNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revision'][':RevisionNumber']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdPensionPensionIdRevisionRevisionNumberQueryKey>
  >({
    queryKey: getEmployerEmployerIdPensionPensionIdRevisionRevisionNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Pension[':PensionId'].Revision[':RevisionNumber'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectEmployerEmployerIdPensionPensionIdRevisionRevisionNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revision'][':RevisionNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revision'][':RevisionNumber']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revision'][':RevisionNumber']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdPensionPensionIdRevisionRevisionNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPensionPensionIdRevisionRevisionNumberQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdPensionPensionIdRevisionRevisionNumberMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/Pension/:PensionId/Revision/:RevisionNumber',
    'DELETE',
  ] as const
}

export function getDeleteEmployerEmployerIdPensionPensionIdRevisionRevisionNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revision'][':RevisionNumber']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revision'][':RevisionNumber']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdPensionPensionIdRevisionRevisionNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revision'][':RevisionNumber']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].Pension[':PensionId'].Revision[':RevisionNumber'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdPensionPensionIdRevisionRevisionNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revision'][':RevisionNumber']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revision'][':RevisionNumber']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployerEmployerIdPensionPensionIdRevisionRevisionNumberMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPensionPensionIdRevisionsQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revisions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Pension/:PensionId/Revisions', keyArgs] as const
}

export function getEmployerEmployerIdPensionPensionIdRevisionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revisions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revisions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdPensionPensionIdRevisionsQueryKey>
  >({
    queryKey: getEmployerEmployerIdPensionPensionIdRevisionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Pension[':PensionId'].Revisions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdPensionPensionIdRevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revisions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revisions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Pension'][':PensionId']['Revisions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdPensionPensionIdRevisionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPensionPensionIdRevisionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPensionPensionIdEffectiveDateQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Pension'][':PensionId'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Pension/:PensionId/:EffectiveDate', keyArgs] as const
}

export function getEmployerEmployerIdPensionPensionIdEffectiveDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Pension'][':PensionId'][':EffectiveDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Pension'][':PensionId'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Pension'][':PensionId'][':EffectiveDate']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdPensionPensionIdEffectiveDateQueryKey>
  >({
    queryKey: getEmployerEmployerIdPensionPensionIdEffectiveDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Pension[':PensionId'][':EffectiveDate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdPensionPensionIdEffectiveDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Pension'][':PensionId'][':EffectiveDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Pension'][':PensionId'][':EffectiveDate']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Pension'][':PensionId'][':EffectiveDate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdPensionPensionIdEffectiveDateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPensionPensionIdEffectiveDateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdPensionPensionIdEffectiveDateMutationKey() {
  return ['Employer', '/Employer/:EmployerId/Pension/:PensionId/:EffectiveDate', 'DELETE'] as const
}

export function getDeleteEmployerEmployerIdPensionPensionIdEffectiveDateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Pension'][':PensionId'][':EffectiveDate']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Pension'][':PensionId'][':EffectiveDate']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdPensionPensionIdEffectiveDateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['Pension'][':PensionId'][':EffectiveDate']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].Pension[':PensionId'][':EffectiveDate'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdPensionPensionIdEffectiveDate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Employer)[':EmployerId']['Pension'][':PensionId'][':EffectiveDate']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['Pension'][':PensionId'][':EffectiveDate']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployerEmployerIdPensionPensionIdEffectiveDateMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPensionsQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Pensions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Pensions', keyArgs] as const
}

export function getEmployerEmployerIdPensionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Pensions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Pensions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Pensions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdPensionsQueryKey>
  >({
    queryKey: getEmployerEmployerIdPensionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Pensions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdPensions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Pensions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Employer)[':EmployerId']['Pensions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Pensions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdPensionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPensionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostEmployerEmployerIdPensionsMutationKey() {
  return ['Employer', '/Employer/:EmployerId/Pensions', 'POST'] as const
}

export function getPostEmployerEmployerIdPensionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Pensions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employer)[':EmployerId']['Pensions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmployerEmployerIdPensionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Employer)[':EmployerId']['Pensions']['$post']>,
    ) {
      return parseResponse(client.Employer[':EmployerId'].Pensions.$post(args, options))
    },
  })
}

export function injectPostEmployerEmployerIdPensions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Pensions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Employer)[':EmployerId']['Pensions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmployerEmployerIdPensionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdPensionsEffectiveDateQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Pensions'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Pensions/:EffectiveDate', keyArgs] as const
}

export function getEmployerEmployerIdPensionsEffectiveDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['Pensions'][':EffectiveDate']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Pensions'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Pensions'][':EffectiveDate']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdPensionsEffectiveDateQueryKey>
  >({
    queryKey: getEmployerEmployerIdPensionsEffectiveDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Pensions[':EffectiveDate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdPensionsEffectiveDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['Pensions'][':EffectiveDate']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Pensions'][':EffectiveDate']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Pensions'][':EffectiveDate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdPensionsEffectiveDateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdPensionsEffectiveDateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdReportLineReportLineIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ReportLine'][':ReportLineId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/ReportLine/:ReportLineId', keyArgs] as const
}

export function getEmployerEmployerIdReportLineReportLineIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['ReportLine'][':ReportLineId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ReportLine'][':ReportLineId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['ReportLine'][':ReportLineId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdReportLineReportLineIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdReportLineReportLineIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].ReportLine[':ReportLineId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdReportLineReportLineId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['ReportLine'][':ReportLineId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['ReportLine'][':ReportLineId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['ReportLine'][':ReportLineId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdReportLineReportLineIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdReportLineReportLineIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdReportLinesQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['ReportLines']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/ReportLines', keyArgs] as const
}

export function getEmployerEmployerIdReportLinesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['ReportLines']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['ReportLines']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['ReportLines']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdReportLinesQueryKey>
  >({
    queryKey: getEmployerEmployerIdReportLinesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].ReportLines.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdReportLines<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['ReportLines']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Employer)[':EmployerId']['ReportLines']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['ReportLines']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdReportLinesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdReportLinesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdReportingInstructionReportingInstructionIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ReportingInstruction'][':ReportingInstructionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/ReportingInstruction/:ReportingInstructionId',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdReportingInstructionReportingInstructionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['ReportingInstruction'][':ReportingInstructionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ReportingInstruction'][':ReportingInstructionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['ReportingInstruction'][':ReportingInstructionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdReportingInstructionReportingInstructionIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdReportingInstructionReportingInstructionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].ReportingInstruction[':ReportingInstructionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdReportingInstructionReportingInstructionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['ReportingInstruction'][':ReportingInstructionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['ReportingInstruction'][':ReportingInstructionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['ReportingInstruction'][':ReportingInstructionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdReportingInstructionReportingInstructionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdReportingInstructionReportingInstructionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutEmployerEmployerIdReportingInstructionReportingInstructionIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/ReportingInstruction/:ReportingInstructionId',
    'PUT',
  ] as const
}

export function getPutEmployerEmployerIdReportingInstructionReportingInstructionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['ReportingInstruction'][':ReportingInstructionId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['ReportingInstruction'][':ReportingInstructionId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutEmployerEmployerIdReportingInstructionReportingInstructionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['ReportingInstruction'][':ReportingInstructionId']['$put']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].ReportingInstruction[':ReportingInstructionId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutEmployerEmployerIdReportingInstructionReportingInstructionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['ReportingInstruction'][':ReportingInstructionId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['ReportingInstruction'][':ReportingInstructionId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutEmployerEmployerIdReportingInstructionReportingInstructionIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdReportingInstructionReportingInstructionIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/ReportingInstruction/:ReportingInstructionId',
    'DELETE',
  ] as const
}

export function getDeleteEmployerEmployerIdReportingInstructionReportingInstructionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['ReportingInstruction'][':ReportingInstructionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['ReportingInstruction'][':ReportingInstructionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdReportingInstructionReportingInstructionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['ReportingInstruction'][':ReportingInstructionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].ReportingInstruction[':ReportingInstructionId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdReportingInstructionReportingInstructionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Employer)[':EmployerId']['ReportingInstruction'][':ReportingInstructionId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['ReportingInstruction'][':ReportingInstructionId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployerEmployerIdReportingInstructionReportingInstructionIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdReportingInstructionsQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['ReportingInstructions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/ReportingInstructions', keyArgs] as const
}

export function getEmployerEmployerIdReportingInstructionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['ReportingInstructions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['ReportingInstructions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['ReportingInstructions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdReportingInstructionsQueryKey>
  >({
    queryKey: getEmployerEmployerIdReportingInstructionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].ReportingInstructions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdReportingInstructions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['ReportingInstructions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['ReportingInstructions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Employer)[':EmployerId']['ReportingInstructions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdReportingInstructionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdReportingInstructionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostEmployerEmployerIdReportingInstructionsMutationKey() {
  return ['Employer', '/Employer/:EmployerId/ReportingInstructions', 'POST'] as const
}

export function getPostEmployerEmployerIdReportingInstructionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['ReportingInstructions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employer)[':EmployerId']['ReportingInstructions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmployerEmployerIdReportingInstructionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['ReportingInstructions']['$post']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].ReportingInstructions.$post(args, options),
      )
    },
  })
}

export function injectPostEmployerEmployerIdReportingInstructions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['ReportingInstructions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Employer)[':EmployerId']['ReportingInstructions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmployerEmployerIdReportingInstructionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdRevisionRevisionNumberQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Revision/:RevisionNumber', keyArgs] as const
}

export function getEmployerEmployerIdRevisionRevisionNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdRevisionRevisionNumberQueryKey>
  >({
    queryKey: getEmployerEmployerIdRevisionRevisionNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Revision[':RevisionNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdRevisionRevisionNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdRevisionRevisionNumberQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdRevisionRevisionNumberQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdRevisionRevisionNumberMutationKey() {
  return ['Employer', '/Employer/:EmployerId/Revision/:RevisionNumber', 'DELETE'] as const
}

export function getDeleteEmployerEmployerIdRevisionRevisionNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdRevisionRevisionNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].Revision[':RevisionNumber'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdRevisionRevisionNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEmployerEmployerIdRevisionRevisionNumberMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdRevisionRevisionNumberSummaryQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['Summary']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Revision/:RevisionNumber/Summary', keyArgs] as const
}

export function getEmployerEmployerIdRevisionRevisionNumberSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['Summary']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['Summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['Summary']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdRevisionRevisionNumberSummaryQueryKey>
  >({
    queryKey: getEmployerEmployerIdRevisionRevisionNumberSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Revision[':RevisionNumber'].Summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdRevisionRevisionNumberSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['Summary']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['Summary']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Revision'][':RevisionNumber']['Summary']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdRevisionRevisionNumberSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdRevisionRevisionNumberSummaryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdRevisionsQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Revisions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Revisions', keyArgs] as const
}

export function getEmployerEmployerIdRevisionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Revisions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Revisions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Revisions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdRevisionsQueryKey>
  >({
    queryKey: getEmployerEmployerIdRevisionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Revisions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdRevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Revisions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Employer)[':EmployerId']['Revisions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Revisions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdRevisionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdRevisionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdRevisionsSummaryQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Revisions']['Summary']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Revisions/Summary', keyArgs] as const
}

export function getEmployerEmployerIdRevisionsSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Revisions']['Summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Revisions']['Summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['Revisions']['Summary']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdRevisionsSummaryQueryKey>
  >({
    queryKey: getEmployerEmployerIdRevisionsSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Revisions.Summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdRevisionsSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Revisions']['Summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Revisions']['Summary']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Employer)[':EmployerId']['Revisions']['Summary']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdRevisionsSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdRevisionsSummaryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdRtiTransactionRtiTransactionIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/RtiTransaction/:RtiTransactionId', keyArgs] as const
}

export function getEmployerEmployerIdRtiTransactionRtiTransactionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdRtiTransactionRtiTransactionIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdRtiTransactionRtiTransactionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].RtiTransaction[':RtiTransactionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdRtiTransactionRtiTransactionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdRtiTransactionRtiTransactionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdRtiTransactionRtiTransactionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdRtiTransactionRtiTransactionIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/RtiTransaction/:RtiTransactionId', 'DELETE'] as const
}

export function getDeleteEmployerEmployerIdRtiTransactionRtiTransactionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdRtiTransactionRtiTransactionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].RtiTransaction[':RtiTransactionId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdRtiTransactionRtiTransactionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployerEmployerIdRtiTransactionRtiTransactionIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdRtiTransactionRtiTransactionIdSummaryQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Summary']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/RtiTransaction/:RtiTransactionId/Summary',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdRtiTransactionRtiTransactionIdSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Summary']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Summary']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdRtiTransactionRtiTransactionIdSummaryQueryKey>
  >({
    queryKey: getEmployerEmployerIdRtiTransactionRtiTransactionIdSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].RtiTransaction[':RtiTransactionId'].Summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdRtiTransactionRtiTransactionIdSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Summary']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Summary']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Summary']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdRtiTransactionRtiTransactionIdSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdRtiTransactionRtiTransactionIdSummaryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/RtiTransaction/:RtiTransactionId/Tag/:TagId',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tag'][':TagId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].RtiTransaction[':RtiTransactionId'].Tag[':TagId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tag'][':TagId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tag'][':TagId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/RtiTransaction/:RtiTransactionId/Tag/:TagId',
    'PUT',
  ] as const
}

export function getPutEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tag'][':TagId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tag'][':TagId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tag'][':TagId']['$put']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].RtiTransaction[':RtiTransactionId'].Tag[':TagId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tag'][':TagId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tag'][':TagId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/RtiTransaction/:RtiTransactionId/Tag/:TagId',
    'DELETE',
  ] as const
}

export function getDeleteEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tag'][':TagId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tag'][':TagId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tag'][':TagId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].RtiTransaction[':RtiTransactionId'].Tag[':TagId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tag'][':TagId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tag'][':TagId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdRtiTransactionRtiTransactionIdTagsQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/RtiTransaction/:RtiTransactionId/Tags',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdRtiTransactionRtiTransactionIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdRtiTransactionRtiTransactionIdTagsQueryKey>
  >({
    queryKey: getEmployerEmployerIdRtiTransactionRtiTransactionIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].RtiTransaction[':RtiTransactionId'].Tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdRtiTransactionRtiTransactionIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['RtiTransaction'][':RtiTransactionId']['Tags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdRtiTransactionRtiTransactionIdTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdRtiTransactionRtiTransactionIdTagsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdRtiTransactionsQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['RtiTransactions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/RtiTransactions', keyArgs] as const
}

export function getEmployerEmployerIdRtiTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['RtiTransactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['RtiTransactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['RtiTransactions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdRtiTransactionsQueryKey>
  >({
    queryKey: getEmployerEmployerIdRtiTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].RtiTransactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdRtiTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['RtiTransactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Employer)[':EmployerId']['RtiTransactions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Employer)[':EmployerId']['RtiTransactions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdRtiTransactionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdRtiTransactionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdRtiTransactionsSummaryQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransactions']['Summary']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/RtiTransactions/Summary', keyArgs] as const
}

export function getEmployerEmployerIdRtiTransactionsSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['RtiTransactions']['Summary']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransactions']['Summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['RtiTransactions']['Summary']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdRtiTransactionsSummaryQueryKey>
  >({
    queryKey: getEmployerEmployerIdRtiTransactionsSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].RtiTransactions.Summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdRtiTransactionsSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['RtiTransactions']['Summary']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransactions']['Summary']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['RtiTransactions']['Summary']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdRtiTransactionsSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdRtiTransactionsSummaryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdRtiTransactionsTagTagIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransactions']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/RtiTransactions/Tag/:TagId', keyArgs] as const
}

export function getEmployerEmployerIdRtiTransactionsTagTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['RtiTransactions']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransactions']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['RtiTransactions']['Tag'][':TagId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdRtiTransactionsTagTagIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdRtiTransactionsTagTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].RtiTransactions.Tag[':TagId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdRtiTransactionsTagTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['RtiTransactions']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransactions']['Tag'][':TagId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['RtiTransactions']['Tag'][':TagId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdRtiTransactionsTagTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdRtiTransactionsTagTagIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdRtiTransactionsTagsQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransactions']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/RtiTransactions/Tags', keyArgs] as const
}

export function getEmployerEmployerIdRtiTransactionsTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['RtiTransactions']['Tags']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransactions']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['RtiTransactions']['Tags']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdRtiTransactionsTagsQueryKey>
  >({
    queryKey: getEmployerEmployerIdRtiTransactionsTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].RtiTransactions.Tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdRtiTransactionsTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['RtiTransactions']['Tags']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['RtiTransactions']['Tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['RtiTransactions']['Tags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdRtiTransactionsTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdRtiTransactionsTagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdSecretSecretIdQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Secret'][':SecretId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Secret/:SecretId', keyArgs] as const
}

export function getEmployerEmployerIdSecretSecretIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Secret'][':SecretId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Secret'][':SecretId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['Secret'][':SecretId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdSecretSecretIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdSecretSecretIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Secret[':SecretId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdSecretSecretId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Secret'][':SecretId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Secret'][':SecretId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Employer)[':EmployerId']['Secret'][':SecretId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdSecretSecretIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdSecretSecretIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutEmployerEmployerIdSecretSecretIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/Secret/:SecretId', 'PUT'] as const
}

export function getPutEmployerEmployerIdSecretSecretIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['Secret'][':SecretId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employer)[':EmployerId']['Secret'][':SecretId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEmployerEmployerIdSecretSecretIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['Secret'][':SecretId']['$put']
      >,
    ) {
      return parseResponse(client.Employer[':EmployerId'].Secret[':SecretId'].$put(args, options))
    },
  })
}

export function injectPutEmployerEmployerIdSecretSecretId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Employer)[':EmployerId']['Secret'][':SecretId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Employer)[':EmployerId']['Secret'][':SecretId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEmployerEmployerIdSecretSecretIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdSecretSecretIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/Secret/:SecretId', 'DELETE'] as const
}

export function getDeleteEmployerEmployerIdSecretSecretIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId']['Secret'][':SecretId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Employer)[':EmployerId']['Secret'][':SecretId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdSecretSecretIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['Secret'][':SecretId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].Secret[':SecretId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdSecretSecretId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Employer)[':EmployerId']['Secret'][':SecretId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.Employer)[':EmployerId']['Secret'][':SecretId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEmployerEmployerIdSecretSecretIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdSecretsQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Secrets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Secrets', keyArgs] as const
}

export function getEmployerEmployerIdSecretsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Secrets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Secrets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Secrets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdSecretsQueryKey>
  >({
    queryKey: getEmployerEmployerIdSecretsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Secrets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdSecrets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Secrets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Employer)[':EmployerId']['Secrets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Secrets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdSecretsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdSecretsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostEmployerEmployerIdSecretsMutationKey() {
  return ['Employer', '/Employer/:EmployerId/Secrets', 'POST'] as const
}

export function getPostEmployerEmployerIdSecretsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Secrets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employer)[':EmployerId']['Secrets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmployerEmployerIdSecretsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Employer)[':EmployerId']['Secrets']['$post']>,
    ) {
      return parseResponse(client.Employer[':EmployerId'].Secrets.$post(args, options))
    },
  })
}

export function injectPostEmployerEmployerIdSecrets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Secrets']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Employer)[':EmployerId']['Secrets']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmployerEmployerIdSecretsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdSubContractorSubContractorIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/SubContractor/:SubContractorId', keyArgs] as const
}

export function getEmployerEmployerIdSubContractorSubContractorIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdSubContractorSubContractorIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdSubContractorSubContractorIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdSubContractorSubContractorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdSubContractorSubContractorIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdSubContractorSubContractorIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutEmployerEmployerIdSubContractorSubContractorIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/SubContractor/:SubContractorId', 'PUT'] as const
}

export function getPutEmployerEmployerIdSubContractorSubContractorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutEmployerEmployerIdSubContractorSubContractorIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$put']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].$put(args, options),
      )
    },
  })
}

export function injectPutEmployerEmployerIdSubContractorSubContractorId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEmployerEmployerIdSubContractorSubContractorIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdSubContractorSubContractorIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/SubContractor/:SubContractorId', 'DELETE'] as const
}

export function getDeleteEmployerEmployerIdSubContractorSubContractorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdSubContractorSubContractorIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdSubContractorSubContractorId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEmployerEmployerIdSubContractorSubContractorIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchEmployerEmployerIdSubContractorSubContractorIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/SubContractor/:SubContractorId', 'PATCH'] as const
}

export function getPatchEmployerEmployerIdSubContractorSubContractorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchEmployerEmployerIdSubContractorSubContractorIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$patch']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].$patch(args, options),
      )
    },
  })
}

export function injectPatchEmployerEmployerIdSubContractorSubContractorId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchEmployerEmployerIdSubContractorSubContractorIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisInstruction/:CisInstructionId',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdQueryKey
    >
  >({
    queryKey:
      getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstruction[
          ':CisInstructionId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisInstruction/:CisInstructionId',
    'PUT',
  ] as const
}

export function getPutEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$put']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstruction[
          ':CisInstructionId'
        ].$put(args, options),
      )
    },
  })
}

export function injectPutEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisInstruction/:CisInstructionId',
    'DELETE',
  ] as const
}

export function getDeleteEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstruction[
          ':CisInstructionId'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisInstruction/:CisInstructionId',
    'PATCH',
  ] as const
}

export function getPatchEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$patch']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstruction[
          ':CisInstructionId'
        ].$patch(args, options),
      )
    },
  })
}

export function injectPatchEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisInstruction/:CisInstructionId/Tag/:TagId',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tag'][':TagId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdQueryKey
    >
  >({
    queryKey:
      getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstruction[
          ':CisInstructionId'
        ].Tag[':TagId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tag'][':TagId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tag'][':TagId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisInstruction/:CisInstructionId/Tag/:TagId',
    'PUT',
  ] as const
}

export function getPutEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tag'][':TagId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tag'][':TagId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tag'][':TagId']['$put']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstruction[
          ':CisInstructionId'
        ].Tag[':TagId'].$put(args, options),
      )
    },
  })
}

export function injectPutEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tag'][':TagId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tag'][':TagId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisInstruction/:CisInstructionId/Tag/:TagId',
    'DELETE',
  ] as const
}

export function getDeleteEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tag'][':TagId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tag'][':TagId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tag'][':TagId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstruction[
          ':CisInstructionId'
        ].Tag[':TagId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tag'][':TagId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tag'][':TagId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagsQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisInstruction/:CisInstructionId/Tags',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagsQueryKey
    >
  >({
    queryKey:
      getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstruction[
          ':CisInstructionId'
        ].Tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstruction'][':CisInstructionId']['Tags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisInstructions',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsQueryKey>
  >({
    queryKey: getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstructions.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectEmployerEmployerIdSubContractorSubContractorIdCisInstructions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostEmployerEmployerIdSubContractorSubContractorIdCisInstructionsMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisInstructions',
    'POST',
  ] as const
}

export function getPostEmployerEmployerIdSubContractorSubContractorIdCisInstructionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostEmployerEmployerIdSubContractorSubContractorIdCisInstructionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['$post']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstructions.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostEmployerEmployerIdSubContractorSubContractorIdCisInstructions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostEmployerEmployerIdSubContractorSubContractorIdCisInstructionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTagTagIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisInstructions/Tag/:TagId',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTagTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['Tag'][':TagId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTagTagIdQueryKey
    >
  >({
    queryKey:
      getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTagTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstructions.Tag[
          ':TagId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTagTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['Tag'][':TagId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['Tag'][':TagId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTagTagIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTagTagIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTagsQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisInstructions/Tags',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['Tags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTagsQueryKey>
  >({
    queryKey: getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisInstructions.Tags.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['Tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisInstructions']['Tags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTagsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTagsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisLine/:CisLineId',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisLine[':CisLineId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisLine/:CisLineId',
    'DELETE',
  ] as const
}

export function getDeleteEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisLine[
          ':CisLineId'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisLine/:CisLineId/Tag/:TagId',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tag'][':TagId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdQueryKey
    >
  >({
    queryKey:
      getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisLine[':CisLineId'].Tag[
          ':TagId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tag'][':TagId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tag'][':TagId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisLine/:CisLineId/Tag/:TagId',
    'PUT',
  ] as const
}

export function getPutEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tag'][':TagId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tag'][':TagId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tag'][':TagId']['$put']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisLine[':CisLineId'].Tag[
          ':TagId'
        ].$put(args, options),
      )
    },
  })
}

export function injectPutEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tag'][':TagId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tag'][':TagId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisLine/:CisLineId/Tag/:TagId',
    'DELETE',
  ] as const
}

export function getDeleteEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tag'][':TagId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tag'][':TagId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tag'][':TagId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisLine[':CisLineId'].Tag[
          ':TagId'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tag'][':TagId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tag'][':TagId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagsQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisLine/:CisLineId/Tags',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagsQueryKey>
  >({
    queryKey: getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisLine[
          ':CisLineId'
        ].Tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLine'][':CisLineId']['Tags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdSubContractorSubContractorIdCisLinesQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisLines',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdSubContractorSubContractorIdCisLinesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdSubContractorSubContractorIdCisLinesQueryKey>
  >({
    queryKey: getEmployerEmployerIdSubContractorSubContractorIdCisLinesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisLines.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdSubContractorSubContractorIdCisLines<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdSubContractorSubContractorIdCisLinesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdSubContractorSubContractorIdCisLinesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdSubContractorSubContractorIdCisLinesTagTagIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisLines/Tag/:TagId',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdSubContractorSubContractorIdCisLinesTagTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['Tag'][':TagId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdSubContractorSubContractorIdCisLinesTagTagIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdSubContractorSubContractorIdCisLinesTagTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisLines.Tag[
          ':TagId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmployerEmployerIdSubContractorSubContractorIdCisLinesTagTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['Tag'][':TagId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['Tag'][':TagId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdSubContractorSubContractorIdCisLinesTagTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdSubContractorSubContractorIdCisLinesTagTagIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdSubContractorSubContractorIdCisLinesTagsQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/CisLines/Tags',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdSubContractorSubContractorIdCisLinesTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['Tags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdSubContractorSubContractorIdCisLinesTagsQueryKey>
  >({
    queryKey: getEmployerEmployerIdSubContractorSubContractorIdCisLinesTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].CisLines.Tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdSubContractorSubContractorIdCisLinesTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['Tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['CisLines']['Tags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdSubContractorSubContractorIdCisLinesTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdSubContractorSubContractorIdCisLinesTagsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdSubContractorSubContractorIdJournalLinesQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['JournalLines']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/JournalLines',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdSubContractorSubContractorIdJournalLinesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['JournalLines']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['JournalLines']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['JournalLines']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdSubContractorSubContractorIdJournalLinesQueryKey>
  >({
    queryKey: getEmployerEmployerIdSubContractorSubContractorIdJournalLinesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].JournalLines.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdSubContractorSubContractorIdJournalLines<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['JournalLines']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['JournalLines']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['JournalLines']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdSubContractorSubContractorIdJournalLinesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdSubContractorSubContractorIdJournalLinesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdSubContractorSubContractorIdRevisionRevisionNumberQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revision'][':RevisionNumber']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/Revision/:RevisionNumber',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdSubContractorSubContractorIdRevisionRevisionNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revision'][':RevisionNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revision'][':RevisionNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revision'][':RevisionNumber']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getEmployerEmployerIdSubContractorSubContractorIdRevisionRevisionNumberQueryKey
    >
  >({
    queryKey: getEmployerEmployerIdSubContractorSubContractorIdRevisionRevisionNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].Revision[
          ':RevisionNumber'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmployerEmployerIdSubContractorSubContractorIdRevisionRevisionNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revision'][':RevisionNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revision'][':RevisionNumber']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revision'][':RevisionNumber']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getEmployerEmployerIdSubContractorSubContractorIdRevisionRevisionNumberQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdSubContractorSubContractorIdRevisionRevisionNumberQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdSubContractorSubContractorIdRevisionRevisionNumberMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/Revision/:RevisionNumber',
    'DELETE',
  ] as const
}

export function getDeleteEmployerEmployerIdSubContractorSubContractorIdRevisionRevisionNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revision'][':RevisionNumber']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revision'][':RevisionNumber']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteEmployerEmployerIdSubContractorSubContractorIdRevisionRevisionNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revision'][':RevisionNumber']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].Revision[
          ':RevisionNumber'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdSubContractorSubContractorIdRevisionRevisionNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revision'][':RevisionNumber']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revision'][':RevisionNumber']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployerEmployerIdSubContractorSubContractorIdRevisionRevisionNumberMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdSubContractorSubContractorIdRevisionsQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revisions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/Revisions',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdSubContractorSubContractorIdRevisionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revisions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revisions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdSubContractorSubContractorIdRevisionsQueryKey>
  >({
    queryKey: getEmployerEmployerIdSubContractorSubContractorIdRevisionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].Revisions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdSubContractorSubContractorIdRevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revisions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revisions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Revisions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdSubContractorSubContractorIdRevisionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdSubContractorSubContractorIdRevisionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdSubContractorSubContractorIdTagTagIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/Tag/:TagId',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdSubContractorSubContractorIdTagTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdSubContractorSubContractorIdTagTagIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdSubContractorSubContractorIdTagTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].Tag[':TagId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdSubContractorSubContractorIdTagTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdSubContractorSubContractorIdTagTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdSubContractorSubContractorIdTagTagIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutEmployerEmployerIdSubContractorSubContractorIdTagTagIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/Tag/:TagId',
    'PUT',
  ] as const
}

export function getPutEmployerEmployerIdSubContractorSubContractorIdTagTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutEmployerEmployerIdSubContractorSubContractorIdTagTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId']['$put']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].Tag[':TagId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutEmployerEmployerIdSubContractorSubContractorIdTagTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutEmployerEmployerIdSubContractorSubContractorIdTagTagIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdSubContractorSubContractorIdTagTagIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/Tag/:TagId',
    'DELETE',
  ] as const
}

export function getDeleteEmployerEmployerIdSubContractorSubContractorIdTagTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdSubContractorSubContractorIdTagTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].Tag[':TagId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdSubContractorSubContractorIdTagTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployerEmployerIdSubContractorSubContractorIdTagTagIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdSubContractorSubContractorIdTagTagIdEffectiveDateQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/Tag/:TagId/:EffectiveDate',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdSubContractorSubContractorIdTagTagIdEffectiveDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId'][':EffectiveDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId'][':EffectiveDate']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getEmployerEmployerIdSubContractorSubContractorIdTagTagIdEffectiveDateQueryKey
    >
  >({
    queryKey: getEmployerEmployerIdSubContractorSubContractorIdTagTagIdEffectiveDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].Tag[':TagId'][
          ':EffectiveDate'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmployerEmployerIdSubContractorSubContractorIdTagTagIdEffectiveDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId'][':EffectiveDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId'][':EffectiveDate']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tag'][':TagId'][':EffectiveDate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getEmployerEmployerIdSubContractorSubContractorIdTagTagIdEffectiveDateQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdSubContractorSubContractorIdTagTagIdEffectiveDateQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdSubContractorSubContractorIdTagsQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/SubContractor/:SubContractorId/Tags', keyArgs] as const
}

export function getEmployerEmployerIdSubContractorSubContractorIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdSubContractorSubContractorIdTagsQueryKey>
  >({
    queryKey: getEmployerEmployerIdSubContractorSubContractorIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].Tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdSubContractorSubContractorIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdSubContractorSubContractorIdTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdSubContractorSubContractorIdTagsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdSubContractorSubContractorIdTagsEffectiveDateQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tags'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/Tags/:EffectiveDate',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdSubContractorSubContractorIdTagsEffectiveDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tags'][':EffectiveDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tags'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tags'][':EffectiveDate']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdSubContractorSubContractorIdTagsEffectiveDateQueryKey>
  >({
    queryKey: getEmployerEmployerIdSubContractorSubContractorIdTagsEffectiveDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'].Tags[
          ':EffectiveDate'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmployerEmployerIdSubContractorSubContractorIdTagsEffectiveDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tags'][':EffectiveDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tags'][':EffectiveDate']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId']['Tags'][':EffectiveDate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getEmployerEmployerIdSubContractorSubContractorIdTagsEffectiveDateQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdSubContractorSubContractorIdTagsEffectiveDateQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdSubContractorSubContractorIdEffectiveDateQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/:EffectiveDate',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdSubContractorSubContractorIdEffectiveDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId'][':EffectiveDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId'][':EffectiveDate']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdSubContractorSubContractorIdEffectiveDateQueryKey>
  >({
    queryKey: getEmployerEmployerIdSubContractorSubContractorIdEffectiveDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'][':EffectiveDate'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectEmployerEmployerIdSubContractorSubContractorIdEffectiveDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId'][':EffectiveDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId'][':EffectiveDate']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId'][':EffectiveDate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdSubContractorSubContractorIdEffectiveDateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdSubContractorSubContractorIdEffectiveDateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdSubContractorSubContractorIdEffectiveDateMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/SubContractor/:SubContractorId/:EffectiveDate',
    'DELETE',
  ] as const
}

export function getDeleteEmployerEmployerIdSubContractorSubContractorIdEffectiveDateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId'][':EffectiveDate']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId'][':EffectiveDate']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdSubContractorSubContractorIdEffectiveDateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId'][':EffectiveDate']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractor[':SubContractorId'][':EffectiveDate'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdSubContractorSubContractorIdEffectiveDate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId'][':EffectiveDate']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['SubContractor'][':SubContractorId'][':EffectiveDate']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployerEmployerIdSubContractorSubContractorIdEffectiveDateMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdSubContractorsQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['SubContractors']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/SubContractors', keyArgs] as const
}

export function getEmployerEmployerIdSubContractorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['SubContractors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['SubContractors']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['SubContractors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdSubContractorsQueryKey>
  >({
    queryKey: getEmployerEmployerIdSubContractorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdSubContractors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['SubContractors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Employer)[':EmployerId']['SubContractors']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['SubContractors']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdSubContractorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdSubContractorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostEmployerEmployerIdSubContractorsMutationKey() {
  return ['Employer', '/Employer/:EmployerId/SubContractors', 'POST'] as const
}

export function getPostEmployerEmployerIdSubContractorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['SubContractors']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employer)[':EmployerId']['SubContractors']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostEmployerEmployerIdSubContractorsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Employer)[':EmployerId']['SubContractors']['$post']>,
    ) {
      return parseResponse(client.Employer[':EmployerId'].SubContractors.$post(args, options))
    },
  })
}

export function injectPostEmployerEmployerIdSubContractors<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Employer)[':EmployerId']['SubContractors']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Employer)[':EmployerId']['SubContractors']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmployerEmployerIdSubContractorsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdSubContractorsTagTagIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractors']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/SubContractors/Tag/:TagId', keyArgs] as const
}

export function getEmployerEmployerIdSubContractorsTagTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractors']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractors']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractors']['Tag'][':TagId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdSubContractorsTagTagIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdSubContractorsTagTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractors.Tag[':TagId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdSubContractorsTagTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractors']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractors']['Tag'][':TagId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractors']['Tag'][':TagId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdSubContractorsTagTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdSubContractorsTagTagIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdSubContractorsTagsQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['SubContractors']['Tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/SubContractors/Tags', keyArgs] as const
}

export function getEmployerEmployerIdSubContractorsTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['SubContractors']['Tags']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['SubContractors']['Tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['SubContractors']['Tags']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdSubContractorsTagsQueryKey>
  >({
    queryKey: getEmployerEmployerIdSubContractorsTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractors.Tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdSubContractorsTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['SubContractors']['Tags']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractors']['Tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractors']['Tags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdSubContractorsTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdSubContractorsTagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdSubContractorsEffectiveDateQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractors'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/SubContractors/:EffectiveDate', keyArgs] as const
}

export function getEmployerEmployerIdSubContractorsEffectiveDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractors'][':EffectiveDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractors'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['SubContractors'][':EffectiveDate']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdSubContractorsEffectiveDateQueryKey>
  >({
    queryKey: getEmployerEmployerIdSubContractorsEffectiveDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].SubContractors[':EffectiveDate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdSubContractorsEffectiveDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['SubContractors'][':EffectiveDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['SubContractors'][':EffectiveDate']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['SubContractors'][':EffectiveDate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdSubContractorsEffectiveDateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdSubContractorsEffectiveDateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdSummaryQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Summary']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Summary', keyArgs] as const
}

export function getEmployerEmployerIdSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Summary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdSummaryQueryKey>
  >({
    queryKey: getEmployerEmployerIdSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Employer)[':EmployerId']['Summary']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Summary']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdSummaryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdTagTagIdQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Tag'][':TagId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Tag/:TagId', keyArgs] as const
}

export function getEmployerEmployerIdTagTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Tag'][':TagId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Tag'][':TagId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Tag'][':TagId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdTagTagIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdTagTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Tag[':TagId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdTagTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Tag'][':TagId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Employer)[':EmployerId']['Tag'][':TagId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Tag'][':TagId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdTagTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdTagTagIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutEmployerEmployerIdTagTagIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/Tag/:TagId', 'PUT'] as const
}

export function getPutEmployerEmployerIdTagTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Tag'][':TagId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employer)[':EmployerId']['Tag'][':TagId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutEmployerEmployerIdTagTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Employer)[':EmployerId']['Tag'][':TagId']['$put']>,
    ) {
      return parseResponse(client.Employer[':EmployerId'].Tag[':TagId'].$put(args, options))
    },
  })
}

export function injectPutEmployerEmployerIdTagTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Tag'][':TagId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Employer)[':EmployerId']['Tag'][':TagId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEmployerEmployerIdTagTagIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdTagTagIdMutationKey() {
  return ['Employer', '/Employer/:EmployerId/Tag/:TagId', 'DELETE'] as const
}

export function getDeleteEmployerEmployerIdTagTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Tag'][':TagId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Employer)[':EmployerId']['Tag'][':TagId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdTagTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Employer)[':EmployerId']['Tag'][':TagId']['$delete']>,
    ) {
      return parseResponse(client.Employer[':EmployerId'].Tag[':TagId'].$delete(args, options))
    },
  })
}

export function injectDeleteEmployerEmployerIdTagTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Employer)[':EmployerId']['Tag'][':TagId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Employer)[':EmployerId']['Tag'][':TagId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEmployerEmployerIdTagTagIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdTagTagIdEffectiveDateQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Tag'][':TagId'][':EffectiveDate']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Tag/:TagId/:EffectiveDate', keyArgs] as const
}

export function getEmployerEmployerIdTagTagIdEffectiveDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Tag'][':TagId'][':EffectiveDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['Tag'][':TagId'][':EffectiveDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['Tag'][':TagId'][':EffectiveDate']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdTagTagIdEffectiveDateQueryKey>
  >({
    queryKey: getEmployerEmployerIdTagTagIdEffectiveDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Tag[':TagId'][':EffectiveDate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdTagTagIdEffectiveDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['Tag'][':TagId'][':EffectiveDate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Tag'][':TagId'][':EffectiveDate']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Tag'][':TagId'][':EffectiveDate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdTagTagIdEffectiveDateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdTagTagIdEffectiveDateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdTagsQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Tags', keyArgs] as const
}

export function getEmployerEmployerIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdTagsQueryKey>
  >({
    queryKey: getEmployerEmployerIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Employer)[':EmployerId']['Tags']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Employer)[':EmployerId']['Tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdTagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdTagsEffectiveDateQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Tags'][':EffectiveDate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/Tags/:EffectiveDate', keyArgs] as const
}

export function getEmployerEmployerIdTagsEffectiveDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['Tags'][':EffectiveDate']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['Tags'][':EffectiveDate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['Tags'][':EffectiveDate']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdTagsEffectiveDateQueryKey>
  >({
    queryKey: getEmployerEmployerIdTagsEffectiveDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].Tags[':EffectiveDate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdTagsEffectiveDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['Tags'][':EffectiveDate']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['Tags'][':EffectiveDate']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['Tags'][':EffectiveDate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdTagsEffectiveDateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdTagsEffectiveDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/ThirdPartyTransaction/:ThirdPartyTransactionId',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].ThirdPartyTransaction[':ThirdPartyTransactionId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/ThirdPartyTransaction/:ThirdPartyTransactionId',
    'DELETE',
  ] as const
}

export function getDeleteEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].ThirdPartyTransaction[':ThirdPartyTransactionId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/ThirdPartyTransaction/:ThirdPartyTransactionId/Tag/:TagId',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tag'][':TagId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdQueryKey
    >
  >({
    queryKey:
      getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].ThirdPartyTransaction[':ThirdPartyTransactionId'].Tag[
          ':TagId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tag'][':TagId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tag'][':TagId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/ThirdPartyTransaction/:ThirdPartyTransactionId/Tag/:TagId',
    'PUT',
  ] as const
}

export function getPutEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tag'][':TagId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tag'][':TagId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tag'][':TagId']['$put']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].ThirdPartyTransaction[':ThirdPartyTransactionId'].Tag[
          ':TagId'
        ].$put(args, options),
      )
    },
  })
}

export function injectPutEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tag'][':TagId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tag'][':TagId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdMutationKey() {
  return [
    'Employer',
    '/Employer/:EmployerId/ThirdPartyTransaction/:ThirdPartyTransactionId/Tag/:TagId',
    'DELETE',
  ] as const
}

export function getDeleteEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tag'][':TagId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tag'][':TagId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tag'][':TagId']['$delete']
      >,
    ) {
      return parseResponse(
        client.Employer[':EmployerId'].ThirdPartyTransaction[':ThirdPartyTransactionId'].Tag[
          ':TagId'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tag'][':TagId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tag'][':TagId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagsQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'Employer',
    '/Employer/:EmployerId/ThirdPartyTransaction/:ThirdPartyTransactionId/Tags',
    keyArgs,
  ] as const
}

export function getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagsQueryKey>
  >({
    queryKey: getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].ThirdPartyTransaction[':ThirdPartyTransactionId'].Tags.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['ThirdPartyTransaction'][':ThirdPartyTransactionId']['Tags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdThirdPartyTransactionsQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/ThirdPartyTransactions', keyArgs] as const
}

export function getEmployerEmployerIdThirdPartyTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdThirdPartyTransactionsQueryKey>
  >({
    queryKey: getEmployerEmployerIdThirdPartyTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].ThirdPartyTransactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdThirdPartyTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdThirdPartyTransactionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdThirdPartyTransactionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdThirdPartyTransactionsTagTagIdQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['Tag'][':TagId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/ThirdPartyTransactions/Tag/:TagId', keyArgs] as const
}

export function getEmployerEmployerIdThirdPartyTransactionsTagTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['Tag'][':TagId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['Tag'][':TagId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdThirdPartyTransactionsTagTagIdQueryKey>
  >({
    queryKey: getEmployerEmployerIdThirdPartyTransactionsTagTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].ThirdPartyTransactions.Tag[':TagId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdThirdPartyTransactionsTagTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['Tag'][':TagId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['Tag'][':TagId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['Tag'][':TagId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdThirdPartyTransactionsTagTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdThirdPartyTransactionsTagTagIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdThirdPartyTransactionsTagsQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['Tags']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/ThirdPartyTransactions/Tags', keyArgs] as const
}

export function getEmployerEmployerIdThirdPartyTransactionsTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['Tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['Tags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdThirdPartyTransactionsTagsQueryKey>
  >({
    queryKey: getEmployerEmployerIdThirdPartyTransactionsTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'].ThirdPartyTransactions.Tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdThirdPartyTransactionsTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['Tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['Tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId']['ThirdPartyTransactions']['Tags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdThirdPartyTransactionsTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdThirdPartyTransactionsTagsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEffectiveDateQueryKey(
  args: InferRequestType<(typeof client.Employer)[':EmployerId'][':EffectiveDate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/:EffectiveDate', keyArgs] as const
}

export function getEmployerEmployerIdEffectiveDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId'][':EffectiveDate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employer)[':EmployerId'][':EffectiveDate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employer)[':EmployerId'][':EffectiveDate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEffectiveDateQueryKey>
  >({
    queryKey: getEmployerEmployerIdEffectiveDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'][':EffectiveDate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdEffectiveDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employer)[':EmployerId'][':EffectiveDate']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Employer)[':EmployerId'][':EffectiveDate']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Employer)[':EmployerId'][':EffectiveDate']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEffectiveDateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEffectiveDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteEmployerEmployerIdEffectiveDateMutationKey() {
  return ['Employer', '/Employer/:EmployerId/:EffectiveDate', 'DELETE'] as const
}

export function getDeleteEmployerEmployerIdEffectiveDateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.Employer)[':EmployerId'][':EffectiveDate']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Employer)[':EmployerId'][':EffectiveDate']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEmployerEmployerIdEffectiveDateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Employer)[':EmployerId'][':EffectiveDate']['$delete']>,
    ) {
      return parseResponse(client.Employer[':EmployerId'][':EffectiveDate'].$delete(args, options))
    },
  })
}

export function injectDeleteEmployerEmployerIdEffectiveDate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.Employer)[':EmployerId'][':EffectiveDate']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.Employer)[':EmployerId'][':EffectiveDate']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteEmployerEmployerIdEffectiveDateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployerEmployerIdEffectiveDateSummaryQueryKey(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId'][':EffectiveDate']['Summary']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['Employer', '/Employer/:EmployerId/:EffectiveDate/Summary', keyArgs] as const
}

export function getEmployerEmployerIdEffectiveDateSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId'][':EffectiveDate']['Summary']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.Employer)[':EmployerId'][':EffectiveDate']['Summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Employer)[':EmployerId'][':EffectiveDate']['Summary']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployerEmployerIdEffectiveDateSummaryQueryKey>
  >({
    queryKey: getEmployerEmployerIdEffectiveDateSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employer[':EmployerId'][':EffectiveDate'].Summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployerEmployerIdEffectiveDateSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.Employer)[':EmployerId'][':EffectiveDate']['Summary']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Employer)[':EmployerId'][':EffectiveDate']['Summary']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.Employer)[':EmployerId'][':EffectiveDate']['Summary']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployerEmployerIdEffectiveDateSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployerEmployerIdEffectiveDateSummaryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getEmployersQueryKey(args: InferRequestType<typeof client.Employers.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Employers', '/Employers', keyArgs] as const
}

export function getEmployersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Employers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEmployersQueryKey>
  >({
    queryKey: getEmployersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmployers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Employers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEmployersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEmployersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostEmployersMutationKey() {
  return ['Employers', '/Employers', 'POST'] as const
}

export function getPostEmployersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employers.$post>>>>>,
    TError,
    InferRequestType<typeof client.Employers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEmployersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Employers.$post>) {
      return parseResponse(client.Employers.$post(args, options))
    },
  })
}

export function injectPostEmployers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.Employers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEmployersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getEmployersSummaryQueryKey(
  args: InferRequestType<typeof client.Employers.Summary.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employers', '/Employers/Summary', keyArgs] as const
}

export function getEmployersSummaryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employers.Summary.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Employers.Summary.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employers.Summary.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEmployersSummaryQueryKey>
  >({
    queryKey: getEmployersSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employers.Summary.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmployersSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employers.Summary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Employers.Summary.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Employers.Summary.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployersSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEmployersSummaryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEmployersTagTagIdQueryKey(
  args: InferRequestType<(typeof client.Employers.Tag)[':TagId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employers', '/Employers/Tag/:TagId', keyArgs] as const
}

export function getEmployersTagTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Employers.Tag)[':TagId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employers.Tag)[':TagId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Employers.Tag)[':TagId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployersTagTagIdQueryKey>
  >({
    queryKey: getEmployersTagTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employers.Tag[':TagId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployersTagTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Employers.Tag)[':TagId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Employers.Tag)[':TagId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Employers.Tag)[':TagId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployersTagTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEmployersTagTagIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEmployersTagsQueryKey(
  args: InferRequestType<typeof client.Employers.Tags.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employers', '/Employers/Tags', keyArgs] as const
}

export function getEmployersTagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employers.Tags.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Employers.Tags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employers.Tags.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEmployersTagsQueryKey>
  >({
    queryKey: getEmployersTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employers.Tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEmployersTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employers.Tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Employers.Tags.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Employers.Tags.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEmployersTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEmployersTagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEmployersEffectiveDateQueryKey(
  args: InferRequestType<(typeof client.Employers)[':EffectiveDate']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employers', '/Employers/:EffectiveDate', keyArgs] as const
}

export function getEmployersEffectiveDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Employers)[':EffectiveDate']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employers)[':EffectiveDate']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employers)[':EffectiveDate']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployersEffectiveDateQueryKey>
  >({
    queryKey: getEmployersEffectiveDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employers[':EffectiveDate'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployersEffectiveDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Employers)[':EffectiveDate']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Employers)[':EffectiveDate']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Employers)[':EffectiveDate']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployersEffectiveDateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployersEffectiveDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getEmployersEffectiveDateSummaryQueryKey(
  args: InferRequestType<(typeof client.Employers)[':EffectiveDate']['Summary']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Employers', '/Employers/:EffectiveDate/Summary', keyArgs] as const
}

export function getEmployersEffectiveDateSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employers)[':EffectiveDate']['Summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Employers)[':EffectiveDate']['Summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Employers)[':EffectiveDate']['Summary']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEmployersEffectiveDateSummaryQueryKey>
  >({
    queryKey: getEmployersEffectiveDateSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Employers[':EffectiveDate'].Summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEmployersEffectiveDateSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Employers)[':EffectiveDate']['Summary']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Employers)[':EffectiveDate']['Summary']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Employers)[':EffectiveDate']['Summary']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmployersEffectiveDateSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEmployersEffectiveDateSummaryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getHealthcheckQueryKey() {
  return ['Healthcheck', '/Healthcheck'] as const
}

export function getHealthcheckQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Healthcheck.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Healthcheck.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthcheckQueryKey>
  >({
    queryKey: getHealthcheckQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.Healthcheck.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectHealthcheck<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Healthcheck.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Healthcheck.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHealthcheckQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHealthcheckQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getJobsBatchQueryKey(args: InferRequestType<typeof client.Jobs.Batch.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/Batch', keyArgs] as const
}

export function getJobsBatchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Batch.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Jobs.Batch.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Batch.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJobsBatchQueryKey>
  >({
    queryKey: getJobsBatchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Jobs.Batch.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectJobsBatch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Batch.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Jobs.Batch.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Batch.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getJobsBatchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJobsBatchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostJobsBatchMutationKey() {
  return ['Jobs', '/Jobs/Batch', 'POST'] as const
}

export function getPostJobsBatchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Batch.$post>>>>>,
    TError,
    InferRequestType<typeof client.Jobs.Batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostJobsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Jobs.Batch.$post>) {
      return parseResponse(client.Jobs.Batch.$post(args, options))
    },
  })
}

export function injectPostJobsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Batch.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.Jobs.Batch.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostJobsBatchMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteJobsBatchJobIdMutationKey() {
  return ['Jobs', '/Jobs/Batch/:JobId', 'DELETE'] as const
}

export function getDeleteJobsBatchJobIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Jobs.Batch)[':JobId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.Jobs.Batch)[':JobId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteJobsBatchJobIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Jobs.Batch)[':JobId']['$delete']>) {
      return parseResponse(client.Jobs.Batch[':JobId'].$delete(args, options))
    },
  })
}

export function injectDeleteJobsBatchJobId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Jobs.Batch)[':JobId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Jobs.Batch)[':JobId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteJobsBatchJobIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getJobsBatchJobIdInfoQueryKey(
  args: InferRequestType<(typeof client.Jobs.Batch)[':JobId']['Info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/Batch/:JobId/Info', keyArgs] as const
}

export function getJobsBatchJobIdInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Jobs.Batch)[':JobId']['Info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Jobs.Batch)[':JobId']['Info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Jobs.Batch)[':JobId']['Info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsBatchJobIdInfoQueryKey>
  >({
    queryKey: getJobsBatchJobIdInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Jobs.Batch[':JobId'].Info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectJobsBatchJobIdInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Jobs.Batch)[':JobId']['Info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Jobs.Batch)[':JobId']['Info']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Jobs.Batch)[':JobId']['Info']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobsBatchJobIdInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJobsBatchJobIdInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getJobsBatchJobIdProgressQueryKey(
  args: InferRequestType<(typeof client.Jobs.Batch)[':JobId']['Progress']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/Batch/:JobId/Progress', keyArgs] as const
}

export function getJobsBatchJobIdProgressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Jobs.Batch)[':JobId']['Progress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Jobs.Batch)[':JobId']['Progress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Jobs.Batch)[':JobId']['Progress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsBatchJobIdProgressQueryKey>
  >({
    queryKey: getJobsBatchJobIdProgressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Jobs.Batch[':JobId'].Progress.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectJobsBatchJobIdProgress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Jobs.Batch)[':JobId']['Progress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Jobs.Batch)[':JobId']['Progress']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Jobs.Batch)[':JobId']['Progress']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobsBatchJobIdProgressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getJobsBatchJobIdProgressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getJobsBatchJobIdStatusQueryKey(
  args: InferRequestType<(typeof client.Jobs.Batch)[':JobId']['Status']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/Batch/:JobId/Status', keyArgs] as const
}

export function getJobsBatchJobIdStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Jobs.Batch)[':JobId']['Status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Jobs.Batch)[':JobId']['Status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Jobs.Batch)[':JobId']['Status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsBatchJobIdStatusQueryKey>
  >({
    queryKey: getJobsBatchJobIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Jobs.Batch[':JobId'].Status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectJobsBatchJobIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Jobs.Batch)[':JobId']['Status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Jobs.Batch)[':JobId']['Status']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Jobs.Batch)[':JobId']['Status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobsBatchJobIdStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getJobsBatchJobIdStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getJobsCisQueryKey(args: InferRequestType<typeof client.Jobs.Cis.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/Cis', keyArgs] as const
}

export function getJobsCisQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Cis.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Jobs.Cis.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Cis.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJobsCisQueryKey>
  >({
    queryKey: getJobsCisQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Jobs.Cis.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectJobsCis<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Cis.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Jobs.Cis.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Cis.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getJobsCisQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJobsCisQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostJobsCisMutationKey() {
  return ['Jobs', '/Jobs/Cis', 'POST'] as const
}

export function getPostJobsCisMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Cis.$post>>>>>,
    TError,
    InferRequestType<typeof client.Jobs.Cis.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostJobsCisMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Jobs.Cis.$post>) {
      return parseResponse(client.Jobs.Cis.$post(args, options))
    },
  })
}

export function injectPostJobsCis<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Cis.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.Jobs.Cis.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostJobsCisMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteJobsCisJobIdMutationKey() {
  return ['Jobs', '/Jobs/Cis/:JobId', 'DELETE'] as const
}

export function getDeleteJobsCisJobIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Jobs.Cis)[':JobId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.Jobs.Cis)[':JobId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteJobsCisJobIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Jobs.Cis)[':JobId']['$delete']>) {
      return parseResponse(client.Jobs.Cis[':JobId'].$delete(args, options))
    },
  })
}

export function injectDeleteJobsCisJobId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Jobs.Cis)[':JobId']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.Jobs.Cis)[':JobId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteJobsCisJobIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getJobsCisJobIdInfoQueryKey(
  args: InferRequestType<(typeof client.Jobs.Cis)[':JobId']['Info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/Cis/:JobId/Info', keyArgs] as const
}

export function getJobsCisJobIdInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Jobs.Cis)[':JobId']['Info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Jobs.Cis)[':JobId']['Info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Jobs.Cis)[':JobId']['Info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsCisJobIdInfoQueryKey>
  >({
    queryKey: getJobsCisJobIdInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Jobs.Cis[':JobId'].Info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectJobsCisJobIdInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Jobs.Cis)[':JobId']['Info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Jobs.Cis)[':JobId']['Info']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Jobs.Cis)[':JobId']['Info']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobsCisJobIdInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJobsCisJobIdInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getJobsCisJobIdProgressQueryKey(
  args: InferRequestType<(typeof client.Jobs.Cis)[':JobId']['Progress']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/Cis/:JobId/Progress', keyArgs] as const
}

export function getJobsCisJobIdProgressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Jobs.Cis)[':JobId']['Progress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Jobs.Cis)[':JobId']['Progress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Jobs.Cis)[':JobId']['Progress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsCisJobIdProgressQueryKey>
  >({
    queryKey: getJobsCisJobIdProgressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Jobs.Cis[':JobId'].Progress.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectJobsCisJobIdProgress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Jobs.Cis)[':JobId']['Progress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Jobs.Cis)[':JobId']['Progress']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Jobs.Cis)[':JobId']['Progress']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobsCisJobIdProgressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getJobsCisJobIdProgressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getJobsCisJobIdStatusQueryKey(
  args: InferRequestType<(typeof client.Jobs.Cis)[':JobId']['Status']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/Cis/:JobId/Status', keyArgs] as const
}

export function getJobsCisJobIdStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Jobs.Cis)[':JobId']['Status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Jobs.Cis)[':JobId']['Status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Jobs.Cis)[':JobId']['Status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsCisJobIdStatusQueryKey>
  >({
    queryKey: getJobsCisJobIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Jobs.Cis[':JobId'].Status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectJobsCisJobIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Jobs.Cis)[':JobId']['Status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Jobs.Cis)[':JobId']['Status']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Jobs.Cis)[':JobId']['Status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobsCisJobIdStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJobsCisJobIdStatusQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getJobsDpsQueryKey(args: InferRequestType<typeof client.Jobs.Dps.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/Dps', keyArgs] as const
}

export function getJobsDpsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Dps.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Jobs.Dps.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Dps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJobsDpsQueryKey>
  >({
    queryKey: getJobsDpsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Jobs.Dps.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectJobsDps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Dps.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Jobs.Dps.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Dps.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getJobsDpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJobsDpsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostJobsDpsMutationKey() {
  return ['Jobs', '/Jobs/Dps', 'POST'] as const
}

export function getPostJobsDpsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Dps.$post>>>>>,
    TError,
    InferRequestType<typeof client.Jobs.Dps.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostJobsDpsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Jobs.Dps.$post>) {
      return parseResponse(client.Jobs.Dps.$post(args, options))
    },
  })
}

export function injectPostJobsDps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Dps.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.Jobs.Dps.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostJobsDpsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteJobsDpsJobIdMutationKey() {
  return ['Jobs', '/Jobs/Dps/:JobId', 'DELETE'] as const
}

export function getDeleteJobsDpsJobIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Jobs.Dps)[':JobId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.Jobs.Dps)[':JobId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteJobsDpsJobIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Jobs.Dps)[':JobId']['$delete']>) {
      return parseResponse(client.Jobs.Dps[':JobId'].$delete(args, options))
    },
  })
}

export function injectDeleteJobsDpsJobId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Jobs.Dps)[':JobId']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.Jobs.Dps)[':JobId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteJobsDpsJobIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getJobsDpsJobIdInfoQueryKey(
  args: InferRequestType<(typeof client.Jobs.Dps)[':JobId']['Info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/Dps/:JobId/Info', keyArgs] as const
}

export function getJobsDpsJobIdInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Jobs.Dps)[':JobId']['Info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Jobs.Dps)[':JobId']['Info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Jobs.Dps)[':JobId']['Info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsDpsJobIdInfoQueryKey>
  >({
    queryKey: getJobsDpsJobIdInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Jobs.Dps[':JobId'].Info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectJobsDpsJobIdInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Jobs.Dps)[':JobId']['Info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Jobs.Dps)[':JobId']['Info']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Jobs.Dps)[':JobId']['Info']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobsDpsJobIdInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJobsDpsJobIdInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getJobsDpsJobIdProgressQueryKey(
  args: InferRequestType<(typeof client.Jobs.Dps)[':JobId']['Progress']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/Dps/:JobId/Progress', keyArgs] as const
}

export function getJobsDpsJobIdProgressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Jobs.Dps)[':JobId']['Progress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Jobs.Dps)[':JobId']['Progress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Jobs.Dps)[':JobId']['Progress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsDpsJobIdProgressQueryKey>
  >({
    queryKey: getJobsDpsJobIdProgressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Jobs.Dps[':JobId'].Progress.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectJobsDpsJobIdProgress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Jobs.Dps)[':JobId']['Progress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Jobs.Dps)[':JobId']['Progress']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Jobs.Dps)[':JobId']['Progress']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobsDpsJobIdProgressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getJobsDpsJobIdProgressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getJobsDpsJobIdStatusQueryKey(
  args: InferRequestType<(typeof client.Jobs.Dps)[':JobId']['Status']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/Dps/:JobId/Status', keyArgs] as const
}

export function getJobsDpsJobIdStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Jobs.Dps)[':JobId']['Status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Jobs.Dps)[':JobId']['Status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Jobs.Dps)[':JobId']['Status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsDpsJobIdStatusQueryKey>
  >({
    queryKey: getJobsDpsJobIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Jobs.Dps[':JobId'].Status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectJobsDpsJobIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Jobs.Dps)[':JobId']['Status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Jobs.Dps)[':JobId']['Status']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Jobs.Dps)[':JobId']['Status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobsDpsJobIdStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJobsDpsJobIdStatusQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getJobsEmployerEmployerIdQueryKey(
  args: InferRequestType<(typeof client.Jobs.Employer)[':EmployerId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/Employer/:EmployerId', keyArgs] as const
}

export function getJobsEmployerEmployerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Jobs.Employer)[':EmployerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Jobs.Employer)[':EmployerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Jobs.Employer)[':EmployerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsEmployerEmployerIdQueryKey>
  >({
    queryKey: getJobsEmployerEmployerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Jobs.Employer[':EmployerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectJobsEmployerEmployerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Jobs.Employer)[':EmployerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Jobs.Employer)[':EmployerId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Jobs.Employer)[':EmployerId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobsEmployerEmployerIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getJobsEmployerEmployerIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getJobsPayRunsQueryKey(args: InferRequestType<typeof client.Jobs.PayRuns.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/PayRuns', keyArgs] as const
}

export function getJobsPayRunsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.PayRuns.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Jobs.PayRuns.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.PayRuns.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJobsPayRunsQueryKey>
  >({
    queryKey: getJobsPayRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Jobs.PayRuns.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectJobsPayRuns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.PayRuns.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Jobs.PayRuns.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.PayRuns.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getJobsPayRunsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJobsPayRunsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostJobsPayRunsMutationKey() {
  return ['Jobs', '/Jobs/PayRuns', 'POST'] as const
}

export function getPostJobsPayRunsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.PayRuns.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.Jobs.PayRuns.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostJobsPayRunsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Jobs.PayRuns.$post>) {
      return parseResponse(client.Jobs.PayRuns.$post(args, options))
    },
  })
}

export function injectPostJobsPayRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.PayRuns.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.Jobs.PayRuns.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostJobsPayRunsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteJobsPayRunsJobIdMutationKey() {
  return ['Jobs', '/Jobs/PayRuns/:JobId', 'DELETE'] as const
}

export function getDeleteJobsPayRunsJobIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Jobs.PayRuns)[':JobId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.Jobs.PayRuns)[':JobId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteJobsPayRunsJobIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Jobs.PayRuns)[':JobId']['$delete']>) {
      return parseResponse(client.Jobs.PayRuns[':JobId'].$delete(args, options))
    },
  })
}

export function injectDeleteJobsPayRunsJobId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Jobs.PayRuns)[':JobId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Jobs.PayRuns)[':JobId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteJobsPayRunsJobIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getJobsPayRunsJobIdInfoQueryKey(
  args: InferRequestType<(typeof client.Jobs.PayRuns)[':JobId']['Info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/PayRuns/:JobId/Info', keyArgs] as const
}

export function getJobsPayRunsJobIdInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Jobs.PayRuns)[':JobId']['Info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Jobs.PayRuns)[':JobId']['Info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Jobs.PayRuns)[':JobId']['Info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsPayRunsJobIdInfoQueryKey>
  >({
    queryKey: getJobsPayRunsJobIdInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Jobs.PayRuns[':JobId'].Info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectJobsPayRunsJobIdInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Jobs.PayRuns)[':JobId']['Info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Jobs.PayRuns)[':JobId']['Info']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Jobs.PayRuns)[':JobId']['Info']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobsPayRunsJobIdInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getJobsPayRunsJobIdInfoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getJobsPayRunsJobIdProgressQueryKey(
  args: InferRequestType<(typeof client.Jobs.PayRuns)[':JobId']['Progress']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/PayRuns/:JobId/Progress', keyArgs] as const
}

export function getJobsPayRunsJobIdProgressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Jobs.PayRuns)[':JobId']['Progress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Jobs.PayRuns)[':JobId']['Progress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Jobs.PayRuns)[':JobId']['Progress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsPayRunsJobIdProgressQueryKey>
  >({
    queryKey: getJobsPayRunsJobIdProgressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Jobs.PayRuns[':JobId'].Progress.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectJobsPayRunsJobIdProgress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Jobs.PayRuns)[':JobId']['Progress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Jobs.PayRuns)[':JobId']['Progress']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Jobs.PayRuns)[':JobId']['Progress']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobsPayRunsJobIdProgressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getJobsPayRunsJobIdProgressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getJobsPayRunsJobIdStatusQueryKey(
  args: InferRequestType<(typeof client.Jobs.PayRuns)[':JobId']['Status']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/PayRuns/:JobId/Status', keyArgs] as const
}

export function getJobsPayRunsJobIdStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Jobs.PayRuns)[':JobId']['Status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Jobs.PayRuns)[':JobId']['Status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Jobs.PayRuns)[':JobId']['Status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsPayRunsJobIdStatusQueryKey>
  >({
    queryKey: getJobsPayRunsJobIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Jobs.PayRuns[':JobId'].Status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectJobsPayRunsJobIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Jobs.PayRuns)[':JobId']['Status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Jobs.PayRuns)[':JobId']['Status']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Jobs.PayRuns)[':JobId']['Status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobsPayRunsJobIdStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getJobsPayRunsJobIdStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getJobsRtiQueryKey(args: InferRequestType<typeof client.Jobs.Rti.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/Rti', keyArgs] as const
}

export function getJobsRtiQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Rti.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Jobs.Rti.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Rti.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJobsRtiQueryKey>
  >({
    queryKey: getJobsRtiQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Jobs.Rti.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectJobsRti<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Rti.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Jobs.Rti.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Rti.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getJobsRtiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJobsRtiQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostJobsRtiMutationKey() {
  return ['Jobs', '/Jobs/Rti', 'POST'] as const
}

export function getPostJobsRtiMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Rti.$post>>>>>,
    TError,
    InferRequestType<typeof client.Jobs.Rti.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostJobsRtiMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Jobs.Rti.$post>) {
      return parseResponse(client.Jobs.Rti.$post(args, options))
    },
  })
}

export function injectPostJobsRti<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.Rti.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.Jobs.Rti.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostJobsRtiMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteJobsRtiJobIdMutationKey() {
  return ['Jobs', '/Jobs/Rti/:JobId', 'DELETE'] as const
}

export function getDeleteJobsRtiJobIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Jobs.Rti)[':JobId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.Jobs.Rti)[':JobId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteJobsRtiJobIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Jobs.Rti)[':JobId']['$delete']>) {
      return parseResponse(client.Jobs.Rti[':JobId'].$delete(args, options))
    },
  })
}

export function injectDeleteJobsRtiJobId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Jobs.Rti)[':JobId']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.Jobs.Rti)[':JobId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteJobsRtiJobIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getJobsRtiJobIdInfoQueryKey(
  args: InferRequestType<(typeof client.Jobs.Rti)[':JobId']['Info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/Rti/:JobId/Info', keyArgs] as const
}

export function getJobsRtiJobIdInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Jobs.Rti)[':JobId']['Info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Jobs.Rti)[':JobId']['Info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Jobs.Rti)[':JobId']['Info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsRtiJobIdInfoQueryKey>
  >({
    queryKey: getJobsRtiJobIdInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Jobs.Rti[':JobId'].Info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectJobsRtiJobIdInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Jobs.Rti)[':JobId']['Info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Jobs.Rti)[':JobId']['Info']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Jobs.Rti)[':JobId']['Info']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobsRtiJobIdInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJobsRtiJobIdInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getJobsRtiJobIdProgressQueryKey(
  args: InferRequestType<(typeof client.Jobs.Rti)[':JobId']['Progress']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/Rti/:JobId/Progress', keyArgs] as const
}

export function getJobsRtiJobIdProgressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Jobs.Rti)[':JobId']['Progress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Jobs.Rti)[':JobId']['Progress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Jobs.Rti)[':JobId']['Progress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsRtiJobIdProgressQueryKey>
  >({
    queryKey: getJobsRtiJobIdProgressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Jobs.Rti[':JobId'].Progress.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectJobsRtiJobIdProgress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Jobs.Rti)[':JobId']['Progress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Jobs.Rti)[':JobId']['Progress']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Jobs.Rti)[':JobId']['Progress']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobsRtiJobIdProgressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getJobsRtiJobIdProgressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getJobsRtiJobIdStatusQueryKey(
  args: InferRequestType<(typeof client.Jobs.Rti)[':JobId']['Status']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/Rti/:JobId/Status', keyArgs] as const
}

export function getJobsRtiJobIdStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Jobs.Rti)[':JobId']['Status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Jobs.Rti)[':JobId']['Status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Jobs.Rti)[':JobId']['Status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsRtiJobIdStatusQueryKey>
  >({
    queryKey: getJobsRtiJobIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Jobs.Rti[':JobId'].Status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectJobsRtiJobIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Jobs.Rti)[':JobId']['Status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Jobs.Rti)[':JobId']['Status']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Jobs.Rti)[':JobId']['Status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobsRtiJobIdStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJobsRtiJobIdStatusQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getJobsThirdPartyQueryKey(
  args: InferRequestType<typeof client.Jobs.ThirdParty.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/ThirdParty', keyArgs] as const
}

export function getJobsThirdPartyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.ThirdParty.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Jobs.ThirdParty.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.ThirdParty.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getJobsThirdPartyQueryKey>
  >({
    queryKey: getJobsThirdPartyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Jobs.ThirdParty.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectJobsThirdParty<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.ThirdParty.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Jobs.ThirdParty.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.ThirdParty.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getJobsThirdPartyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJobsThirdPartyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostJobsThirdPartyMutationKey() {
  return ['Jobs', '/Jobs/ThirdParty', 'POST'] as const
}

export function getPostJobsThirdPartyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.ThirdParty.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.Jobs.ThirdParty.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostJobsThirdPartyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Jobs.ThirdParty.$post>) {
      return parseResponse(client.Jobs.ThirdParty.$post(args, options))
    },
  })
}

export function injectPostJobsThirdParty<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Jobs.ThirdParty.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.Jobs.ThirdParty.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostJobsThirdPartyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteJobsThirdPartyJobIdMutationKey() {
  return ['Jobs', '/Jobs/ThirdParty/:JobId', 'DELETE'] as const
}

export function getDeleteJobsThirdPartyJobIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Jobs.ThirdParty)[':JobId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Jobs.ThirdParty)[':JobId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteJobsThirdPartyJobIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Jobs.ThirdParty)[':JobId']['$delete']>) {
      return parseResponse(client.Jobs.ThirdParty[':JobId'].$delete(args, options))
    },
  })
}

export function injectDeleteJobsThirdPartyJobId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Jobs.ThirdParty)[':JobId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.Jobs.ThirdParty)[':JobId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteJobsThirdPartyJobIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getJobsThirdPartyJobIdInfoQueryKey(
  args: InferRequestType<(typeof client.Jobs.ThirdParty)[':JobId']['Info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/ThirdParty/:JobId/Info', keyArgs] as const
}

export function getJobsThirdPartyJobIdInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Jobs.ThirdParty)[':JobId']['Info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Jobs.ThirdParty)[':JobId']['Info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Jobs.ThirdParty)[':JobId']['Info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsThirdPartyJobIdInfoQueryKey>
  >({
    queryKey: getJobsThirdPartyJobIdInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Jobs.ThirdParty[':JobId'].Info.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectJobsThirdPartyJobIdInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Jobs.ThirdParty)[':JobId']['Info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Jobs.ThirdParty)[':JobId']['Info']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Jobs.ThirdParty)[':JobId']['Info']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobsThirdPartyJobIdInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getJobsThirdPartyJobIdInfoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getJobsThirdPartyJobIdProgressQueryKey(
  args: InferRequestType<(typeof client.Jobs.ThirdParty)[':JobId']['Progress']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/ThirdParty/:JobId/Progress', keyArgs] as const
}

export function getJobsThirdPartyJobIdProgressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Jobs.ThirdParty)[':JobId']['Progress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Jobs.ThirdParty)[':JobId']['Progress']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Jobs.ThirdParty)[':JobId']['Progress']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsThirdPartyJobIdProgressQueryKey>
  >({
    queryKey: getJobsThirdPartyJobIdProgressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Jobs.ThirdParty[':JobId'].Progress.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectJobsThirdPartyJobIdProgress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Jobs.ThirdParty)[':JobId']['Progress']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Jobs.ThirdParty)[':JobId']['Progress']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Jobs.ThirdParty)[':JobId']['Progress']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobsThirdPartyJobIdProgressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getJobsThirdPartyJobIdProgressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getJobsThirdPartyJobIdStatusQueryKey(
  args: InferRequestType<(typeof client.Jobs.ThirdParty)[':JobId']['Status']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Jobs', '/Jobs/ThirdParty/:JobId/Status', keyArgs] as const
}

export function getJobsThirdPartyJobIdStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Jobs.ThirdParty)[':JobId']['Status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Jobs.ThirdParty)[':JobId']['Status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Jobs.ThirdParty)[':JobId']['Status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsThirdPartyJobIdStatusQueryKey>
  >({
    queryKey: getJobsThirdPartyJobIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Jobs.ThirdParty[':JobId'].Status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectJobsThirdPartyJobIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Jobs.ThirdParty)[':JobId']['Status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Jobs.ThirdParty)[':JobId']['Status']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Jobs.ThirdParty)[':JobId']['Status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJobsThirdPartyJobIdStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getJobsThirdPartyJobIdStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getJournalInstructionJournalInstructionIdQueryKey(
  args: InferRequestType<(typeof client.JournalInstruction)[':JournalInstructionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['JournalInstruction', '/JournalInstruction/:JournalInstructionId', keyArgs] as const
}

export function getJournalInstructionJournalInstructionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.JournalInstruction)[':JournalInstructionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.JournalInstruction)[':JournalInstructionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.JournalInstruction)[':JournalInstructionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJournalInstructionJournalInstructionIdQueryKey>
  >({
    queryKey: getJournalInstructionJournalInstructionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.JournalInstruction[':JournalInstructionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectJournalInstructionJournalInstructionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.JournalInstruction)[':JournalInstructionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.JournalInstruction)[':JournalInstructionId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.JournalInstruction)[':JournalInstructionId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJournalInstructionJournalInstructionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getJournalInstructionJournalInstructionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutJournalInstructionJournalInstructionIdMutationKey() {
  return ['JournalInstruction', '/JournalInstruction/:JournalInstructionId', 'PUT'] as const
}

export function getPutJournalInstructionJournalInstructionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.JournalInstruction)[':JournalInstructionId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.JournalInstruction)[':JournalInstructionId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutJournalInstructionJournalInstructionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.JournalInstruction)[':JournalInstructionId']['$put']>,
    ) {
      return parseResponse(client.JournalInstruction[':JournalInstructionId'].$put(args, options))
    },
  })
}

export function injectPutJournalInstructionJournalInstructionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.JournalInstruction)[':JournalInstructionId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.JournalInstruction)[':JournalInstructionId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutJournalInstructionJournalInstructionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteJournalInstructionJournalInstructionIdMutationKey() {
  return ['JournalInstruction', '/JournalInstruction/:JournalInstructionId', 'DELETE'] as const
}

export function getDeleteJournalInstructionJournalInstructionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.JournalInstruction)[':JournalInstructionId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.JournalInstruction)[':JournalInstructionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteJournalInstructionJournalInstructionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.JournalInstruction)[':JournalInstructionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.JournalInstruction[':JournalInstructionId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteJournalInstructionJournalInstructionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.JournalInstruction)[':JournalInstructionId']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.JournalInstruction)[':JournalInstructionId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteJournalInstructionJournalInstructionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getJournalInstructionsQueryKey(
  args: InferRequestType<typeof client.JournalInstructions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['JournalInstructions', '/JournalInstructions', keyArgs] as const
}

export function getJournalInstructionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.JournalInstructions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.JournalInstructions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.JournalInstructions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getJournalInstructionsQueryKey>
  >({
    queryKey: getJournalInstructionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.JournalInstructions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectJournalInstructions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.JournalInstructions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.JournalInstructions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.JournalInstructions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJournalInstructionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJournalInstructionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostJournalInstructionsMutationKey() {
  return ['JournalInstructions', '/JournalInstructions', 'POST'] as const
}

export function getPostJournalInstructionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.JournalInstructions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.JournalInstructions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostJournalInstructionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.JournalInstructions.$post>) {
      return parseResponse(client.JournalInstructions.$post(args, options))
    },
  })
}

export function injectPostJournalInstructions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.JournalInstructions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.JournalInstructions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostJournalInstructionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPermissionPermissionIdQueryKey(
  args: InferRequestType<(typeof client.Permission)[':PermissionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Permission', '/Permission/:PermissionId', keyArgs] as const
}

export function getPermissionPermissionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Permission)[':PermissionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Permission)[':PermissionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Permission)[':PermissionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPermissionPermissionIdQueryKey>
  >({
    queryKey: getPermissionPermissionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Permission[':PermissionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPermissionPermissionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Permission)[':PermissionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Permission)[':PermissionId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Permission)[':PermissionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPermissionPermissionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPermissionPermissionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutPermissionPermissionIdMutationKey() {
  return ['Permission', '/Permission/:PermissionId', 'PUT'] as const
}

export function getPutPermissionPermissionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Permission)[':PermissionId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Permission)[':PermissionId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPermissionPermissionIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Permission)[':PermissionId']['$put']>) {
      return parseResponse(client.Permission[':PermissionId'].$put(args, options))
    },
  })
}

export function injectPutPermissionPermissionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Permission)[':PermissionId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Permission)[':PermissionId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutPermissionPermissionIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeletePermissionPermissionIdMutationKey() {
  return ['Permission', '/Permission/:PermissionId', 'DELETE'] as const
}

export function getDeletePermissionPermissionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Permission)[':PermissionId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Permission)[':PermissionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePermissionPermissionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Permission)[':PermissionId']['$delete']>,
    ) {
      return parseResponse(client.Permission[':PermissionId'].$delete(args, options))
    },
  })
}

export function injectDeletePermissionPermissionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Permission)[':PermissionId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Permission)[':PermissionId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePermissionPermissionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchPermissionPermissionIdMutationKey() {
  return ['Permission', '/Permission/:PermissionId', 'PATCH'] as const
}

export function getPatchPermissionPermissionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Permission)[':PermissionId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Permission)[':PermissionId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPermissionPermissionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Permission)[':PermissionId']['$patch']>,
    ) {
      return parseResponse(client.Permission[':PermissionId'].$patch(args, options))
    },
  })
}

export function injectPatchPermissionPermissionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Permission)[':PermissionId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Permission)[':PermissionId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchPermissionPermissionIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPermissionPermissionIdTagTagIdQueryKey(
  args: InferRequestType<(typeof client.Permission)[':PermissionId']['Tag'][':TagId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Permission', '/Permission/:PermissionId/Tag/:TagId', keyArgs] as const
}

export function getPermissionPermissionIdTagTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Permission)[':PermissionId']['Tag'][':TagId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Permission)[':PermissionId']['Tag'][':TagId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Permission)[':PermissionId']['Tag'][':TagId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPermissionPermissionIdTagTagIdQueryKey>
  >({
    queryKey: getPermissionPermissionIdTagTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Permission[':PermissionId'].Tag[':TagId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPermissionPermissionIdTagTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Permission)[':PermissionId']['Tag'][':TagId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.Permission)[':PermissionId']['Tag'][':TagId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Permission)[':PermissionId']['Tag'][':TagId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPermissionPermissionIdTagTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPermissionPermissionIdTagTagIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutPermissionPermissionIdTagTagIdMutationKey() {
  return ['Permission', '/Permission/:PermissionId/Tag/:TagId', 'PUT'] as const
}

export function getPutPermissionPermissionIdTagTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Permission)[':PermissionId']['Tag'][':TagId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Permission)[':PermissionId']['Tag'][':TagId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPermissionPermissionIdTagTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Permission)[':PermissionId']['Tag'][':TagId']['$put']>,
    ) {
      return parseResponse(client.Permission[':PermissionId'].Tag[':TagId'].$put(args, options))
    },
  })
}

export function injectPutPermissionPermissionIdTagTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Permission)[':PermissionId']['Tag'][':TagId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Permission)[':PermissionId']['Tag'][':TagId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutPermissionPermissionIdTagTagIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeletePermissionPermissionIdTagTagIdMutationKey() {
  return ['Permission', '/Permission/:PermissionId/Tag/:TagId', 'DELETE'] as const
}

export function getDeletePermissionPermissionIdTagTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.Permission)[':PermissionId']['Tag'][':TagId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Permission)[':PermissionId']['Tag'][':TagId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePermissionPermissionIdTagTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.Permission)[':PermissionId']['Tag'][':TagId']['$delete']
      >,
    ) {
      return parseResponse(client.Permission[':PermissionId'].Tag[':TagId'].$delete(args, options))
    },
  })
}

export function injectDeletePermissionPermissionIdTagTagId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.Permission)[':PermissionId']['Tag'][':TagId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Permission)[':PermissionId']['Tag'][':TagId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePermissionPermissionIdTagTagIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPermissionPermissionIdTagsQueryKey(
  args: InferRequestType<(typeof client.Permission)[':PermissionId']['Tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Permission', '/Permission/:PermissionId/Tags', keyArgs] as const
}

export function getPermissionPermissionIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Permission)[':PermissionId']['Tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Permission)[':PermissionId']['Tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Permission)[':PermissionId']['Tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPermissionPermissionIdTagsQueryKey>
  >({
    queryKey: getPermissionPermissionIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Permission[':PermissionId'].Tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPermissionPermissionIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Permission)[':PermissionId']['Tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Permission)[':PermissionId']['Tags']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Permission)[':PermissionId']['Tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPermissionPermissionIdTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPermissionPermissionIdTagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPermissionsQueryKey(args: InferRequestType<typeof client.Permissions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Permissions', '/Permissions', keyArgs] as const
}

export function getPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Permissions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Permissions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Permissions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPermissionsQueryKey>
  >({
    queryKey: getPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Permissions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPermissions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Permissions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Permissions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Permissions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPermissionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPermissionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostPermissionsMutationKey() {
  return ['Permissions', '/Permissions', 'POST'] as const
}

export function getPostPermissionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Permissions.$post>>>>>,
    TError,
    InferRequestType<typeof client.Permissions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPermissionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Permissions.$post>) {
      return parseResponse(client.Permissions.$post(args, options))
    },
  })
}

export function injectPostPermissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Permissions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.Permissions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPermissionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPermissionsTagTagIdQueryKey(
  args: InferRequestType<(typeof client.Permissions.Tag)[':TagId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Permissions', '/Permissions/Tag/:TagId', keyArgs] as const
}

export function getPermissionsTagTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Permissions.Tag)[':TagId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Permissions.Tag)[':TagId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Permissions.Tag)[':TagId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPermissionsTagTagIdQueryKey>
  >({
    queryKey: getPermissionsTagTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Permissions.Tag[':TagId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPermissionsTagTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Permissions.Tag)[':TagId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Permissions.Tag)[':TagId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Permissions.Tag)[':TagId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPermissionsTagTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPermissionsTagTagIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPermissionsTagsQueryKey(
  args: InferRequestType<typeof client.Permissions.Tags.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Permissions', '/Permissions/Tags', keyArgs] as const
}

export function getPermissionsTagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Permissions.Tags.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Permissions.Tags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Permissions.Tags.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPermissionsTagsQueryKey>
  >({
    queryKey: getPermissionsTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Permissions.Tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPermissionsTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Permissions.Tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Permissions.Tags.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Permissions.Tags.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPermissionsTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPermissionsTagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostQueryMutationKey() {
  return ['Query', '/Query', 'POST'] as const
}

export function getPostQueryMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Query.$post>>>>>,
    TError,
    InferRequestType<typeof client.Query.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQueryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Query.$post>) {
      return parseResponse(client.Query.$post(args, options))
    },
  })
}

export function injectPostQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Query.$post>>>>>,
        TError,
        InferRequestType<typeof client.Query.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostQueryMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getReferenceDataJournalExpressionDataTableQueryKey(
  args: InferRequestType<typeof client.ReferenceData.JournalExpressionDataTable.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['ReferenceData', '/ReferenceData/JournalExpressionDataTable', keyArgs] as const
}

export function getReferenceDataJournalExpressionDataTableQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.ReferenceData.JournalExpressionDataTable.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ReferenceData.JournalExpressionDataTable.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ReferenceData.JournalExpressionDataTable.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReferenceDataJournalExpressionDataTableQueryKey>
  >({
    queryKey: getReferenceDataJournalExpressionDataTableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ReferenceData.JournalExpressionDataTable.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectReferenceDataJournalExpressionDataTable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.ReferenceData.JournalExpressionDataTable.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ReferenceData.JournalExpressionDataTable.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.ReferenceData.JournalExpressionDataTable.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReferenceDataJournalExpressionDataTableQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getReferenceDataJournalExpressionDataTableQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getReportACTPAYINSRunQueryKey(
  args: InferRequestType<typeof client.Report.ACTPAYINS.run.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/ACTPAYINS/run', keyArgs] as const
}

export function getReportACTPAYINSRunQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.ACTPAYINS.run.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Report.ACTPAYINS.run.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.ACTPAYINS.run.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportACTPAYINSRunQueryKey>
  >({
    queryKey: getReportACTPAYINSRunQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Report.ACTPAYINS.run.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReportACTPAYINSRun<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.ACTPAYINS.run.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Report.ACTPAYINS.run.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Report.ACTPAYINS.run.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportACTPAYINSRunQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportACTPAYINSRunQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getReportAOELIABILITYRunQueryKey(
  args: InferRequestType<typeof client.Report.AOELIABILITY.run.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/AOELIABILITY/run', keyArgs] as const
}

export function getReportAOELIABILITYRunQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Report.AOELIABILITY.run.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Report.AOELIABILITY.run.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Report.AOELIABILITY.run.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportAOELIABILITYRunQueryKey>
  >({
    queryKey: getReportAOELIABILITYRunQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Report.AOELIABILITY.run.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectReportAOELIABILITYRun<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Report.AOELIABILITY.run.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Report.AOELIABILITY.run.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Report.AOELIABILITY.run.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportAOELIABILITYRunQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getReportAOELIABILITYRunQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getReportDPSMSGRunQueryKey(
  args: InferRequestType<typeof client.Report.DPSMSG.run.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/DPSMSG/run', keyArgs] as const
}

export function getReportDPSMSGRunQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.DPSMSG.run.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Report.DPSMSG.run.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.DPSMSG.run.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportDPSMSGRunQueryKey>
  >({
    queryKey: getReportDPSMSGRunQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Report.DPSMSG.run.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReportDPSMSGRun<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.DPSMSG.run.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Report.DPSMSG.run.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Report.DPSMSG.run.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportDPSMSGRunQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportDPSMSGRunQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getReportEMPSUMRunQueryKey(
  args: InferRequestType<typeof client.Report.EMPSUM.run.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/EMPSUM/run', keyArgs] as const
}

export function getReportEMPSUMRunQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.EMPSUM.run.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Report.EMPSUM.run.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.EMPSUM.run.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportEMPSUMRunQueryKey>
  >({
    queryKey: getReportEMPSUMRunQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Report.EMPSUM.run.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReportEMPSUMRun<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.EMPSUM.run.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Report.EMPSUM.run.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Report.EMPSUM.run.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportEMPSUMRunQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportEMPSUMRunQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getReportGRO2NETRunQueryKey(
  args: InferRequestType<typeof client.Report.GRO2NET.run.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/GRO2NET/run', keyArgs] as const
}

export function getReportGRO2NETRunQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.GRO2NET.run.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Report.GRO2NET.run.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.GRO2NET.run.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportGRO2NETRunQueryKey>
  >({
    queryKey: getReportGRO2NETRunQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Report.GRO2NET.run.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReportGRO2NETRun<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.GRO2NET.run.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Report.GRO2NET.run.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Report.GRO2NET.run.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportGRO2NETRunQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportGRO2NETRunQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getReportHOLBALRunQueryKey(
  args: InferRequestType<typeof client.Report.HOLBAL.run.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/HOLBAL/run', keyArgs] as const
}

export function getReportHOLBALRunQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.HOLBAL.run.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Report.HOLBAL.run.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.HOLBAL.run.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportHOLBALRunQueryKey>
  >({
    queryKey: getReportHOLBALRunQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Report.HOLBAL.run.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReportHOLBALRun<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.HOLBAL.run.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Report.HOLBAL.run.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Report.HOLBAL.run.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportHOLBALRunQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportHOLBALRunQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getReportJOURNALRunQueryKey(
  args: InferRequestType<typeof client.Report.JOURNAL.run.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/JOURNAL/run', keyArgs] as const
}

export function getReportJOURNALRunQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.JOURNAL.run.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Report.JOURNAL.run.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.JOURNAL.run.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportJOURNALRunQueryKey>
  >({
    queryKey: getReportJOURNALRunQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Report.JOURNAL.run.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReportJOURNALRun<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.JOURNAL.run.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Report.JOURNAL.run.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Report.JOURNAL.run.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportJOURNALRunQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportJOURNALRunQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getReportLASTPAYDATERunQueryKey(
  args: InferRequestType<typeof client.Report.LASTPAYDATE.run.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/LASTPAYDATE/run', keyArgs] as const
}

export function getReportLASTPAYDATERunQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.LASTPAYDATE.run.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Report.LASTPAYDATE.run.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Report.LASTPAYDATE.run.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportLASTPAYDATERunQueryKey>
  >({
    queryKey: getReportLASTPAYDATERunQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Report.LASTPAYDATE.run.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectReportLASTPAYDATERun<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.LASTPAYDATE.run.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Report.LASTPAYDATE.run.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Report.LASTPAYDATE.run.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportLASTPAYDATERunQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getReportLASTPAYDATERunQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getReportNETPAYRunQueryKey(
  args: InferRequestType<typeof client.Report.NETPAY.run.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/NETPAY/run', keyArgs] as const
}

export function getReportNETPAYRunQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.NETPAY.run.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Report.NETPAY.run.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.NETPAY.run.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportNETPAYRunQueryKey>
  >({
    queryKey: getReportNETPAYRunQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Report.NETPAY.run.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReportNETPAYRun<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.NETPAY.run.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Report.NETPAY.run.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Report.NETPAY.run.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportNETPAYRunQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportNETPAYRunQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getReportNEXTPERIODRunQueryKey(
  args: InferRequestType<typeof client.Report.NEXTPERIOD.run.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/NEXTPERIOD/run', keyArgs] as const
}

export function getReportNEXTPERIODRunQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.NEXTPERIOD.run.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Report.NEXTPERIOD.run.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Report.NEXTPERIOD.run.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportNEXTPERIODRunQueryKey>
  >({
    queryKey: getReportNEXTPERIODRunQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Report.NEXTPERIOD.run.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReportNEXTPERIODRun<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.NEXTPERIOD.run.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Report.NEXTPERIOD.run.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Report.NEXTPERIOD.run.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportNEXTPERIODRunQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportNEXTPERIODRunQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getReportP11SUMRunQueryKey(
  args: InferRequestType<typeof client.Report.P11SUM.run.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/P11SUM/run', keyArgs] as const
}

export function getReportP11SUMRunQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P11SUM.run.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Report.P11SUM.run.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P11SUM.run.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportP11SUMRunQueryKey>
  >({
    queryKey: getReportP11SUMRunQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Report.P11SUM.run.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReportP11SUMRun<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P11SUM.run.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Report.P11SUM.run.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Report.P11SUM.run.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportP11SUMRunQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportP11SUMRunQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getReportP32RunQueryKey(args: InferRequestType<typeof client.Report.P32.run.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/P32/run', keyArgs] as const
}

export function getReportP32RunQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P32.run.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Report.P32.run.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P32.run.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportP32RunQueryKey>
  >({
    queryKey: getReportP32RunQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Report.P32.run.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReportP32Run<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P32.run.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Report.P32.run.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P32.run.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReportP32RunQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportP32RunQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getReportP32SUMRunQueryKey(
  args: InferRequestType<typeof client.Report.P32SUM.run.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/P32SUM/run', keyArgs] as const
}

export function getReportP32SUMRunQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P32SUM.run.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Report.P32SUM.run.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P32SUM.run.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportP32SUMRunQueryKey>
  >({
    queryKey: getReportP32SUMRunQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Report.P32SUM.run.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReportP32SUMRun<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P32SUM.run.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Report.P32SUM.run.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Report.P32SUM.run.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportP32SUMRunQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportP32SUMRunQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getReportP45RunQueryKey(args: InferRequestType<typeof client.Report.P45.run.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/P45/run', keyArgs] as const
}

export function getReportP45RunQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P45.run.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Report.P45.run.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P45.run.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportP45RunQueryKey>
  >({
    queryKey: getReportP45RunQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Report.P45.run.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReportP45Run<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P45.run.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Report.P45.run.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P45.run.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReportP45RunQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportP45RunQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getReportP60RunQueryKey(args: InferRequestType<typeof client.Report.P60.run.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/P60/run', keyArgs] as const
}

export function getReportP60RunQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P60.run.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Report.P60.run.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P60.run.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportP60RunQueryKey>
  >({
    queryKey: getReportP60RunQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Report.P60.run.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReportP60Run<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P60.run.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Report.P60.run.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.P60.run.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReportP60RunQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportP60RunQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getReportPAPDISRunQueryKey(
  args: InferRequestType<typeof client.Report.PAPDIS.run.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/PAPDIS/run', keyArgs] as const
}

export function getReportPAPDISRunQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.PAPDIS.run.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Report.PAPDIS.run.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.PAPDIS.run.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportPAPDISRunQueryKey>
  >({
    queryKey: getReportPAPDISRunQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Report.PAPDIS.run.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReportPAPDISRun<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.PAPDIS.run.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Report.PAPDIS.run.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Report.PAPDIS.run.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportPAPDISRunQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportPAPDISRunQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getReportPASSRunQueryKey(
  args: InferRequestType<typeof client.Report.PASS.run.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/PASS/run', keyArgs] as const
}

export function getReportPASSRunQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.PASS.run.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Report.PASS.run.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.PASS.run.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportPASSRunQueryKey>
  >({
    queryKey: getReportPASSRunQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Report.PASS.run.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReportPASSRun<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.PASS.run.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Report.PASS.run.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.PASS.run.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReportPASSRunQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportPASSRunQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getReportPAYDASHBOARDRunQueryKey(
  args: InferRequestType<typeof client.Report.PAYDASHBOARD.run.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/PAYDASHBOARD/run', keyArgs] as const
}

export function getReportPAYDASHBOARDRunQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Report.PAYDASHBOARD.run.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Report.PAYDASHBOARD.run.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Report.PAYDASHBOARD.run.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportPAYDASHBOARDRunQueryKey>
  >({
    queryKey: getReportPAYDASHBOARDRunQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Report.PAYDASHBOARD.run.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectReportPAYDASHBOARDRun<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Report.PAYDASHBOARD.run.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Report.PAYDASHBOARD.run.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Report.PAYDASHBOARD.run.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportPAYDASHBOARDRunQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getReportPAYDASHBOARDRunQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getReportPAYSLIP3RunQueryKey(
  args: InferRequestType<typeof client.Report.PAYSLIP3.run.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/PAYSLIP3/run', keyArgs] as const
}

export function getReportPAYSLIP3RunQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.PAYSLIP3.run.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Report.PAYSLIP3.run.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.PAYSLIP3.run.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportPAYSLIP3RunQueryKey>
  >({
    queryKey: getReportPAYSLIP3RunQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Report.PAYSLIP3.run.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReportPAYSLIP3Run<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Report.PAYSLIP3.run.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Report.PAYSLIP3.run.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Report.PAYSLIP3.run.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportPAYSLIP3RunQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportPAYSLIP3RunQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getReportPENLIABILITYRunQueryKey(
  args: InferRequestType<typeof client.Report.PENLIABILITY.run.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/PENLIABILITY/run', keyArgs] as const
}

export function getReportPENLIABILITYRunQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Report.PENLIABILITY.run.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.Report.PENLIABILITY.run.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.Report.PENLIABILITY.run.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportPENLIABILITYRunQueryKey>
  >({
    queryKey: getReportPENLIABILITYRunQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Report.PENLIABILITY.run.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectReportPENLIABILITYRun<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.Report.PENLIABILITY.run.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Report.PENLIABILITY.run.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.Report.PENLIABILITY.run.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportPENLIABILITYRunQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getReportPENLIABILITYRunQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getReportReportDefinitionIdQueryKey(
  args: InferRequestType<(typeof client.Report)[':ReportDefinitionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/:ReportDefinitionId', keyArgs] as const
}

export function getReportReportDefinitionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Report)[':ReportDefinitionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Report)[':ReportDefinitionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Report)[':ReportDefinitionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportReportDefinitionIdQueryKey>
  >({
    queryKey: getReportReportDefinitionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Report[':ReportDefinitionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectReportReportDefinitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Report)[':ReportDefinitionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Report)[':ReportDefinitionId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Report)[':ReportDefinitionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportReportDefinitionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getReportReportDefinitionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutReportReportDefinitionIdMutationKey() {
  return ['Report', '/Report/:ReportDefinitionId', 'PUT'] as const
}

export function getPutReportReportDefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Report)[':ReportDefinitionId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Report)[':ReportDefinitionId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutReportReportDefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Report)[':ReportDefinitionId']['$put']>,
    ) {
      return parseResponse(client.Report[':ReportDefinitionId'].$put(args, options))
    },
  })
}

export function injectPutReportReportDefinitionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Report)[':ReportDefinitionId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Report)[':ReportDefinitionId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutReportReportDefinitionIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteReportReportDefinitionIdMutationKey() {
  return ['Report', '/Report/:ReportDefinitionId', 'DELETE'] as const
}

export function getDeleteReportReportDefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Report)[':ReportDefinitionId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Report)[':ReportDefinitionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteReportReportDefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Report)[':ReportDefinitionId']['$delete']>,
    ) {
      return parseResponse(client.Report[':ReportDefinitionId'].$delete(args, options))
    },
  })
}

export function injectDeleteReportReportDefinitionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Report)[':ReportDefinitionId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.Report)[':ReportDefinitionId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteReportReportDefinitionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getReportReportDefinitionIdRunQueryKey(
  args: InferRequestType<(typeof client.Report)[':ReportDefinitionId']['run']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Report', '/Report/:ReportDefinitionId/run', keyArgs] as const
}

export function getReportReportDefinitionIdRunQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Report)[':ReportDefinitionId']['run']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Report)[':ReportDefinitionId']['run']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Report)[':ReportDefinitionId']['run']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportReportDefinitionIdRunQueryKey>
  >({
    queryKey: getReportReportDefinitionIdRunQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Report[':ReportDefinitionId'].run.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectReportReportDefinitionIdRun<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Report)[':ReportDefinitionId']['run']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Report)[':ReportDefinitionId']['run']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Report)[':ReportDefinitionId']['run']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportReportDefinitionIdRunQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getReportReportDefinitionIdRunQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getReportsQueryKey(args: InferRequestType<typeof client.Reports.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Reports', '/Reports', keyArgs] as const
}

export function getReportsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Reports.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReportsQueryKey>
  >({
    queryKey: getReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Reports.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Reports.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostReportsMutationKey() {
  return ['Reports', '/Reports', 'POST'] as const
}

export function getPostReportsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.$post>>>>>,
    TError,
    InferRequestType<typeof client.Reports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Reports.$post>) {
      return parseResponse(client.Reports.$post(args, options))
    },
  })
}

export function injectPostReports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Reports.$post>>>>>,
        TError,
        InferRequestType<typeof client.Reports.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostReportsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSchemasQueryKey(args: InferRequestType<typeof client.Schemas.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Schemas', '/Schemas', keyArgs] as const
}

export function getSchemasQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Schemas.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Schemas.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Schemas.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSchemasQueryKey>
  >({
    queryKey: getSchemasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Schemas.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSchemas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Schemas.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Schemas.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Schemas.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSchemasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSchemasQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSchemasDtoDataTypeQueryKey(
  args: InferRequestType<(typeof client.Schemas)[':DtoDataType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Schemas', '/Schemas/:DtoDataType', keyArgs] as const
}

export function getSchemasDtoDataTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Schemas)[':DtoDataType']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Schemas)[':DtoDataType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Schemas)[':DtoDataType']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSchemasDtoDataTypeQueryKey>
  >({
    queryKey: getSchemasDtoDataTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Schemas[':DtoDataType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSchemasDtoDataType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Schemas)[':DtoDataType']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Schemas)[':DtoDataType']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Schemas)[':DtoDataType']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSchemasDtoDataTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSchemasDtoDataTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSecretSecretIdQueryKey(
  args: InferRequestType<(typeof client.Secret)[':SecretId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Secret', '/Secret/:SecretId', keyArgs] as const
}

export function getSecretSecretIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Secret)[':SecretId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Secret)[':SecretId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Secret)[':SecretId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSecretSecretIdQueryKey>
  >({
    queryKey: getSecretSecretIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Secret[':SecretId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSecretSecretId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Secret)[':SecretId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Secret)[':SecretId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Secret)[':SecretId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSecretSecretIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSecretSecretIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutSecretSecretIdMutationKey() {
  return ['Secret', '/Secret/:SecretId', 'PUT'] as const
}

export function getPutSecretSecretIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Secret)[':SecretId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.Secret)[':SecretId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSecretSecretIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Secret)[':SecretId']['$put']>) {
      return parseResponse(client.Secret[':SecretId'].$put(args, options))
    },
  })
}

export function injectPutSecretSecretId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Secret)[':SecretId']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.Secret)[':SecretId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutSecretSecretIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteSecretSecretIdMutationKey() {
  return ['Secret', '/Secret/:SecretId', 'DELETE'] as const
}

export function getDeleteSecretSecretIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.Secret)[':SecretId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Secret)[':SecretId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSecretSecretIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.Secret)[':SecretId']['$delete']>) {
      return parseResponse(client.Secret[':SecretId'].$delete(args, options))
    },
  })
}

export function injectDeleteSecretSecretId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Secret)[':SecretId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.Secret)[':SecretId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteSecretSecretIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSecretsQueryKey(args: InferRequestType<typeof client.Secrets.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Secrets', '/Secrets', keyArgs] as const
}

export function getSecretsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Secrets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Secrets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Secrets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSecretsQueryKey>
  >({
    queryKey: getSecretsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Secrets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSecrets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Secrets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Secrets.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Secrets.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSecretsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSecretsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostSecretsMutationKey() {
  return ['Secrets', '/Secrets', 'POST'] as const
}

export function getPostSecretsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Secrets.$post>>>>>,
    TError,
    InferRequestType<typeof client.Secrets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSecretsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Secrets.$post>) {
      return parseResponse(client.Secrets.$post(args, options))
    },
  })
}

export function injectPostSecrets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Secrets.$post>>>>>,
        TError,
        InferRequestType<typeof client.Secrets.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSecretsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTemplateDtoDataTypeQueryKey(
  args: InferRequestType<(typeof client.Template)[':DtoDataType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Template', '/Template/:DtoDataType', keyArgs] as const
}

export function getTemplateDtoDataTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Template)[':DtoDataType']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Template)[':DtoDataType']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Template)[':DtoDataType']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplateDtoDataTypeQueryKey>
  >({
    queryKey: getTemplateDtoDataTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Template[':DtoDataType'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTemplateDtoDataType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Template)[':DtoDataType']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Template)[':DtoDataType']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Template)[':DtoDataType']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplateDtoDataTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTemplateDtoDataTypeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTemplatesQueryKey(args: InferRequestType<typeof client.Templates.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Templates', '/Templates', keyArgs] as const
}

export function getTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Templates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Templates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Templates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTemplatesQueryKey>
  >({
    queryKey: getTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Templates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Templates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Templates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTemplatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTransformTransformDefinitionIdQueryKey(
  args: InferRequestType<(typeof client.Transform)[':TransformDefinitionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Transform', '/Transform/:TransformDefinitionId', keyArgs] as const
}

export function getTransformTransformDefinitionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Transform)[':TransformDefinitionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Transform)[':TransformDefinitionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Transform)[':TransformDefinitionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransformTransformDefinitionIdQueryKey>
  >({
    queryKey: getTransformTransformDefinitionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Transform[':TransformDefinitionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTransformTransformDefinitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.Transform)[':TransformDefinitionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Transform)[':TransformDefinitionId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Transform)[':TransformDefinitionId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTransformTransformDefinitionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTransformTransformDefinitionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutTransformTransformDefinitionIdMutationKey() {
  return ['Transform', '/Transform/:TransformDefinitionId', 'PUT'] as const
}

export function getPutTransformTransformDefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.Transform)[':TransformDefinitionId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.Transform)[':TransformDefinitionId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTransformTransformDefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Transform)[':TransformDefinitionId']['$put']>,
    ) {
      return parseResponse(client.Transform[':TransformDefinitionId'].$put(args, options))
    },
  })
}

export function injectPutTransformTransformDefinitionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.Transform)[':TransformDefinitionId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.Transform)[':TransformDefinitionId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTransformTransformDefinitionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteTransformTransformDefinitionIdMutationKey() {
  return ['Transform', '/Transform/:TransformDefinitionId', 'DELETE'] as const
}

export function getDeleteTransformTransformDefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.Transform)[':TransformDefinitionId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.Transform)[':TransformDefinitionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTransformTransformDefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.Transform)[':TransformDefinitionId']['$delete']>,
    ) {
      return parseResponse(client.Transform[':TransformDefinitionId'].$delete(args, options))
    },
  })
}

export function injectDeleteTransformTransformDefinitionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.Transform)[':TransformDefinitionId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.Transform)[':TransformDefinitionId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTransformTransformDefinitionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTransformsQueryKey(args: InferRequestType<typeof client.Transforms.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Transforms', '/Transforms', keyArgs] as const
}

export function getTransformsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Transforms.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Transforms.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Transforms.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTransformsQueryKey>
  >({
    queryKey: getTransformsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Transforms.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTransforms<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Transforms.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Transforms.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Transforms.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTransformsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTransformsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostTransformsMutationKey() {
  return ['Transforms', '/Transforms', 'POST'] as const
}

export function getPostTransformsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Transforms.$post>>>>>,
    TError,
    InferRequestType<typeof client.Transforms.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransformsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Transforms.$post>) {
      return parseResponse(client.Transforms.$post(args, options))
    },
  })
}

export function injectPostTransforms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Transforms.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.Transforms.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTransformsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUserUserIdQueryKey(
  args: InferRequestType<(typeof client.User)[':UserId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['User', '/User/:UserId', keyArgs] as const
}

export function getUserUserIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.User)[':UserId']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.User)[':UserId']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.User)[':UserId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdQueryKey>
  >({
    queryKey: getUserUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.User[':UserId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUserUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.User)[':UserId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.User)[':UserId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.User)[':UserId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutUserUserIdMutationKey() {
  return ['User', '/User/:UserId', 'PUT'] as const
}

export function getPutUserUserIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.User)[':UserId']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.User)[':UserId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.User)[':UserId']['$put']>) {
      return parseResponse(client.User[':UserId'].$put(args, options))
    },
  })
}

export function injectPutUserUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.User)[':UserId']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.User)[':UserId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserUserIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteUserUserIdMutationKey() {
  return ['User', '/User/:UserId', 'DELETE'] as const
}

export function getDeleteUserUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.User)[':UserId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.User)[':UserId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.User)[':UserId']['$delete']>) {
      return parseResponse(client.User[':UserId'].$delete(args, options))
    },
  })
}

export function injectDeleteUserUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.User)[':UserId']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.User)[':UserId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchUserUserIdMutationKey() {
  return ['User', '/User/:UserId', 'PATCH'] as const
}

export function getPatchUserUserIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.User)[':UserId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.User)[':UserId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUserUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.User)[':UserId']['$patch']>) {
      return parseResponse(client.User[':UserId'].$patch(args, options))
    },
  })
}

export function injectPatchUserUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.User)[':UserId']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.User)[':UserId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUserUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUserUserIdPermissionsQueryKey(
  args: InferRequestType<(typeof client.User)[':UserId']['Permissions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['User', '/User/:UserId/Permissions', keyArgs] as const
}

export function getUserUserIdPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.User)[':UserId']['Permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.User)[':UserId']['Permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.User)[':UserId']['Permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdPermissionsQueryKey>
  >({
    queryKey: getUserUserIdPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.User[':UserId'].Permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserUserIdPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.User)[':UserId']['Permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.User)[':UserId']['Permissions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.User)[':UserId']['Permissions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserUserIdPermissionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getUserUserIdPermissionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getUserUserIdTagTagIdQueryKey(
  args: InferRequestType<(typeof client.User)[':UserId']['Tag'][':TagId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['User', '/User/:UserId/Tag/:TagId', keyArgs] as const
}

export function getUserUserIdTagTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.User)[':UserId']['Tag'][':TagId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.User)[':UserId']['Tag'][':TagId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.User)[':UserId']['Tag'][':TagId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdTagTagIdQueryKey>
  >({
    queryKey: getUserUserIdTagTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.User[':UserId'].Tag[':TagId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserUserIdTagTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.User)[':UserId']['Tag'][':TagId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.User)[':UserId']['Tag'][':TagId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.User)[':UserId']['Tag'][':TagId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserUserIdTagTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserUserIdTagTagIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutUserUserIdTagTagIdMutationKey() {
  return ['User', '/User/:UserId/Tag/:TagId', 'PUT'] as const
}

export function getPutUserUserIdTagTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.User)[':UserId']['Tag'][':TagId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.User)[':UserId']['Tag'][':TagId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserUserIdTagTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.User)[':UserId']['Tag'][':TagId']['$put']>,
    ) {
      return parseResponse(client.User[':UserId'].Tag[':TagId'].$put(args, options))
    },
  })
}

export function injectPutUserUserIdTagTagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.User)[':UserId']['Tag'][':TagId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.User)[':UserId']['Tag'][':TagId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutUserUserIdTagTagIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteUserUserIdTagTagIdMutationKey() {
  return ['User', '/User/:UserId/Tag/:TagId', 'DELETE'] as const
}

export function getDeleteUserUserIdTagTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.User)[':UserId']['Tag'][':TagId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.User)[':UserId']['Tag'][':TagId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserUserIdTagTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.User)[':UserId']['Tag'][':TagId']['$delete']>,
    ) {
      return parseResponse(client.User[':UserId'].Tag[':TagId'].$delete(args, options))
    },
  })
}

export function injectDeleteUserUserIdTagTagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.User)[':UserId']['Tag'][':TagId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.User)[':UserId']['Tag'][':TagId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUserUserIdTagTagIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUserUserIdTagsQueryKey(
  args: InferRequestType<(typeof client.User)[':UserId']['Tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['User', '/User/:UserId/Tags', keyArgs] as const
}

export function getUserUserIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.User)[':UserId']['Tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.User)[':UserId']['Tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.User)[':UserId']['Tags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserUserIdTagsQueryKey>
  >({
    queryKey: getUserUserIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.User[':UserId'].Tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUserUserIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.User)[':UserId']['Tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.User)[':UserId']['Tags']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.User)[':UserId']['Tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserUserIdTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserUserIdTagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUsersQueryKey(args: InferRequestType<typeof client.Users.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Users', '/Users', keyArgs] as const
}

export function getUsersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >({
    queryKey: getUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Users.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostUsersMutationKey() {
  return ['Users', '/Users', 'POST'] as const
}

export function getPostUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$post>>>>>,
    TError,
    InferRequestType<typeof client.Users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Users.$post>) {
      return parseResponse(client.Users.$post(args, options))
    },
  })
}

export function injectPostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.$post>>>>>,
        TError,
        InferRequestType<typeof client.Users.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersTagTagIdQueryKey(
  args: InferRequestType<(typeof client.Users.Tag)[':TagId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['Users', '/Users/Tag/:TagId', keyArgs] as const
}

export function getUsersTagTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Users.Tag)[':TagId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.Users.Tag)[':TagId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.Users.Tag)[':TagId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersTagTagIdQueryKey>
  >({
    queryKey: getUsersTagTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Users.Tag[':TagId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsersTagTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.Users.Tag)[':TagId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.Users.Tag)[':TagId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.Users.Tag)[':TagId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersTagTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersTagTagIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUsersTagsQueryKey(args: InferRequestType<typeof client.Users.Tags.$get>) {
  const { header: _, ...keyArgs } = args
  return ['Users', '/Users/Tags', keyArgs] as const
}

export function getUsersTagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.Tags.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.Users.Tags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.Tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersTagsQueryKey>
  >({
    queryKey: getUsersTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.Users.Tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsersTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.Tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.Users.Tags.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Users.Tags.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUsersTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersTagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
