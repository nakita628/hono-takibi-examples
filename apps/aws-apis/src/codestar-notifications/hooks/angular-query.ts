import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCreateNotificationRuleKey() {
  return ['createNotificationRule'] as const
}

export function getDeleteNotificationRuleKey() {
  return ['deleteNotificationRule'] as const
}

export function getDeleteTargetKey() {
  return ['deleteTarget'] as const
}

export function getDescribeNotificationRuleKey() {
  return ['describeNotificationRule'] as const
}

export function getListEventTypesKey() {
  return ['listEventTypes'] as const
}

export function getListNotificationRulesKey() {
  return ['listNotificationRules'] as const
}

export function getListTagsForResourceKey() {
  return ['listTagsForResource'] as const
}

export function getListTargetsKey() {
  return ['listTargets'] as const
}

export function getSubscribeKey() {
  return ['subscribe'] as const
}

export function getTagResourceKey() {
  return ['tagResource'] as const
}

export function getUnsubscribeKey() {
  return ['unsubscribe'] as const
}

export function getUntagResourceKey() {
  return ['untagResource'] as const
}

export function getUpdateNotificationRuleKey() {
  return ['updateNotificationRule'] as const
}

export function getPostCreateNotificationRuleMutationKey() {
  return ['createNotificationRule', '/createNotificationRule', 'POST'] as const
}

export function getPostCreateNotificationRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.createNotificationRule.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.createNotificationRule.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateNotificationRuleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createNotificationRule.$post>) {
      return parseResponse(client.createNotificationRule.$post(args, options))
    },
  })
}

export function injectPostCreateNotificationRule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.createNotificationRule.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.createNotificationRule.$post>,
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
    const mutationDefaults = getPostCreateNotificationRuleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDeleteNotificationRuleMutationKey() {
  return ['deleteNotificationRule', '/deleteNotificationRule', 'POST'] as const
}

export function getPostDeleteNotificationRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.deleteNotificationRule.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.deleteNotificationRule.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteNotificationRuleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deleteNotificationRule.$post>) {
      return parseResponse(client.deleteNotificationRule.$post(args, options))
    },
  })
}

export function injectPostDeleteNotificationRule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.deleteNotificationRule.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.deleteNotificationRule.$post>,
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
    const mutationDefaults = getPostDeleteNotificationRuleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDeleteTargetMutationKey() {
  return ['deleteTarget', '/deleteTarget', 'POST'] as const
}

export function getPostDeleteTargetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteTarget.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.deleteTarget.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteTargetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deleteTarget.$post>) {
      return parseResponse(client.deleteTarget.$post(args, options))
    },
  })
}

export function injectPostDeleteTarget<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deleteTarget.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.deleteTarget.$post>,
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
    const mutationDefaults = getPostDeleteTargetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDescribeNotificationRuleMutationKey() {
  return ['describeNotificationRule', '/describeNotificationRule', 'POST'] as const
}

export function getPostDescribeNotificationRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.describeNotificationRule.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.describeNotificationRule.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeNotificationRuleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.describeNotificationRule.$post>) {
      return parseResponse(client.describeNotificationRule.$post(args, options))
    },
  })
}

export function injectPostDescribeNotificationRule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.describeNotificationRule.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.describeNotificationRule.$post>,
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
    const mutationDefaults = getPostDescribeNotificationRuleMutationOptions<
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

export function getPostListEventTypesMutationKey() {
  return ['listEventTypes', '/listEventTypes', 'POST'] as const
}

export function getPostListEventTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listEventTypes.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.listEventTypes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListEventTypesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listEventTypes.$post>) {
      return parseResponse(client.listEventTypes.$post(args, options))
    },
  })
}

export function injectPostListEventTypes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listEventTypes.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.listEventTypes.$post>,
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
    const mutationDefaults = getPostListEventTypesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostListNotificationRulesMutationKey() {
  return ['listNotificationRules', '/listNotificationRules', 'POST'] as const
}

export function getPostListNotificationRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.listNotificationRules.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.listNotificationRules.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListNotificationRulesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listNotificationRules.$post>) {
      return parseResponse(client.listNotificationRules.$post(args, options))
    },
  })
}

