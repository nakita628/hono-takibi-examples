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

export function getCampagneKey() {
  return ['campagne'] as const
}

export function getComptageKey() {
  return ['comptage'] as const
}

export function getCreditKey() {
  return ['credit'] as const
}

export function getDellistenoireKey() {
  return ['dellistenoire'] as const
}

export function getGetlistenoireKey() {
  return ['getlistenoire'] as const
}

export function getHlrKey() {
  return ['hlr'] as const
}

export function getRepertoireKey() {
  return ['repertoire'] as const
}

export function getSetlistenoireKey() {
  return ['setlistenoire'] as const
}

export function getShortlinkKey() {
  return ['shortlink'] as const
}

export function getSmsKey() {
  return ['sms'] as const
}

export function getSmsmultiKey() {
  return ['smsmulti'] as const
}

export function getSubaccountKey() {
  return ['subaccount'] as const
}

export function getCampagneQueryKey(args: InferRequestType<typeof client.campagne.$get>) {
  return ['campagne', '/campagne', args] as const
}

export function getCampagneQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campagne.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.campagne.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campagne.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCampagneQueryKey>
  >({
    queryKey: getCampagneQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.campagne.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCampagne<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campagne.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.campagne.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campagne.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCampagneQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCampagneQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostComptageMutationKey() {
  return ['comptage', '/comptage', 'POST'] as const
}

export function getPostComptageMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comptage.$post>>>>>,
    TError,
    InferRequestType<typeof client.comptage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostComptageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.comptage.$post>) {
      return parseResponse(client.comptage.$post(args, options))
    },
  })
}

export function injectPostComptage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.comptage.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.comptage.$post>,
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
    const mutationDefaults = getPostComptageMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCreditQueryKey(args: InferRequestType<typeof client.credit.$get>) {
  return ['credit', '/credit', args] as const
}

export function getCreditQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.credit.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCreditQueryKey>
  >({
    queryKey: getCreditQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.credit.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCredit<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.credit.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credit.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCreditQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCreditQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostDellistenoireMutationKey() {
  return ['dellistenoire', '/dellistenoire', 'POST'] as const
}

export function getPostDellistenoireMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dellistenoire.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dellistenoire.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDellistenoireMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dellistenoire.$post>) {
      return parseResponse(client.dellistenoire.$post(args, options))
    },
  })
}

export function injectPostDellistenoire<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dellistenoire.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.dellistenoire.$post>,
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
    const mutationDefaults = getPostDellistenoireMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostGetlistenoireMutationKey() {
  return ['getlistenoire', '/getlistenoire', 'POST'] as const
}

export function getPostGetlistenoireMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getlistenoire.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.getlistenoire.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetlistenoireMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getlistenoire.$post>) {
      return parseResponse(client.getlistenoire.$post(args, options))
    },
  })
}

export function injectPostGetlistenoire<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getlistenoire.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.getlistenoire.$post>,
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
    const mutationDefaults = getPostGetlistenoireMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostHlrMutationKey() {
  return ['hlr', '/hlr', 'POST'] as const
}

export function getPostHlrMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hlr.$post>>>>>,
    TError,
    InferRequestType<typeof client.hlr.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostHlrMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.hlr.$post>) {
      return parseResponse(client.hlr.$post(args, options))
    },
  })
}

export function injectPostHlr<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hlr.$post>>>>>,
        TError,
        InferRequestType<typeof client.hlr.$post>,
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
    const mutationDefaults = getPostHlrMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutRepertoireMutationKey() {
  return ['repertoire', '/repertoire', 'PUT'] as const
}

export function getPutRepertoireMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.repertoire.$put>>>>>,
    TError,
    InferRequestType<typeof client.repertoire.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutRepertoireMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.repertoire.$put>) {
      return parseResponse(client.repertoire.$put(args, options))
    },
  })
}

export function injectPutRepertoire<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.repertoire.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.repertoire.$put>,
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
    const mutationDefaults = getPutRepertoireMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRepertoireMutationKey() {
  return ['repertoire', '/repertoire', 'POST'] as const
}

export function getPostRepertoireMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.repertoire.$post>>>>>,
    TError,
    InferRequestType<typeof client.repertoire.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRepertoireMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.repertoire.$post>) {
      return parseResponse(client.repertoire.$post(args, options))
    },
  })
}

export function injectPostRepertoire<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.repertoire.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.repertoire.$post>,
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
    const mutationDefaults = getPostRepertoireMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSetlistenoireMutationKey() {
  return ['setlistenoire', '/setlistenoire', 'POST'] as const
}

export function getPostSetlistenoireMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setlistenoire.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.setlistenoire.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSetlistenoireMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setlistenoire.$post>) {
      return parseResponse(client.setlistenoire.$post(args, options))
    },
  })
}

export function injectPostSetlistenoire<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setlistenoire.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.setlistenoire.$post>,
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
    const mutationDefaults = getPostSetlistenoireMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostShortlinkMutationKey() {
  return ['shortlink', '/shortlink', 'POST'] as const
}

export function getPostShortlinkMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shortlink.$post>>>>>,
    TError,
    InferRequestType<typeof client.shortlink.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostShortlinkMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.shortlink.$post>) {
      return parseResponse(client.shortlink.$post(args, options))
    },
  })
}

export function injectPostShortlink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shortlink.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.shortlink.$post>,
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
    const mutationDefaults = getPostShortlinkMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSmsMutationKey() {
  return ['sms', '/sms', 'POST'] as const
}

export function getPostSmsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.$post>>>>>,
    TError,
    InferRequestType<typeof client.sms.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSmsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sms.$post>) {
      return parseResponse(client.sms.$post(args, options))
    },
  })
}

export function injectPostSms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.$post>>>>>,
        TError,
        InferRequestType<typeof client.sms.$post>,
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
    const mutationDefaults = getPostSmsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSmsmultiMutationKey() {
  return ['smsmulti', '/smsmulti', 'POST'] as const
}

export function getPostSmsmultiMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smsmulti.$post>>>>>,
    TError,
    InferRequestType<typeof client.smsmulti.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSmsmultiMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.smsmulti.$post>) {
      return parseResponse(client.smsmulti.$post(args, options))
    },
  })
}

export function injectPostSmsmulti<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.smsmulti.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.smsmulti.$post>,
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
    const mutationDefaults = getPostSmsmultiMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutSubaccountMutationKey() {
  return ['subaccount', '/subaccount', 'PUT'] as const
}

export function getPutSubaccountMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccount.$put>>>>>,
    TError,
    InferRequestType<typeof client.subaccount.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutSubaccountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.subaccount.$put>) {
      return parseResponse(client.subaccount.$put(args, options))
    },
  })
}

export function injectPutSubaccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccount.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.subaccount.$put>,
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
    const mutationDefaults = getPutSubaccountMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSubaccountMutationKey() {
  return ['subaccount', '/subaccount', 'POST'] as const
}

export function getPostSubaccountMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccount.$post>>>>>,
    TError,
    InferRequestType<typeof client.subaccount.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSubaccountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.subaccount.$post>) {
      return parseResponse(client.subaccount.$post(args, options))
    },
  })
}

export function injectPostSubaccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccount.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.subaccount.$post>,
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
    const mutationDefaults = getPostSubaccountMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