export function injectPostListNotificationRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.listNotificationRules.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.listNotificationRules.$post>,
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
    const mutationDefaults = getPostListNotificationRulesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostListTagsForResourceMutationKey() {
  return ['listTagsForResource', '/listTagsForResource', 'POST'] as const
}

export function getPostListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listTagsForResource.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.listTagsForResource.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListTagsForResourceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listTagsForResource.$post>) {
      return parseResponse(client.listTagsForResource.$post(args, options))
    },
  })
}

export function injectPostListTagsForResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.listTagsForResource.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.listTagsForResource.$post>,
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
    const mutationDefaults = getPostListTagsForResourceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostListTargetsMutationKey() {
  return ['listTargets', '/listTargets', 'POST'] as const
}

export function getPostListTargetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listTargets.$post>>>>>,
    TError,
    InferRequestType<typeof client.listTargets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListTargetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listTargets.$post>) {
      return parseResponse(client.listTargets.$post(args, options))
    },
  })
}

export function injectPostListTargets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listTargets.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.listTargets.$post>,
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
    const mutationDefaults = getPostListTargetsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSubscribeMutationKey() {
  return ['subscribe', '/subscribe', 'POST'] as const
}

export function getPostSubscribeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscribe.$post>>>>>,
    TError,
    InferRequestType<typeof client.subscribe.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscribeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.subscribe.$post>) {
      return parseResponse(client.subscribe.$post(args, options))
    },
  })
}

export function injectPostSubscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscribe.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.subscribe.$post>,
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
    const mutationDefaults = getPostSubscribeMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostTagResourceMutationKey() {
  return ['tagResource', '/tagResource', 'POST'] as const
}

export function getPostTagResourceMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tagResource.$post>>>>>,
    TError,
    InferRequestType<typeof client.tagResource.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTagResourceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tagResource.$post>) {
      return parseResponse(client.tagResource.$post(args, options))
    },
  })
}

export function injectPostTagResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tagResource.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.tagResource.$post>,
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
    const mutationDefaults = getPostTagResourceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUnsubscribeMutationKey() {
  return ['unsubscribe', '/unsubscribe', 'POST'] as const
}

export function getPostUnsubscribeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.unsubscribe.$post>>>>>,
    TError,
    InferRequestType<typeof client.unsubscribe.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUnsubscribeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.unsubscribe.$post>) {
      return parseResponse(client.unsubscribe.$post(args, options))
    },
  })
}

export function injectPostUnsubscribe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.unsubscribe.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.unsubscribe.$post>,
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
    const mutationDefaults = getPostUnsubscribeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUntagResourceResourceArnTagKeysMutationKey() {
  return ['untagResource', '/untagResource/:resourceArn#tagKeys', 'POST'] as const
}

export function getPostUntagResourceResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.untagResource)[':resourceArn#tagKeys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.untagResource)[':resourceArn#tagKeys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUntagResourceResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.untagResource)[':resourceArn#tagKeys']['$post']>,
    ) {
      return parseResponse(client.untagResource[':resourceArn#tagKeys'].$post(args, options))
    },
  })
}

export function injectPostUntagResourceResourceArnTagKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.untagResource)[':resourceArn#tagKeys']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.untagResource)[':resourceArn#tagKeys']['$post']>,
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
    const mutationDefaults = getPostUntagResourceResourceArnTagKeysMutationOptions<
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

export function getPostUpdateNotificationRuleMutationKey() {
  return ['updateNotificationRule', '/updateNotificationRule', 'POST'] as const
}

export function getPostUpdateNotificationRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.updateNotificationRule.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.updateNotificationRule.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateNotificationRuleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.updateNotificationRule.$post>) {
      return parseResponse(client.updateNotificationRule.$post(args, options))
    },
  })
}

export function injectPostUpdateNotificationRule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.updateNotificationRule.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.updateNotificationRule.$post>,
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
    const mutationDefaults = getPostUpdateNotificationRuleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
