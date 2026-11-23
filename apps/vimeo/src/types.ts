type Endpoint = { methods: string[]; path: string }
type Category = {
  icon?:
    | {
        active: boolean
        link?: string | undefined
        resource_key: string
        sizes: {
          height: number | null
          link: string
          link_with_play_button?: string | undefined
          width: number
        }[]
        type: 'caution' | 'custom' | 'default'
        uri: string
      }
    | undefined
  last_video_featured_time: string
  link: string
  metadata: {
    connections: {
      channels: { options: string[]; total: number; uri: string }
      groups: { options: string[]; total: number; uri: string }
      users: { options: string[]; total: number; uri: string }
      videos: { options: string[]; total: number; uri: string }
    }
    interactions: { follow: { added: boolean; added_time: string | null; uri: string } }
  }
  name: string
  parent: { link: string; name: string; uri: string } | null
  pictures: {
    active: boolean
    link?: string | undefined
    resource_key: string
    sizes: {
      height: number | null
      link: string
      link_with_play_button?: string | undefined
      width: number
    }[]
    type: 'caution' | 'custom' | 'default'
    uri: string
  }
  resource_key: string
  subcategories?: { link: string; name: string; uri: string }[] | undefined
  top_level: boolean
  uri: string
}
type LegacyError = { error: string }
type Tag = {
  canonical: string
  metadata: { connections: { videos: { options: string[]; total: number; uri: string } } }
  name: string
  resource_key: string
  uri: string
}
type Channel = {
  categories: Category[]
  created_time: string
  description: string | null
  header: {
    active: boolean
    link?: string | undefined
    resource_key: string
    sizes: {
      height: number | null
      link: string
      link_with_play_button?: string | undefined
      width: number
    }[]
    type: 'caution' | 'custom' | 'default'
    uri: string
  }
  link: string
  metadata: {
    connections: {
      privacy_users: { options: string[]; total: number; uri: string }
      users: { options: string[]; total: number; uri: string }
      videos: { options: string[]; total: number; uri: string }
    }
    interactions: {
      add_moderators: { options: string[]; uri: string }
      add_to: { options: string[]; uri: string } | null
      follow: {
        added: boolean
        added_time: string | null
        type: 'moderator' | 'subscriber'
        uri: string
      }
      moderate_videos: { options: string[]; uri: string }
    } | null
  }
  modified_time: string
  name: string
  pictures: {
    active: boolean
    link?: string | undefined
    resource_key: string
    sizes: {
      height: number | null
      link: string
      link_with_play_button?: string | undefined
      width: number
    }[]
    type: 'caution' | 'custom' | 'default'
    uri: string
  }
  privacy: { view: 'anybody' | 'moderators' | 'users' }
  resource_key: string
  tags: Tag[]
  uri: string
  user: {
    account:
      | 'basic'
      | 'business'
      | 'live_business'
      | 'live_premium'
      | 'live_pro'
      | 'plus'
      | 'pro'
      | 'pro_unlimited'
      | 'producer'
    bio: string | null
    content_filter?: 'drugs' | 'language' | 'nudity' | 'safe' | 'unrated' | 'violence' | undefined
    created_time: string
    email?: string | undefined
    link: string
    location: string | null
    metadata: {
      connections: {
        albums: { options: string[]; total: number; uri: string }
        appearances: { options: string[]; total: number; uri: string }
        block: { options: string[]; total: number; uri: string }
        categories: { options: string[]; total: number; uri: string }
        channels: { options: string[]; total: number; uri: string }
        feed: { options: string[]; uri: string }
        folders: { options: string[]; total: number; uri: string }
        followers: { options: string[]; total: number; uri: string }
        following: { options: string[]; total: number; uri: string }
        groups: { options: string[]; total: number; uri: string }
        likes: { options: string[]; total: number; uri: string }
        moderated_channels: { options: string[]; total: number; uri: string }
        pictures: { options: string[]; total: number; uri: string }
        portfolios: { options: string[]; total: number; uri: string }
        recommended_channels: { options: string[]; total: number; uri: string }
        recommended_users: { options: string[]; total: number; uri: string }
        shared: { options: string[]; total: number; uri: string }
        videos: { options: string[]; total: number; uri: string }
        watched_videos: { options: string[]; total: number; uri: string }
        watchlater: { options: string[]; total: number; uri: string }
      }
      interactions: {
        add_privacy_user?: { options?: string[] | undefined; uri?: string | undefined } | undefined
        block: { added: boolean; added_time: string | null; options: string[]; uri: string }
        follow: { added: boolean; options: string[]; uri: string }
        report: { options: string[]; reason: string[]; uri: string }
      }
    }
    name: string
    pictures: {
      active: boolean
      link?: string | undefined
      resource_key: string
      sizes: {
        height: number | null
        link: string
        link_with_play_button?: string | undefined
        width: number
      }[]
      type: 'caution' | 'custom' | 'default'
      uri: string
    }
    preferences?:
      | {
          videos?:
            | {
                privacy?:
                  | {
                      add?: boolean | undefined
                      comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                      download?: boolean | undefined
                      embed?: 'private' | 'public' | 'whitelist' | undefined
                      view?:
                        | 'anybody'
                        | 'contacts'
                        | 'disable'
                        | 'nobody'
                        | 'password'
                        | 'unlisted'
                        | 'users'
                        | undefined
                    }
                  | undefined
              }
            | undefined
        }
      | undefined
    resource_key: string
    upload_quota: {
      lifetime: { free: number | null; max: number | null; used: number | null }
      periodic: {
        free: number | null
        max: number | null
        reset_date: string | null
        used: number | null
      }
      space: { free: number; max: number | null; showing: 'lifetime' | 'periodic'; used: number }
    }
    uri: string
    websites: { description: string | null; link: string; name: string | null }[]
  }
}
type Group = {
  created_time: string
  description: string | null
  link: string
  metadata: {
    connections: {
      users: { options: string[]; total: number; uri: string }
      videos: { options: string[]; total: number; uri: string }
    }
    interactions: {
      join: {
        added: boolean
        added_time: string | null
        title: string | null
        type: 'member' | 'moderator'
        uri: string
      }
    }
  }
  modified_time: string
  name: string
  pictures: {
    active: boolean
    link?: string | undefined
    resource_key: string
    sizes: {
      height: number | null
      link: string
      link_with_play_button?: string | undefined
      width: number
    }[]
    type: 'caution' | 'custom' | 'default'
    uri: string
  }
  privacy: {
    comment: 'all' | 'members'
    invite: 'all' | 'members'
    join: 'anybody' | 'members'
    videos: 'all' | 'members'
    view: 'anybody' | 'members'
  }
  resource_key: string
  uri: string
  user?:
    | {
        account:
          | 'basic'
          | 'business'
          | 'live_business'
          | 'live_premium'
          | 'live_pro'
          | 'plus'
          | 'pro'
          | 'pro_unlimited'
          | 'producer'
        bio: string | null
        content_filter?:
          | 'drugs'
          | 'language'
          | 'nudity'
          | 'safe'
          | 'unrated'
          | 'violence'
          | undefined
        created_time: string
        email?: string | undefined
        link: string
        location: string | null
        metadata: {
          connections: {
            albums: { options: string[]; total: number; uri: string }
            appearances: { options: string[]; total: number; uri: string }
            block: { options: string[]; total: number; uri: string }
            categories: { options: string[]; total: number; uri: string }
            channels: { options: string[]; total: number; uri: string }
            feed: { options: string[]; uri: string }
            folders: { options: string[]; total: number; uri: string }
            followers: { options: string[]; total: number; uri: string }
            following: { options: string[]; total: number; uri: string }
            groups: { options: string[]; total: number; uri: string }
            likes: { options: string[]; total: number; uri: string }
            moderated_channels: { options: string[]; total: number; uri: string }
            pictures: { options: string[]; total: number; uri: string }
            portfolios: { options: string[]; total: number; uri: string }
            recommended_channels: { options: string[]; total: number; uri: string }
            recommended_users: { options: string[]; total: number; uri: string }
            shared: { options: string[]; total: number; uri: string }
            videos: { options: string[]; total: number; uri: string }
            watched_videos: { options: string[]; total: number; uri: string }
            watchlater: { options: string[]; total: number; uri: string }
          }
          interactions: {
            add_privacy_user?:
              | { options?: string[] | undefined; uri?: string | undefined }
              | undefined
            block: { added: boolean; added_time: string | null; options: string[]; uri: string }
            follow: { added: boolean; options: string[]; uri: string }
            report: { options: string[]; reason: string[]; uri: string }
          }
        }
        name: string
        pictures: {
          active: boolean
          link?: string | undefined
          resource_key: string
          sizes: {
            height: number | null
            link: string
            link_with_play_button?: string | undefined
            width: number
          }[]
          type: 'caution' | 'custom' | 'default'
          uri: string
        }
        preferences?:
          | {
              videos?:
                | {
                    privacy?:
                      | {
                          add?: boolean | undefined
                          comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                          download?: boolean | undefined
                          embed?: 'private' | 'public' | 'whitelist' | undefined
                          view?:
                            | 'anybody'
                            | 'contacts'
                            | 'disable'
                            | 'nobody'
                            | 'password'
                            | 'unlisted'
                            | 'users'
                            | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        resource_key: string
        upload_quota: {
          lifetime: { free: number | null; max: number | null; used: number | null }
          periodic: {
            free: number | null
            max: number | null
            reset_date: string | null
            used: number | null
          }
          space: {
            free: number
            max: number | null
            showing: 'lifetime' | 'periodic'
            used: number
          }
        }
        uri: string
        websites: { description: string | null; link: string; name: string | null }[]
      }
    | undefined
}
type Video = {
  categories: Category[]
  content_rating: string[]
  context: {
    action: 'Added to' | 'Appearance by' | 'Liked by' | 'Uploaded by'
    resource: { [x: string]: unknown } | null
    resource_type: string
  }
  created_time: string
  description: string | null
  duration: number
  embed: {
    buttons: {
      embed: boolean
      fullscreen: boolean
      hd: boolean
      like: boolean
      scaling: boolean
      share: boolean
      watchlater: boolean
    }
    color: string
    logos: { custom: { active: boolean; link: string; sticky: boolean }; vimeo: boolean }
    playbar: boolean
    speed: boolean
    title: {
      name: 'hide' | 'show' | 'user'
      owner: 'hide' | 'show' | 'user'
      portrait: 'hide' | 'show' | 'user'
    }
    uri?: string | undefined
    volume: boolean
  }
  height: number
  language: string | null
  last_user_action_event_date?: (string | null) | undefined
  license: 'by' | 'by-nc' | 'by-nc-nd' | 'by-nc-sa' | 'by-nd' | 'by-sa' | 'cc0'
  link: string
  metadata: {
    connections: {
      available_albums: { options: string[]; total: number; uri: string }
      available_channels: { options: string[]; total: number; uri: string }
      comments: { options: string[]; total: number; uri: string }
      credits: {
        options?: string[] | undefined
        total?: number | undefined
        uri?: string | undefined
      } | null
      likes: { options: string[]; total: number; uri: string }
      ondemand: { options: string[]; resource_key: string; uri: string }
      pictures: { options: string[]; total: number; uri: string }
      playback: { options: string[]; uri: string }
      recommendations: { options?: string[] | undefined; uri?: string | undefined } | null
      related: { options?: string[] | undefined; uri?: string | undefined } | null
      season: { name: string; options: string[]; uri: string }
      texttracks: { options: string[]; total: number; uri: string }
      trailer: { options: string[]; resource_key: string; uri: string }
      users_with_access: { options: string[]; total: number; uri: string }
      versions: {
        current_uri?: string | undefined
        options: string[]
        resource_key?: string | undefined
        total: number
        uri: string
      }
    }
    interactions: {
      buy: {
        currency: string | null
        display_price: string | null
        download: 'available' | 'purchased' | 'restricted' | 'unavailable'
        drm: boolean
        link: string | null
        price: number | null
        purchase_time: string | null
        stream: 'available' | 'purchased' | 'restricted' | 'unavailable'
        uri: string | null
      } | null
      channel: { options: string[]; uri: string } | null
      like: { added: boolean; added_time: string; options: string[]; uri: string }
      rent: {
        currency: string | null
        display_price: string | null
        drm: boolean
        expires_time: string | null
        link: string | null
        price: number | null
        purchase_time: string | null
        stream: 'available' | 'purchased' | 'restricted' | 'unavailable'
        uri: string | null
      } | null
      report: { options: string[]; reason: string[]; uri: string }
      subscribe?:
        | ({
            drm?: boolean | undefined
            expires_time?: string | undefined
            purchase_time?: string | undefined
            stream?: string | undefined
          } | null)
        | undefined
      watched: { added: boolean; added_time: string; options: string[]; uri: string }
      watchlater: { added: boolean; added_time: string; options: string[]; uri: string }
    }
  }
  modified_time: string
  name: string
  parent_folder?:
    | {
        created_time: string
        metadata: { connections: { videos: { options: string[]; total: number; uri: string } } }
        modified_time: string
        name: string
        resource_key: string
        uri: string
        user: {
          account:
            | 'basic'
            | 'business'
            | 'live_business'
            | 'live_premium'
            | 'live_pro'
            | 'plus'
            | 'pro'
            | 'pro_unlimited'
            | 'producer'
          bio: string | null
          content_filter?:
            | 'drugs'
            | 'language'
            | 'nudity'
            | 'safe'
            | 'unrated'
            | 'violence'
            | undefined
          created_time: string
          email?: string | undefined
          link: string
          location: string | null
          metadata: {
            connections: {
              albums: { options: string[]; total: number; uri: string }
              appearances: { options: string[]; total: number; uri: string }
              block: { options: string[]; total: number; uri: string }
              categories: { options: string[]; total: number; uri: string }
              channels: { options: string[]; total: number; uri: string }
              feed: { options: string[]; uri: string }
              folders: { options: string[]; total: number; uri: string }
              followers: { options: string[]; total: number; uri: string }
              following: { options: string[]; total: number; uri: string }
              groups: { options: string[]; total: number; uri: string }
              likes: { options: string[]; total: number; uri: string }
              moderated_channels: { options: string[]; total: number; uri: string }
              pictures: { options: string[]; total: number; uri: string }
              portfolios: { options: string[]; total: number; uri: string }
              recommended_channels: { options: string[]; total: number; uri: string }
              recommended_users: { options: string[]; total: number; uri: string }
              shared: { options: string[]; total: number; uri: string }
              videos: { options: string[]; total: number; uri: string }
              watched_videos: { options: string[]; total: number; uri: string }
              watchlater: { options: string[]; total: number; uri: string }
            }
            interactions: {
              add_privacy_user?:
                | { options?: string[] | undefined; uri?: string | undefined }
                | undefined
              block: { added: boolean; added_time: string | null; options: string[]; uri: string }
              follow: { added: boolean; options: string[]; uri: string }
              report: { options: string[]; reason: string[]; uri: string }
            }
          }
          name: string
          pictures: {
            active: boolean
            link?: string | undefined
            resource_key: string
            sizes: {
              height: number | null
              link: string
              link_with_play_button?: string | undefined
              width: number
            }[]
            type: 'caution' | 'custom' | 'default'
            uri: string
          }
          preferences?:
            | {
                videos?:
                  | {
                      privacy?:
                        | {
                            add?: boolean | undefined
                            comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                            download?: boolean | undefined
                            embed?: 'private' | 'public' | 'whitelist' | undefined
                            view?:
                              | 'anybody'
                              | 'contacts'
                              | 'disable'
                              | 'nobody'
                              | 'password'
                              | 'unlisted'
                              | 'users'
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            | undefined
          resource_key: string
          upload_quota: {
            lifetime: { free: number | null; max: number | null; used: number | null }
            periodic: {
              free: number | null
              max: number | null
              reset_date: string | null
              used: number | null
            }
            space: {
              free: number
              max: number | null
              showing: 'lifetime' | 'periodic'
              used: number
            }
          }
          uri: string
          websites: { description: string | null; link: string; name: string | null }[]
        }
      }
    | undefined
  password?: string | undefined
  pictures: {
    active: boolean
    link?: string | undefined
    resource_key: string
    sizes: {
      height: number | null
      link: string
      link_with_play_button?: string | undefined
      width: number
    }[]
    type: 'caution' | 'custom' | 'default'
    uri: string
  }
  privacy: {
    add: boolean
    comments: 'anybody' | 'contacts' | 'nobody'
    download: boolean
    embed: 'private' | 'public'
    view: 'anybody' | 'contacts' | 'disable' | 'nobody' | 'password' | 'unlisted' | 'users'
  }
  release_time: string
  resource_key: string
  spatial: {
    director_timeline: {
      pitch?: number | undefined
      roll?: number | undefined
      time_code?: number | undefined
      yaw?: number | undefined
    }[]
    field_of_view: number | null
    projection: 'cubical' | 'cylindrical' | 'dome' | 'equirectangular' | 'pyramid'
    stereo_format: 'left-right' | 'mono' | 'top-bottom'
  }
  stats: { plays: number | null }
  status:
    | 'available'
    | 'quota_exceeded'
    | 'total_cap_exceeded'
    | 'transcode_starting'
    | 'transcoding'
    | 'transcoding_error'
    | 'unavailable'
    | 'uploading'
    | 'uploading_error'
  tags: Tag[]
  transcode: { status?: 'complete' | 'error' | 'in_progress' | undefined } | null
  type: 'live' | 'stock' | 'video'
  upload: {
    approach?: 'post' | 'pull' | 'streaming' | 'tus' | undefined
    complete_uri?: string | undefined
    form?: string | undefined
    link?: string | undefined
    redirect_url?: string | undefined
    size?: number | undefined
    status: 'complete' | 'error' | 'in_progress'
    upload_link?: string | undefined
  } | null
  uri: string
  user: {
    account:
      | 'basic'
      | 'business'
      | 'live_business'
      | 'live_premium'
      | 'live_pro'
      | 'plus'
      | 'pro'
      | 'pro_unlimited'
      | 'producer'
    bio: string | null
    content_filter?: 'drugs' | 'language' | 'nudity' | 'safe' | 'unrated' | 'violence' | undefined
    created_time: string
    email?: string | undefined
    link: string
    location: string | null
    metadata: {
      connections: {
        albums: { options: string[]; total: number; uri: string }
        appearances: { options: string[]; total: number; uri: string }
        block: { options: string[]; total: number; uri: string }
        categories: { options: string[]; total: number; uri: string }
        channels: { options: string[]; total: number; uri: string }
        feed: { options: string[]; uri: string }
        folders: { options: string[]; total: number; uri: string }
        followers: { options: string[]; total: number; uri: string }
        following: { options: string[]; total: number; uri: string }
        groups: { options: string[]; total: number; uri: string }
        likes: { options: string[]; total: number; uri: string }
        moderated_channels: { options: string[]; total: number; uri: string }
        pictures: { options: string[]; total: number; uri: string }
        portfolios: { options: string[]; total: number; uri: string }
        recommended_channels: { options: string[]; total: number; uri: string }
        recommended_users: { options: string[]; total: number; uri: string }
        shared: { options: string[]; total: number; uri: string }
        videos: { options: string[]; total: number; uri: string }
        watched_videos: { options: string[]; total: number; uri: string }
        watchlater: { options: string[]; total: number; uri: string }
      }
      interactions: {
        add_privacy_user?: { options?: string[] | undefined; uri?: string | undefined } | undefined
        block: { added: boolean; added_time: string | null; options: string[]; uri: string }
        follow: { added: boolean; options: string[]; uri: string }
        report: { options: string[]; reason: string[]; uri: string }
      }
    }
    name: string
    pictures: {
      active: boolean
      link?: string | undefined
      resource_key: string
      sizes: {
        height: number | null
        link: string
        link_with_play_button?: string | undefined
        width: number
      }[]
      type: 'caution' | 'custom' | 'default'
      uri: string
    }
    preferences?:
      | {
          videos?:
            | {
                privacy?:
                  | {
                      add?: boolean | undefined
                      comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                      download?: boolean | undefined
                      embed?: 'private' | 'public' | 'whitelist' | undefined
                      view?:
                        | 'anybody'
                        | 'contacts'
                        | 'disable'
                        | 'nobody'
                        | 'password'
                        | 'unlisted'
                        | 'users'
                        | undefined
                    }
                  | undefined
              }
            | undefined
        }
      | undefined
    resource_key: string
    upload_quota: {
      lifetime: { free: number | null; max: number | null; used: number | null }
      periodic: {
        free: number | null
        max: number | null
        reset_date: string | null
        used: number | null
      }
      space: { free: number; max: number | null; showing: 'lifetime' | 'periodic'; used: number }
    }
    uri: string
    websites: { description: string | null; link: string; name: string | null }[]
  }
  width: number
}
type Error = { developer_message: string; error: string; error_code: number; link: string }
type User = {
  account:
    | 'basic'
    | 'business'
    | 'live_business'
    | 'live_premium'
    | 'live_pro'
    | 'plus'
    | 'pro'
    | 'pro_unlimited'
    | 'producer'
  bio: string | null
  content_filter?: 'drugs' | 'language' | 'nudity' | 'safe' | 'unrated' | 'violence' | undefined
  created_time: string
  email?: string | undefined
  link: string
  location: string | null
  metadata: {
    connections: {
      albums: { options: string[]; total: number; uri: string }
      appearances: { options: string[]; total: number; uri: string }
      block: { options: string[]; total: number; uri: string }
      categories: { options: string[]; total: number; uri: string }
      channels: { options: string[]; total: number; uri: string }
      feed: { options: string[]; uri: string }
      folders: { options: string[]; total: number; uri: string }
      followers: { options: string[]; total: number; uri: string }
      following: { options: string[]; total: number; uri: string }
      groups: { options: string[]; total: number; uri: string }
      likes: { options: string[]; total: number; uri: string }
      moderated_channels: { options: string[]; total: number; uri: string }
      pictures: { options: string[]; total: number; uri: string }
      portfolios: { options: string[]; total: number; uri: string }
      recommended_channels: { options: string[]; total: number; uri: string }
      recommended_users: { options: string[]; total: number; uri: string }
      shared: { options: string[]; total: number; uri: string }
      videos: { options: string[]; total: number; uri: string }
      watched_videos: { options: string[]; total: number; uri: string }
      watchlater: { options: string[]; total: number; uri: string }
    }
    interactions: {
      add_privacy_user?: { options?: string[] | undefined; uri?: string | undefined } | undefined
      block: { added: boolean; added_time: string | null; options: string[]; uri: string }
      follow: { added: boolean; options: string[]; uri: string }
      report: { options: string[]; reason: string[]; uri: string }
    }
  }
  name: string
  pictures: {
    active: boolean
    link?: string | undefined
    resource_key: string
    sizes: {
      height: number | null
      link: string
      link_with_play_button?: string | undefined
      width: number
    }[]
    type: 'caution' | 'custom' | 'default'
    uri: string
  }
  preferences?:
    | {
        videos?:
          | {
              privacy?:
                | {
                    add?: boolean | undefined
                    comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                    download?: boolean | undefined
                    embed?: 'private' | 'public' | 'whitelist' | undefined
                    view?:
                      | 'anybody'
                      | 'contacts'
                      | 'disable'
                      | 'nobody'
                      | 'password'
                      | 'unlisted'
                      | 'users'
                      | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  resource_key: string
  upload_quota: {
    lifetime: { free: number | null; max: number | null; used: number | null }
    periodic: {
      free: number | null
      max: number | null
      reset_date: string | null
      used: number | null
    }
    space: { free: number; max: number | null; showing: 'lifetime' | 'periodic'; used: number }
  }
  uri: string
  websites: { description: string | null; link: string; name: string | null }[]
}
type Comment = {
  created_on: string
  metadata: { connections: { replies: { options: string[]; total: number; uri: string } } }
  resource_key: string
  text: string
  type: 'video'
  uri: string
  user: {
    account:
      | 'basic'
      | 'business'
      | 'live_business'
      | 'live_premium'
      | 'live_pro'
      | 'plus'
      | 'pro'
      | 'pro_unlimited'
      | 'producer'
    bio: string | null
    content_filter?: 'drugs' | 'language' | 'nudity' | 'safe' | 'unrated' | 'violence' | undefined
    created_time: string
    email?: string | undefined
    link: string
    location: string | null
    metadata: {
      connections: {
        albums: { options: string[]; total: number; uri: string }
        appearances: { options: string[]; total: number; uri: string }
        block: { options: string[]; total: number; uri: string }
        categories: { options: string[]; total: number; uri: string }
        channels: { options: string[]; total: number; uri: string }
        feed: { options: string[]; uri: string }
        folders: { options: string[]; total: number; uri: string }
        followers: { options: string[]; total: number; uri: string }
        following: { options: string[]; total: number; uri: string }
        groups: { options: string[]; total: number; uri: string }
        likes: { options: string[]; total: number; uri: string }
        moderated_channels: { options: string[]; total: number; uri: string }
        pictures: { options: string[]; total: number; uri: string }
        portfolios: { options: string[]; total: number; uri: string }
        recommended_channels: { options: string[]; total: number; uri: string }
        recommended_users: { options: string[]; total: number; uri: string }
        shared: { options: string[]; total: number; uri: string }
        videos: { options: string[]; total: number; uri: string }
        watched_videos: { options: string[]; total: number; uri: string }
        watchlater: { options: string[]; total: number; uri: string }
      }
      interactions: {
        add_privacy_user?: { options?: string[] | undefined; uri?: string | undefined } | undefined
        block: { added: boolean; added_time: string | null; options: string[]; uri: string }
        follow: { added: boolean; options: string[]; uri: string }
        report: { options: string[]; reason: string[]; uri: string }
      }
    }
    name: string
    pictures: {
      active: boolean
      link?: string | undefined
      resource_key: string
      sizes: {
        height: number | null
        link: string
        link_with_play_button?: string | undefined
        width: number
      }[]
      type: 'caution' | 'custom' | 'default'
      uri: string
    }
    preferences?:
      | {
          videos?:
            | {
                privacy?:
                  | {
                      add?: boolean | undefined
                      comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                      download?: boolean | undefined
                      embed?: 'private' | 'public' | 'whitelist' | undefined
                      view?:
                        | 'anybody'
                        | 'contacts'
                        | 'disable'
                        | 'nobody'
                        | 'password'
                        | 'unlisted'
                        | 'users'
                        | undefined
                    }
                  | undefined
              }
            | undefined
        }
      | undefined
    resource_key: string
    upload_quota: {
      lifetime: { free: number | null; max: number | null; used: number | null }
      periodic: {
        free: number | null
        max: number | null
        reset_date: string | null
        used: number | null
      }
      space: { free: number; max: number | null; showing: 'lifetime' | 'periodic'; used: number }
    }
    uri: string
    websites: { description: string | null; link: string; name: string | null }[]
  }
}
type Credit = {
  name: string
  role: string
  uri: string
  user?:
    | {
        account:
          | 'basic'
          | 'business'
          | 'live_business'
          | 'live_premium'
          | 'live_pro'
          | 'plus'
          | 'pro'
          | 'pro_unlimited'
          | 'producer'
        bio: string | null
        content_filter?:
          | 'drugs'
          | 'language'
          | 'nudity'
          | 'safe'
          | 'unrated'
          | 'violence'
          | undefined
        created_time: string
        email?: string | undefined
        link: string
        location: string | null
        metadata: {
          connections: {
            albums: { options: string[]; total: number; uri: string }
            appearances: { options: string[]; total: number; uri: string }
            block: { options: string[]; total: number; uri: string }
            categories: { options: string[]; total: number; uri: string }
            channels: { options: string[]; total: number; uri: string }
            feed: { options: string[]; uri: string }
            folders: { options: string[]; total: number; uri: string }
            followers: { options: string[]; total: number; uri: string }
            following: { options: string[]; total: number; uri: string }
            groups: { options: string[]; total: number; uri: string }
            likes: { options: string[]; total: number; uri: string }
            moderated_channels: { options: string[]; total: number; uri: string }
            pictures: { options: string[]; total: number; uri: string }
            portfolios: { options: string[]; total: number; uri: string }
            recommended_channels: { options: string[]; total: number; uri: string }
            recommended_users: { options: string[]; total: number; uri: string }
            shared: { options: string[]; total: number; uri: string }
            videos: { options: string[]; total: number; uri: string }
            watched_videos: { options: string[]; total: number; uri: string }
            watchlater: { options: string[]; total: number; uri: string }
          }
          interactions: {
            add_privacy_user?:
              | { options?: string[] | undefined; uri?: string | undefined }
              | undefined
            block: { added: boolean; added_time: string | null; options: string[]; uri: string }
            follow: { added: boolean; options: string[]; uri: string }
            report: { options: string[]; reason: string[]; uri: string }
          }
        }
        name: string
        pictures: {
          active: boolean
          link?: string | undefined
          resource_key: string
          sizes: {
            height: number | null
            link: string
            link_with_play_button?: string | undefined
            width: number
          }[]
          type: 'caution' | 'custom' | 'default'
          uri: string
        }
        preferences?:
          | {
              videos?:
                | {
                    privacy?:
                      | {
                          add?: boolean | undefined
                          comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                          download?: boolean | undefined
                          embed?: 'private' | 'public' | 'whitelist' | undefined
                          view?:
                            | 'anybody'
                            | 'contacts'
                            | 'disable'
                            | 'nobody'
                            | 'password'
                            | 'unlisted'
                            | 'users'
                            | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        resource_key: string
        upload_quota: {
          lifetime: { free: number | null; max: number | null; used: number | null }
          periodic: {
            free: number | null
            max: number | null
            reset_date: string | null
            used: number | null
          }
          space: {
            free: number
            max: number | null
            showing: 'lifetime' | 'periodic'
            used: number
          }
        }
        uri: string
        websites: { description: string | null; link: string; name: string | null }[]
      }
    | undefined
  video?:
    | {
        categories: Category[]
        content_rating: string[]
        context: {
          action: 'Added to' | 'Appearance by' | 'Liked by' | 'Uploaded by'
          resource: { [x: string]: unknown } | null
          resource_type: string
        }
        created_time: string
        description: string | null
        duration: number
        embed: {
          buttons: {
            embed: boolean
            fullscreen: boolean
            hd: boolean
            like: boolean
            scaling: boolean
            share: boolean
            watchlater: boolean
          }
          color: string
          logos: { custom: { active: boolean; link: string; sticky: boolean }; vimeo: boolean }
          playbar: boolean
          speed: boolean
          title: {
            name: 'hide' | 'show' | 'user'
            owner: 'hide' | 'show' | 'user'
            portrait: 'hide' | 'show' | 'user'
          }
          uri?: string | undefined
          volume: boolean
        }
        height: number
        language: string | null
        last_user_action_event_date?: (string | null) | undefined
        license: 'by' | 'by-nc' | 'by-nc-nd' | 'by-nc-sa' | 'by-nd' | 'by-sa' | 'cc0'
        link: string
        metadata: {
          connections: {
            available_albums: { options: string[]; total: number; uri: string }
            available_channels: { options: string[]; total: number; uri: string }
            comments: { options: string[]; total: number; uri: string }
            credits: {
              options?: string[] | undefined
              total?: number | undefined
              uri?: string | undefined
            } | null
            likes: { options: string[]; total: number; uri: string }
            ondemand: { options: string[]; resource_key: string; uri: string }
            pictures: { options: string[]; total: number; uri: string }
            playback: { options: string[]; uri: string }
            recommendations: { options?: string[] | undefined; uri?: string | undefined } | null
            related: { options?: string[] | undefined; uri?: string | undefined } | null
            season: { name: string; options: string[]; uri: string }
            texttracks: { options: string[]; total: number; uri: string }
            trailer: { options: string[]; resource_key: string; uri: string }
            users_with_access: { options: string[]; total: number; uri: string }
            versions: {
              current_uri?: string | undefined
              options: string[]
              resource_key?: string | undefined
              total: number
              uri: string
            }
          }
          interactions: {
            buy: {
              currency: string | null
              display_price: string | null
              download: 'available' | 'purchased' | 'restricted' | 'unavailable'
              drm: boolean
              link: string | null
              price: number | null
              purchase_time: string | null
              stream: 'available' | 'purchased' | 'restricted' | 'unavailable'
              uri: string | null
            } | null
            channel: { options: string[]; uri: string } | null
            like: { added: boolean; added_time: string; options: string[]; uri: string }
            rent: {
              currency: string | null
              display_price: string | null
              drm: boolean
              expires_time: string | null
              link: string | null
              price: number | null
              purchase_time: string | null
              stream: 'available' | 'purchased' | 'restricted' | 'unavailable'
              uri: string | null
            } | null
            report: { options: string[]; reason: string[]; uri: string }
            subscribe?:
              | ({
                  drm?: boolean | undefined
                  expires_time?: string | undefined
                  purchase_time?: string | undefined
                  stream?: string | undefined
                } | null)
              | undefined
            watched: { added: boolean; added_time: string; options: string[]; uri: string }
            watchlater: { added: boolean; added_time: string; options: string[]; uri: string }
          }
        }
        modified_time: string
        name: string
        parent_folder?:
          | {
              created_time: string
              metadata: {
                connections: { videos: { options: string[]; total: number; uri: string } }
              }
              modified_time: string
              name: string
              resource_key: string
              uri: string
              user: {
                account:
                  | 'basic'
                  | 'business'
                  | 'live_business'
                  | 'live_premium'
                  | 'live_pro'
                  | 'plus'
                  | 'pro'
                  | 'pro_unlimited'
                  | 'producer'
                bio: string | null
                content_filter?:
                  | 'drugs'
                  | 'language'
                  | 'nudity'
                  | 'safe'
                  | 'unrated'
                  | 'violence'
                  | undefined
                created_time: string
                email?: string | undefined
                link: string
                location: string | null
                metadata: {
                  connections: {
                    albums: { options: string[]; total: number; uri: string }
                    appearances: { options: string[]; total: number; uri: string }
                    block: { options: string[]; total: number; uri: string }
                    categories: { options: string[]; total: number; uri: string }
                    channels: { options: string[]; total: number; uri: string }
                    feed: { options: string[]; uri: string }
                    folders: { options: string[]; total: number; uri: string }
                    followers: { options: string[]; total: number; uri: string }
                    following: { options: string[]; total: number; uri: string }
                    groups: { options: string[]; total: number; uri: string }
                    likes: { options: string[]; total: number; uri: string }
                    moderated_channels: { options: string[]; total: number; uri: string }
                    pictures: { options: string[]; total: number; uri: string }
                    portfolios: { options: string[]; total: number; uri: string }
                    recommended_channels: { options: string[]; total: number; uri: string }
                    recommended_users: { options: string[]; total: number; uri: string }
                    shared: { options: string[]; total: number; uri: string }
                    videos: { options: string[]; total: number; uri: string }
                    watched_videos: { options: string[]; total: number; uri: string }
                    watchlater: { options: string[]; total: number; uri: string }
                  }
                  interactions: {
                    add_privacy_user?:
                      | { options?: string[] | undefined; uri?: string | undefined }
                      | undefined
                    block: {
                      added: boolean
                      added_time: string | null
                      options: string[]
                      uri: string
                    }
                    follow: { added: boolean; options: string[]; uri: string }
                    report: { options: string[]; reason: string[]; uri: string }
                  }
                }
                name: string
                pictures: {
                  active: boolean
                  link?: string | undefined
                  resource_key: string
                  sizes: {
                    height: number | null
                    link: string
                    link_with_play_button?: string | undefined
                    width: number
                  }[]
                  type: 'caution' | 'custom' | 'default'
                  uri: string
                }
                preferences?:
                  | {
                      videos?:
                        | {
                            privacy?:
                              | {
                                  add?: boolean | undefined
                                  comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                                  download?: boolean | undefined
                                  embed?: 'private' | 'public' | 'whitelist' | undefined
                                  view?:
                                    | 'anybody'
                                    | 'contacts'
                                    | 'disable'
                                    | 'nobody'
                                    | 'password'
                                    | 'unlisted'
                                    | 'users'
                                    | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                resource_key: string
                upload_quota: {
                  lifetime: { free: number | null; max: number | null; used: number | null }
                  periodic: {
                    free: number | null
                    max: number | null
                    reset_date: string | null
                    used: number | null
                  }
                  space: {
                    free: number
                    max: number | null
                    showing: 'lifetime' | 'periodic'
                    used: number
                  }
                }
                uri: string
                websites: { description: string | null; link: string; name: string | null }[]
              }
            }
          | undefined
        password?: string | undefined
        pictures: {
          active: boolean
          link?: string | undefined
          resource_key: string
          sizes: {
            height: number | null
            link: string
            link_with_play_button?: string | undefined
            width: number
          }[]
          type: 'caution' | 'custom' | 'default'
          uri: string
        }
        privacy: {
          add: boolean
          comments: 'anybody' | 'contacts' | 'nobody'
          download: boolean
          embed: 'private' | 'public'
          view: 'anybody' | 'contacts' | 'disable' | 'nobody' | 'password' | 'unlisted' | 'users'
        }
        release_time: string
        resource_key: string
        spatial: {
          director_timeline: {
            pitch?: number | undefined
            roll?: number | undefined
            time_code?: number | undefined
            yaw?: number | undefined
          }[]
          field_of_view: number | null
          projection: 'cubical' | 'cylindrical' | 'dome' | 'equirectangular' | 'pyramid'
          stereo_format: 'left-right' | 'mono' | 'top-bottom'
        }
        stats: { plays: number | null }
        status:
          | 'available'
          | 'quota_exceeded'
          | 'total_cap_exceeded'
          | 'transcode_starting'
          | 'transcoding'
          | 'transcoding_error'
          | 'unavailable'
          | 'uploading'
          | 'uploading_error'
        tags: Tag[]
        transcode: { status?: 'complete' | 'error' | 'in_progress' | undefined } | null
        type: 'live' | 'stock' | 'video'
        upload: {
          approach?: 'post' | 'pull' | 'streaming' | 'tus' | undefined
          complete_uri?: string | undefined
          form?: string | undefined
          link?: string | undefined
          redirect_url?: string | undefined
          size?: number | undefined
          status: 'complete' | 'error' | 'in_progress'
          upload_link?: string | undefined
        } | null
        uri: string
        user: {
          account:
            | 'basic'
            | 'business'
            | 'live_business'
            | 'live_premium'
            | 'live_pro'
            | 'plus'
            | 'pro'
            | 'pro_unlimited'
            | 'producer'
          bio: string | null
          content_filter?:
            | 'drugs'
            | 'language'
            | 'nudity'
            | 'safe'
            | 'unrated'
            | 'violence'
            | undefined
          created_time: string
          email?: string | undefined
          link: string
          location: string | null
          metadata: {
            connections: {
              albums: { options: string[]; total: number; uri: string }
              appearances: { options: string[]; total: number; uri: string }
              block: { options: string[]; total: number; uri: string }
              categories: { options: string[]; total: number; uri: string }
              channels: { options: string[]; total: number; uri: string }
              feed: { options: string[]; uri: string }
              folders: { options: string[]; total: number; uri: string }
              followers: { options: string[]; total: number; uri: string }
              following: { options: string[]; total: number; uri: string }
              groups: { options: string[]; total: number; uri: string }
              likes: { options: string[]; total: number; uri: string }
              moderated_channels: { options: string[]; total: number; uri: string }
              pictures: { options: string[]; total: number; uri: string }
              portfolios: { options: string[]; total: number; uri: string }
              recommended_channels: { options: string[]; total: number; uri: string }
              recommended_users: { options: string[]; total: number; uri: string }
              shared: { options: string[]; total: number; uri: string }
              videos: { options: string[]; total: number; uri: string }
              watched_videos: { options: string[]; total: number; uri: string }
              watchlater: { options: string[]; total: number; uri: string }
            }
            interactions: {
              add_privacy_user?:
                | { options?: string[] | undefined; uri?: string | undefined }
                | undefined
              block: { added: boolean; added_time: string | null; options: string[]; uri: string }
              follow: { added: boolean; options: string[]; uri: string }
              report: { options: string[]; reason: string[]; uri: string }
            }
          }
          name: string
          pictures: {
            active: boolean
            link?: string | undefined
            resource_key: string
            sizes: {
              height: number | null
              link: string
              link_with_play_button?: string | undefined
              width: number
            }[]
            type: 'caution' | 'custom' | 'default'
            uri: string
          }
          preferences?:
            | {
                videos?:
                  | {
                      privacy?:
                        | {
                            add?: boolean | undefined
                            comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                            download?: boolean | undefined
                            embed?: 'private' | 'public' | 'whitelist' | undefined
                            view?:
                              | 'anybody'
                              | 'contacts'
                              | 'disable'
                              | 'nobody'
                              | 'password'
                              | 'unlisted'
                              | 'users'
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            | undefined
          resource_key: string
          upload_quota: {
            lifetime: { free: number | null; max: number | null; used: number | null }
            periodic: {
              free: number | null
              max: number | null
              reset_date: string | null
              used: number | null
            }
            space: {
              free: number
              max: number | null
              showing: 'lifetime' | 'periodic'
              used: number
            }
          }
          uri: string
          websites: { description: string | null; link: string; name: string | null }[]
        }
        width: number
      }
    | undefined
}
type Picture = {
  active: boolean
  link?: string | undefined
  resource_key: string
  sizes: {
    height: number | null
    link: string
    link_with_play_button?: string | undefined
    width: number
  }[]
  type: 'caution' | 'custom' | 'default'
  uri: string
}
type TextTrack = {
  active: boolean
  hls_link: string
  hls_link_expires_time: string
  language: string | null
  link: string
  link_expires_time: string
  name: string | null
  type: 'captions' | 'subtitles'
  uri: string
}
type ContentRating = {
  code: 'drugs' | 'language' | 'nudity' | 'safe' | 'unrated' | 'violence'
  name: string
  uri: string | null
}
type CreativeCommons = {
  code: 'by' | 'by-nc' | 'by-nc-nd' | 'by-nc-sa' | 'by-nd' | 'by-sa' | 'cc0'
  name: string
  uri: string | null
}
type Language = { code: string; name: string }
type Album = {
  allow_continuous_play: boolean
  allow_downloads: boolean
  allow_share: boolean
  autoplay: boolean
  brand_color: string | null
  created_time: string
  custom_logo: {
    active: boolean
    link?: string | undefined
    resource_key: string
    sizes: {
      height: number | null
      link: string
      link_with_play_button?: string | undefined
      width: number
    }[]
    type: 'caution' | 'custom' | 'default'
    uri: string
  }
  description: string | null
  domain: string | null
  duration: number
  embed: { html: string | null }
  embed_brand_color: boolean | null
  embed_custom_logo: boolean | null
  hide_nav: boolean
  hide_vimeo_logo: boolean | null
  layout: 'grid' | 'player'
  link: string
  loop: boolean
  metadata: {
    connections: { videos: { options: string[]; total: number; uri: string } }
    interactions: {
      add_custom_thumbnails: { options: string[]; uri: string }
      add_logos: { options: string[]; uri: string }
      add_to: { options: string[]; uri: string } | null
      add_videos: { options: string[]; uri: string }
    } | null
  }
  modified_time: string
  name: string
  pictures: {
    active: boolean
    link?: string | undefined
    resource_key: string
    sizes: {
      height: number | null
      link: string
      link_with_play_button?: string | undefined
      width: number
    }[]
    type: 'caution' | 'custom' | 'default'
    uri: string
  }
  privacy: { password?: string | undefined; view: 'anybody' | 'embed_only' | 'password' }
  resource_key: string
  review_mode: boolean
  share_link: string
  sort:
    | 'added_first'
    | 'added_last'
    | 'alphabetical'
    | 'arranged'
    | 'comments'
    | 'likes'
    | 'newest'
    | 'oldest'
    | 'plays'
  theme: 'dark' | 'standard'
  uri: string
  url: string | null
  use_custom_domain: boolean
  user: {
    account:
      | 'basic'
      | 'business'
      | 'live_business'
      | 'live_premium'
      | 'live_pro'
      | 'plus'
      | 'pro'
      | 'pro_unlimited'
      | 'producer'
    bio: string | null
    content_filter?: 'drugs' | 'language' | 'nudity' | 'safe' | 'unrated' | 'violence' | undefined
    created_time: string
    email?: string | undefined
    link: string
    location: string | null
    metadata: {
      connections: {
        albums: { options: string[]; total: number; uri: string }
        appearances: { options: string[]; total: number; uri: string }
        block: { options: string[]; total: number; uri: string }
        categories: { options: string[]; total: number; uri: string }
        channels: { options: string[]; total: number; uri: string }
        feed: { options: string[]; uri: string }
        folders: { options: string[]; total: number; uri: string }
        followers: { options: string[]; total: number; uri: string }
        following: { options: string[]; total: number; uri: string }
        groups: { options: string[]; total: number; uri: string }
        likes: { options: string[]; total: number; uri: string }
        moderated_channels: { options: string[]; total: number; uri: string }
        pictures: { options: string[]; total: number; uri: string }
        portfolios: { options: string[]; total: number; uri: string }
        recommended_channels: { options: string[]; total: number; uri: string }
        recommended_users: { options: string[]; total: number; uri: string }
        shared: { options: string[]; total: number; uri: string }
        videos: { options: string[]; total: number; uri: string }
        watched_videos: { options: string[]; total: number; uri: string }
        watchlater: { options: string[]; total: number; uri: string }
      }
      interactions: {
        add_privacy_user?: { options?: string[] | undefined; uri?: string | undefined } | undefined
        block: { added: boolean; added_time: string | null; options: string[]; uri: string }
        follow: { added: boolean; options: string[]; uri: string }
        report: { options: string[]; reason: string[]; uri: string }
      }
    }
    name: string
    pictures: {
      active: boolean
      link?: string | undefined
      resource_key: string
      sizes: {
        height: number | null
        link: string
        link_with_play_button?: string | undefined
        width: number
      }[]
      type: 'caution' | 'custom' | 'default'
      uri: string
    }
    preferences?:
      | {
          videos?:
            | {
                privacy?:
                  | {
                      add?: boolean | undefined
                      comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                      download?: boolean | undefined
                      embed?: 'private' | 'public' | 'whitelist' | undefined
                      view?:
                        | 'anybody'
                        | 'contacts'
                        | 'disable'
                        | 'nobody'
                        | 'password'
                        | 'unlisted'
                        | 'users'
                        | undefined
                    }
                  | undefined
              }
            | undefined
        }
      | undefined
    resource_key: string
    upload_quota: {
      lifetime: { free: number | null; max: number | null; used: number | null }
      periodic: {
        free: number | null
        max: number | null
        reset_date: string | null
        used: number | null
      }
      space: { free: number; max: number | null; showing: 'lifetime' | 'periodic'; used: number }
    }
    uri: string
    websites: { description: string | null; link: string; name: string | null }[]
  }
  web_brand_color: boolean
  web_custom_logo: boolean
}
type Activity_3_1 = {
  category?:
    | {
        icon?:
          | {
              active: boolean
              link?: string | undefined
              resource_key: string
              sizes: {
                height: number | null
                link: string
                link_with_play_button?: string | undefined
                width: number
              }[]
              type: 'caution' | 'custom' | 'default'
              uri: string
            }
          | undefined
        last_video_featured_time: string
        link: string
        metadata: {
          connections: {
            channels: { options: string[]; total: number; uri: string }
            groups: { options: string[]; total: number; uri: string }
            users: { options: string[]; total: number; uri: string }
            videos: { options: string[]; total: number; uri: string }
          }
          interactions: { follow: { added: boolean; added_time: string | null; uri: string } }
        }
        name: string
        parent: { link: string; name: string; uri: string } | null
        pictures: {
          active: boolean
          link?: string | undefined
          resource_key: string
          sizes: {
            height: number | null
            link: string
            link_with_play_button?: string | undefined
            width: number
          }[]
          type: 'caution' | 'custom' | 'default'
          uri: string
        }
        resource_key: string
        subcategories?: { link: string; name: string; uri: string }[] | undefined
        top_level: boolean
        uri: string
      }
    | undefined
  channel?:
    | {
        categories: Category[]
        created_time: string
        description: string | null
        header: {
          active: boolean
          link?: string | undefined
          resource_key: string
          sizes: {
            height: number | null
            link: string
            link_with_play_button?: string | undefined
            width: number
          }[]
          type: 'caution' | 'custom' | 'default'
          uri: string
        }
        link: string
        metadata: {
          connections: {
            privacy_users: { options: string[]; total: number; uri: string }
            users: { options: string[]; total: number; uri: string }
            videos: { options: string[]; total: number; uri: string }
          }
          interactions: {
            add_moderators: { options: string[]; uri: string }
            add_to: { options: string[]; uri: string } | null
            follow: {
              added: boolean
              added_time: string | null
              type: 'moderator' | 'subscriber'
              uri: string
            }
            moderate_videos: { options: string[]; uri: string }
          } | null
        }
        modified_time: string
        name: string
        pictures: {
          active: boolean
          link?: string | undefined
          resource_key: string
          sizes: {
            height: number | null
            link: string
            link_with_play_button?: string | undefined
            width: number
          }[]
          type: 'caution' | 'custom' | 'default'
          uri: string
        }
        privacy: { view: 'anybody' | 'moderators' | 'users' }
        resource_key: string
        tags: Tag[]
        uri: string
        user: {
          account:
            | 'basic'
            | 'business'
            | 'live_business'
            | 'live_premium'
            | 'live_pro'
            | 'plus'
            | 'pro'
            | 'pro_unlimited'
            | 'producer'
          bio: string | null
          content_filter?:
            | 'drugs'
            | 'language'
            | 'nudity'
            | 'safe'
            | 'unrated'
            | 'violence'
            | undefined
          created_time: string
          email?: string | undefined
          link: string
          location: string | null
          metadata: {
            connections: {
              albums: { options: string[]; total: number; uri: string }
              appearances: { options: string[]; total: number; uri: string }
              block: { options: string[]; total: number; uri: string }
              categories: { options: string[]; total: number; uri: string }
              channels: { options: string[]; total: number; uri: string }
              feed: { options: string[]; uri: string }
              folders: { options: string[]; total: number; uri: string }
              followers: { options: string[]; total: number; uri: string }
              following: { options: string[]; total: number; uri: string }
              groups: { options: string[]; total: number; uri: string }
              likes: { options: string[]; total: number; uri: string }
              moderated_channels: { options: string[]; total: number; uri: string }
              pictures: { options: string[]; total: number; uri: string }
              portfolios: { options: string[]; total: number; uri: string }
              recommended_channels: { options: string[]; total: number; uri: string }
              recommended_users: { options: string[]; total: number; uri: string }
              shared: { options: string[]; total: number; uri: string }
              videos: { options: string[]; total: number; uri: string }
              watched_videos: { options: string[]; total: number; uri: string }
              watchlater: { options: string[]; total: number; uri: string }
            }
            interactions: {
              add_privacy_user?:
                | { options?: string[] | undefined; uri?: string | undefined }
                | undefined
              block: { added: boolean; added_time: string | null; options: string[]; uri: string }
              follow: { added: boolean; options: string[]; uri: string }
              report: { options: string[]; reason: string[]; uri: string }
            }
          }
          name: string
          pictures: {
            active: boolean
            link?: string | undefined
            resource_key: string
            sizes: {
              height: number | null
              link: string
              link_with_play_button?: string | undefined
              width: number
            }[]
            type: 'caution' | 'custom' | 'default'
            uri: string
          }
          preferences?:
            | {
                videos?:
                  | {
                      privacy?:
                        | {
                            add?: boolean | undefined
                            comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                            download?: boolean | undefined
                            embed?: 'private' | 'public' | 'whitelist' | undefined
                            view?:
                              | 'anybody'
                              | 'contacts'
                              | 'disable'
                              | 'nobody'
                              | 'password'
                              | 'unlisted'
                              | 'users'
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            | undefined
          resource_key: string
          upload_quota: {
            lifetime: { free: number | null; max: number | null; used: number | null }
            periodic: {
              free: number | null
              max: number | null
              reset_date: string | null
              used: number | null
            }
            space: {
              free: number
              max: number | null
              showing: 'lifetime' | 'periodic'
              used: number
            }
          }
          uri: string
          websites: { description: string | null; link: string; name: string | null }[]
        }
      }
    | undefined
  clip: {
    categories: Category[]
    content_rating: string[]
    context: {
      action: 'Added to' | 'Appearance by' | 'Liked by' | 'Uploaded by'
      resource: { [x: string]: unknown } | null
      resource_type: string
    }
    created_time: string
    description: string | null
    duration: number
    embed: {
      buttons: {
        embed: boolean
        fullscreen: boolean
        hd: boolean
        like: boolean
        scaling: boolean
        share: boolean
        watchlater: boolean
      }
      color: string
      logos: { custom: { active: boolean; link: string; sticky: boolean }; vimeo: boolean }
      playbar: boolean
      speed: boolean
      title: {
        name: 'hide' | 'show' | 'user'
        owner: 'hide' | 'show' | 'user'
        portrait: 'hide' | 'show' | 'user'
      }
      uri?: string | undefined
      volume: boolean
    }
    height: number
    language: string | null
    last_user_action_event_date?: (string | null) | undefined
    license: 'by' | 'by-nc' | 'by-nc-nd' | 'by-nc-sa' | 'by-nd' | 'by-sa' | 'cc0'
    link: string
    metadata: {
      connections: {
        available_albums: { options: string[]; total: number; uri: string }
        available_channels: { options: string[]; total: number; uri: string }
        comments: { options: string[]; total: number; uri: string }
        credits: {
          options?: string[] | undefined
          total?: number | undefined
          uri?: string | undefined
        } | null
        likes: { options: string[]; total: number; uri: string }
        ondemand: { options: string[]; resource_key: string; uri: string }
        pictures: { options: string[]; total: number; uri: string }
        playback: { options: string[]; uri: string }
        recommendations: { options?: string[] | undefined; uri?: string | undefined } | null
        related: { options?: string[] | undefined; uri?: string | undefined } | null
        season: { name: string; options: string[]; uri: string }
        texttracks: { options: string[]; total: number; uri: string }
        trailer: { options: string[]; resource_key: string; uri: string }
        users_with_access: { options: string[]; total: number; uri: string }
        versions: {
          current_uri?: string | undefined
          options: string[]
          resource_key?: string | undefined
          total: number
          uri: string
        }
      }
      interactions: {
        buy: {
          currency: string | null
          display_price: string | null
          download: 'available' | 'purchased' | 'restricted' | 'unavailable'
          drm: boolean
          link: string | null
          price: number | null
          purchase_time: string | null
          stream: 'available' | 'purchased' | 'restricted' | 'unavailable'
          uri: string | null
        } | null
        channel: { options: string[]; uri: string } | null
        like: { added: boolean; added_time: string; options: string[]; uri: string }
        rent: {
          currency: string | null
          display_price: string | null
          drm: boolean
          expires_time: string | null
          link: string | null
          price: number | null
          purchase_time: string | null
          stream: 'available' | 'purchased' | 'restricted' | 'unavailable'
          uri: string | null
        } | null
        report: { options: string[]; reason: string[]; uri: string }
        subscribe?:
          | ({
              drm?: boolean | undefined
              expires_time?: string | undefined
              purchase_time?: string | undefined
              stream?: string | undefined
            } | null)
          | undefined
        watched: { added: boolean; added_time: string; options: string[]; uri: string }
        watchlater: { added: boolean; added_time: string; options: string[]; uri: string }
      }
    }
    modified_time: string
    name: string
    parent_folder?:
      | {
          created_time: string
          metadata: { connections: { videos: { options: string[]; total: number; uri: string } } }
          modified_time: string
          name: string
          resource_key: string
          uri: string
          user: {
            account:
              | 'basic'
              | 'business'
              | 'live_business'
              | 'live_premium'
              | 'live_pro'
              | 'plus'
              | 'pro'
              | 'pro_unlimited'
              | 'producer'
            bio: string | null
            content_filter?:
              | 'drugs'
              | 'language'
              | 'nudity'
              | 'safe'
              | 'unrated'
              | 'violence'
              | undefined
            created_time: string
            email?: string | undefined
            link: string
            location: string | null
            metadata: {
              connections: {
                albums: { options: string[]; total: number; uri: string }
                appearances: { options: string[]; total: number; uri: string }
                block: { options: string[]; total: number; uri: string }
                categories: { options: string[]; total: number; uri: string }
                channels: { options: string[]; total: number; uri: string }
                feed: { options: string[]; uri: string }
                folders: { options: string[]; total: number; uri: string }
                followers: { options: string[]; total: number; uri: string }
                following: { options: string[]; total: number; uri: string }
                groups: { options: string[]; total: number; uri: string }
                likes: { options: string[]; total: number; uri: string }
                moderated_channels: { options: string[]; total: number; uri: string }
                pictures: { options: string[]; total: number; uri: string }
                portfolios: { options: string[]; total: number; uri: string }
                recommended_channels: { options: string[]; total: number; uri: string }
                recommended_users: { options: string[]; total: number; uri: string }
                shared: { options: string[]; total: number; uri: string }
                videos: { options: string[]; total: number; uri: string }
                watched_videos: { options: string[]; total: number; uri: string }
                watchlater: { options: string[]; total: number; uri: string }
              }
              interactions: {
                add_privacy_user?:
                  | { options?: string[] | undefined; uri?: string | undefined }
                  | undefined
                block: { added: boolean; added_time: string | null; options: string[]; uri: string }
                follow: { added: boolean; options: string[]; uri: string }
                report: { options: string[]; reason: string[]; uri: string }
              }
            }
            name: string
            pictures: {
              active: boolean
              link?: string | undefined
              resource_key: string
              sizes: {
                height: number | null
                link: string
                link_with_play_button?: string | undefined
                width: number
              }[]
              type: 'caution' | 'custom' | 'default'
              uri: string
            }
            preferences?:
              | {
                  videos?:
                    | {
                        privacy?:
                          | {
                              add?: boolean | undefined
                              comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                              download?: boolean | undefined
                              embed?: 'private' | 'public' | 'whitelist' | undefined
                              view?:
                                | 'anybody'
                                | 'contacts'
                                | 'disable'
                                | 'nobody'
                                | 'password'
                                | 'unlisted'
                                | 'users'
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
              | undefined
            resource_key: string
            upload_quota: {
              lifetime: { free: number | null; max: number | null; used: number | null }
              periodic: {
                free: number | null
                max: number | null
                reset_date: string | null
                used: number | null
              }
              space: {
                free: number
                max: number | null
                showing: 'lifetime' | 'periodic'
                used: number
              }
            }
            uri: string
            websites: { description: string | null; link: string; name: string | null }[]
          }
        }
      | undefined
    password?: string | undefined
    pictures: {
      active: boolean
      link?: string | undefined
      resource_key: string
      sizes: {
        height: number | null
        link: string
        link_with_play_button?: string | undefined
        width: number
      }[]
      type: 'caution' | 'custom' | 'default'
      uri: string
    }
    privacy: {
      add: boolean
      comments: 'anybody' | 'contacts' | 'nobody'
      download: boolean
      embed: 'private' | 'public'
      view: 'anybody' | 'contacts' | 'disable' | 'nobody' | 'password' | 'unlisted' | 'users'
    }
    release_time: string
    resource_key: string
    spatial: {
      director_timeline: {
        pitch?: number | undefined
        roll?: number | undefined
        time_code?: number | undefined
        yaw?: number | undefined
      }[]
      field_of_view: number | null
      projection: 'cubical' | 'cylindrical' | 'dome' | 'equirectangular' | 'pyramid'
      stereo_format: 'left-right' | 'mono' | 'top-bottom'
    }
    stats: { plays: number | null }
    status:
      | 'available'
      | 'quota_exceeded'
      | 'total_cap_exceeded'
      | 'transcode_starting'
      | 'transcoding'
      | 'transcoding_error'
      | 'unavailable'
      | 'uploading'
      | 'uploading_error'
    tags: Tag[]
    transcode: { status?: 'complete' | 'error' | 'in_progress' | undefined } | null
    type: 'live' | 'stock' | 'video'
    upload: {
      approach?: 'post' | 'pull' | 'streaming' | 'tus' | undefined
      complete_uri?: string | undefined
      form?: string | undefined
      link?: string | undefined
      redirect_url?: string | undefined
      size?: number | undefined
      status: 'complete' | 'error' | 'in_progress'
      upload_link?: string | undefined
    } | null
    uri: string
    user: {
      account:
        | 'basic'
        | 'business'
        | 'live_business'
        | 'live_premium'
        | 'live_pro'
        | 'plus'
        | 'pro'
        | 'pro_unlimited'
        | 'producer'
      bio: string | null
      content_filter?: 'drugs' | 'language' | 'nudity' | 'safe' | 'unrated' | 'violence' | undefined
      created_time: string
      email?: string | undefined
      link: string
      location: string | null
      metadata: {
        connections: {
          albums: { options: string[]; total: number; uri: string }
          appearances: { options: string[]; total: number; uri: string }
          block: { options: string[]; total: number; uri: string }
          categories: { options: string[]; total: number; uri: string }
          channels: { options: string[]; total: number; uri: string }
          feed: { options: string[]; uri: string }
          folders: { options: string[]; total: number; uri: string }
          followers: { options: string[]; total: number; uri: string }
          following: { options: string[]; total: number; uri: string }
          groups: { options: string[]; total: number; uri: string }
          likes: { options: string[]; total: number; uri: string }
          moderated_channels: { options: string[]; total: number; uri: string }
          pictures: { options: string[]; total: number; uri: string }
          portfolios: { options: string[]; total: number; uri: string }
          recommended_channels: { options: string[]; total: number; uri: string }
          recommended_users: { options: string[]; total: number; uri: string }
          shared: { options: string[]; total: number; uri: string }
          videos: { options: string[]; total: number; uri: string }
          watched_videos: { options: string[]; total: number; uri: string }
          watchlater: { options: string[]; total: number; uri: string }
        }
        interactions: {
          add_privacy_user?:
            | { options?: string[] | undefined; uri?: string | undefined }
            | undefined
          block: { added: boolean; added_time: string | null; options: string[]; uri: string }
          follow: { added: boolean; options: string[]; uri: string }
          report: { options: string[]; reason: string[]; uri: string }
        }
      }
      name: string
      pictures: {
        active: boolean
        link?: string | undefined
        resource_key: string
        sizes: {
          height: number | null
          link: string
          link_with_play_button?: string | undefined
          width: number
        }[]
        type: 'caution' | 'custom' | 'default'
        uri: string
      }
      preferences?:
        | {
            videos?:
              | {
                  privacy?:
                    | {
                        add?: boolean | undefined
                        comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                        download?: boolean | undefined
                        embed?: 'private' | 'public' | 'whitelist' | undefined
                        view?:
                          | 'anybody'
                          | 'contacts'
                          | 'disable'
                          | 'nobody'
                          | 'password'
                          | 'unlisted'
                          | 'users'
                          | undefined
                      }
                    | undefined
                }
              | undefined
          }
        | undefined
      resource_key: string
      upload_quota: {
        lifetime: { free: number | null; max: number | null; used: number | null }
        periodic: {
          free: number | null
          max: number | null
          reset_date: string | null
          used: number | null
        }
        space: { free: number; max: number | null; showing: 'lifetime' | 'periodic'; used: number }
      }
      uri: string
      websites: { description: string | null; link: string; name: string | null }[]
    }
    width: number
  }
  group?:
    | {
        created_time: string
        description: string | null
        link: string
        metadata: {
          connections: {
            users: { options: string[]; total: number; uri: string }
            videos: { options: string[]; total: number; uri: string }
          }
          interactions: {
            join: {
              added: boolean
              added_time: string | null
              title: string | null
              type: 'member' | 'moderator'
              uri: string
            }
          }
        }
        modified_time: string
        name: string
        pictures: {
          active: boolean
          link?: string | undefined
          resource_key: string
          sizes: {
            height: number | null
            link: string
            link_with_play_button?: string | undefined
            width: number
          }[]
          type: 'caution' | 'custom' | 'default'
          uri: string
        }
        privacy: {
          comment: 'all' | 'members'
          invite: 'all' | 'members'
          join: 'anybody' | 'members'
          videos: 'all' | 'members'
          view: 'anybody' | 'members'
        }
        resource_key: string
        uri: string
        user?:
          | {
              account:
                | 'basic'
                | 'business'
                | 'live_business'
                | 'live_premium'
                | 'live_pro'
                | 'plus'
                | 'pro'
                | 'pro_unlimited'
                | 'producer'
              bio: string | null
              content_filter?:
                | 'drugs'
                | 'language'
                | 'nudity'
                | 'safe'
                | 'unrated'
                | 'violence'
                | undefined
              created_time: string
              email?: string | undefined
              link: string
              location: string | null
              metadata: {
                connections: {
                  albums: { options: string[]; total: number; uri: string }
                  appearances: { options: string[]; total: number; uri: string }
                  block: { options: string[]; total: number; uri: string }
                  categories: { options: string[]; total: number; uri: string }
                  channels: { options: string[]; total: number; uri: string }
                  feed: { options: string[]; uri: string }
                  folders: { options: string[]; total: number; uri: string }
                  followers: { options: string[]; total: number; uri: string }
                  following: { options: string[]; total: number; uri: string }
                  groups: { options: string[]; total: number; uri: string }
                  likes: { options: string[]; total: number; uri: string }
                  moderated_channels: { options: string[]; total: number; uri: string }
                  pictures: { options: string[]; total: number; uri: string }
                  portfolios: { options: string[]; total: number; uri: string }
                  recommended_channels: { options: string[]; total: number; uri: string }
                  recommended_users: { options: string[]; total: number; uri: string }
                  shared: { options: string[]; total: number; uri: string }
                  videos: { options: string[]; total: number; uri: string }
                  watched_videos: { options: string[]; total: number; uri: string }
                  watchlater: { options: string[]; total: number; uri: string }
                }
                interactions: {
                  add_privacy_user?:
                    | { options?: string[] | undefined; uri?: string | undefined }
                    | undefined
                  block: {
                    added: boolean
                    added_time: string | null
                    options: string[]
                    uri: string
                  }
                  follow: { added: boolean; options: string[]; uri: string }
                  report: { options: string[]; reason: string[]; uri: string }
                }
              }
              name: string
              pictures: {
                active: boolean
                link?: string | undefined
                resource_key: string
                sizes: {
                  height: number | null
                  link: string
                  link_with_play_button?: string | undefined
                  width: number
                }[]
                type: 'caution' | 'custom' | 'default'
                uri: string
              }
              preferences?:
                | {
                    videos?:
                      | {
                          privacy?:
                            | {
                                add?: boolean | undefined
                                comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                                download?: boolean | undefined
                                embed?: 'private' | 'public' | 'whitelist' | undefined
                                view?:
                                  | 'anybody'
                                  | 'contacts'
                                  | 'disable'
                                  | 'nobody'
                                  | 'password'
                                  | 'unlisted'
                                  | 'users'
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              resource_key: string
              upload_quota: {
                lifetime: { free: number | null; max: number | null; used: number | null }
                periodic: {
                  free: number | null
                  max: number | null
                  reset_date: string | null
                  used: number | null
                }
                space: {
                  free: number
                  max: number | null
                  showing: 'lifetime' | 'periodic'
                  used: number
                }
              }
              uri: string
              websites: { description: string | null; link: string; name: string | null }[]
            }
          | undefined
      }
    | undefined
  metadata: { connections: { related: { options: string[]; uri: string } | null } }
  tag?:
    | {
        canonical: string
        metadata: { connections: { videos: { options: string[]; total: number; uri: string } } }
        name: string
        resource_key: string
        uri: string
      }
    | undefined
  time: string
  type:
    | 'appearance'
    | 'category'
    | 'channel'
    | 'facebook_feed'
    | 'group'
    | 'like'
    | 'ondemand'
    | 'share'
    | 'tag'
    | 'twitter_timeline'
    | 'upload'
  user?:
    | {
        account:
          | 'basic'
          | 'business'
          | 'live_business'
          | 'live_premium'
          | 'live_pro'
          | 'plus'
          | 'pro'
          | 'pro_unlimited'
          | 'producer'
        bio: string | null
        content_filter?:
          | 'drugs'
          | 'language'
          | 'nudity'
          | 'safe'
          | 'unrated'
          | 'violence'
          | undefined
        created_time: string
        email?: string | undefined
        link: string
        location: string | null
        metadata: {
          connections: {
            albums: { options: string[]; total: number; uri: string }
            appearances: { options: string[]; total: number; uri: string }
            block: { options: string[]; total: number; uri: string }
            categories: { options: string[]; total: number; uri: string }
            channels: { options: string[]; total: number; uri: string }
            feed: { options: string[]; uri: string }
            folders: { options: string[]; total: number; uri: string }
            followers: { options: string[]; total: number; uri: string }
            following: { options: string[]; total: number; uri: string }
            groups: { options: string[]; total: number; uri: string }
            likes: { options: string[]; total: number; uri: string }
            moderated_channels: { options: string[]; total: number; uri: string }
            pictures: { options: string[]; total: number; uri: string }
            portfolios: { options: string[]; total: number; uri: string }
            recommended_channels: { options: string[]; total: number; uri: string }
            recommended_users: { options: string[]; total: number; uri: string }
            shared: { options: string[]; total: number; uri: string }
            videos: { options: string[]; total: number; uri: string }
            watched_videos: { options: string[]; total: number; uri: string }
            watchlater: { options: string[]; total: number; uri: string }
          }
          interactions: {
            add_privacy_user?:
              | { options?: string[] | undefined; uri?: string | undefined }
              | undefined
            block: { added: boolean; added_time: string | null; options: string[]; uri: string }
            follow: { added: boolean; options: string[]; uri: string }
            report: { options: string[]; reason: string[]; uri: string }
          }
        }
        name: string
        pictures: {
          active: boolean
          link?: string | undefined
          resource_key: string
          sizes: {
            height: number | null
            link: string
            link_with_play_button?: string | undefined
            width: number
          }[]
          type: 'caution' | 'custom' | 'default'
          uri: string
        }
        preferences?:
          | {
              videos?:
                | {
                    privacy?:
                      | {
                          add?: boolean | undefined
                          comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                          download?: boolean | undefined
                          embed?: 'private' | 'public' | 'whitelist' | undefined
                          view?:
                            | 'anybody'
                            | 'contacts'
                            | 'disable'
                            | 'nobody'
                            | 'password'
                            | 'unlisted'
                            | 'users'
                            | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        resource_key: string
        upload_quota: {
          lifetime: { free: number | null; max: number | null; used: number | null }
          periodic: {
            free: number | null
            max: number | null
            reset_date: string | null
            used: number | null
          }
          space: {
            free: number
            max: number | null
            showing: 'lifetime' | 'periodic'
            used: number
          }
        }
        uri: string
        websites: { description: string | null; link: string; name: string | null }[]
      }
    | undefined
}
type OnDemandGenre = {
  canonical: string
  interactions: { page: { added: boolean; options: string[]; uri: string } }
  link: string
  metadata: { connections: { pages: { options: string[]; uri: string } } }
  name: string
  uri: string
}
type OnDemandPage = {
  background: {
    active: boolean
    link?: string | undefined
    resource_key: string
    sizes: {
      height: number | null
      link: string
      link_with_play_button?: string | undefined
      width: number
    }[]
    type: 'caution' | 'custom' | 'default'
    uri: string
  }
  colors: { primary: string; secondary: string }
  content_rating: string[]
  created_time?: string | undefined
  description: string | null
  domain_link: string | null
  episodes: {
    buy: { active: boolean; price: number | null }
    rent: {
      active: boolean
      period:
        | '1 day'
        | '1 month'
        | '1 week'
        | '1 year'
        | '2 day'
        | '24 hour'
        | '3 day'
        | '3 month'
        | '30 day'
        | '48 hour'
        | '6 month'
        | '60 day'
        | '7 day'
        | '72 hour'
      price: number | null
    }
  }
  film?:
    | {
        categories: Category[]
        content_rating: string[]
        context: {
          action: 'Added to' | 'Appearance by' | 'Liked by' | 'Uploaded by'
          resource: { [x: string]: unknown } | null
          resource_type: string
        }
        created_time: string
        description: string | null
        duration: number
        embed: {
          buttons: {
            embed: boolean
            fullscreen: boolean
            hd: boolean
            like: boolean
            scaling: boolean
            share: boolean
            watchlater: boolean
          }
          color: string
          logos: { custom: { active: boolean; link: string; sticky: boolean }; vimeo: boolean }
          playbar: boolean
          speed: boolean
          title: {
            name: 'hide' | 'show' | 'user'
            owner: 'hide' | 'show' | 'user'
            portrait: 'hide' | 'show' | 'user'
          }
          uri?: string | undefined
          volume: boolean
        }
        height: number
        language: string | null
        last_user_action_event_date?: (string | null) | undefined
        license: 'by' | 'by-nc' | 'by-nc-nd' | 'by-nc-sa' | 'by-nd' | 'by-sa' | 'cc0'
        link: string
        metadata: {
          connections: {
            available_albums: { options: string[]; total: number; uri: string }
            available_channels: { options: string[]; total: number; uri: string }
            comments: { options: string[]; total: number; uri: string }
            credits: {
              options?: string[] | undefined
              total?: number | undefined
              uri?: string | undefined
            } | null
            likes: { options: string[]; total: number; uri: string }
            ondemand: { options: string[]; resource_key: string; uri: string }
            pictures: { options: string[]; total: number; uri: string }
            playback: { options: string[]; uri: string }
            recommendations: { options?: string[] | undefined; uri?: string | undefined } | null
            related: { options?: string[] | undefined; uri?: string | undefined } | null
            season: { name: string; options: string[]; uri: string }
            texttracks: { options: string[]; total: number; uri: string }
            trailer: { options: string[]; resource_key: string; uri: string }
            users_with_access: { options: string[]; total: number; uri: string }
            versions: {
              current_uri?: string | undefined
              options: string[]
              resource_key?: string | undefined
              total: number
              uri: string
            }
          }
          interactions: {
            buy: {
              currency: string | null
              display_price: string | null
              download: 'available' | 'purchased' | 'restricted' | 'unavailable'
              drm: boolean
              link: string | null
              price: number | null
              purchase_time: string | null
              stream: 'available' | 'purchased' | 'restricted' | 'unavailable'
              uri: string | null
            } | null
            channel: { options: string[]; uri: string } | null
            like: { added: boolean; added_time: string; options: string[]; uri: string }
            rent: {
              currency: string | null
              display_price: string | null
              drm: boolean
              expires_time: string | null
              link: string | null
              price: number | null
              purchase_time: string | null
              stream: 'available' | 'purchased' | 'restricted' | 'unavailable'
              uri: string | null
            } | null
            report: { options: string[]; reason: string[]; uri: string }
            subscribe?:
              | ({
                  drm?: boolean | undefined
                  expires_time?: string | undefined
                  purchase_time?: string | undefined
                  stream?: string | undefined
                } | null)
              | undefined
            watched: { added: boolean; added_time: string; options: string[]; uri: string }
            watchlater: { added: boolean; added_time: string; options: string[]; uri: string }
          }
        }
        modified_time: string
        name: string
        parent_folder?:
          | {
              created_time: string
              metadata: {
                connections: { videos: { options: string[]; total: number; uri: string } }
              }
              modified_time: string
              name: string
              resource_key: string
              uri: string
              user: {
                account:
                  | 'basic'
                  | 'business'
                  | 'live_business'
                  | 'live_premium'
                  | 'live_pro'
                  | 'plus'
                  | 'pro'
                  | 'pro_unlimited'
                  | 'producer'
                bio: string | null
                content_filter?:
                  | 'drugs'
                  | 'language'
                  | 'nudity'
                  | 'safe'
                  | 'unrated'
                  | 'violence'
                  | undefined
                created_time: string
                email?: string | undefined
                link: string
                location: string | null
                metadata: {
                  connections: {
                    albums: { options: string[]; total: number; uri: string }
                    appearances: { options: string[]; total: number; uri: string }
                    block: { options: string[]; total: number; uri: string }
                    categories: { options: string[]; total: number; uri: string }
                    channels: { options: string[]; total: number; uri: string }
                    feed: { options: string[]; uri: string }
                    folders: { options: string[]; total: number; uri: string }
                    followers: { options: string[]; total: number; uri: string }
                    following: { options: string[]; total: number; uri: string }
                    groups: { options: string[]; total: number; uri: string }
                    likes: { options: string[]; total: number; uri: string }
                    moderated_channels: { options: string[]; total: number; uri: string }
                    pictures: { options: string[]; total: number; uri: string }
                    portfolios: { options: string[]; total: number; uri: string }
                    recommended_channels: { options: string[]; total: number; uri: string }
                    recommended_users: { options: string[]; total: number; uri: string }
                    shared: { options: string[]; total: number; uri: string }
                    videos: { options: string[]; total: number; uri: string }
                    watched_videos: { options: string[]; total: number; uri: string }
                    watchlater: { options: string[]; total: number; uri: string }
                  }
                  interactions: {
                    add_privacy_user?:
                      | { options?: string[] | undefined; uri?: string | undefined }
                      | undefined
                    block: {
                      added: boolean
                      added_time: string | null
                      options: string[]
                      uri: string
                    }
                    follow: { added: boolean; options: string[]; uri: string }
                    report: { options: string[]; reason: string[]; uri: string }
                  }
                }
                name: string
                pictures: {
                  active: boolean
                  link?: string | undefined
                  resource_key: string
                  sizes: {
                    height: number | null
                    link: string
                    link_with_play_button?: string | undefined
                    width: number
                  }[]
                  type: 'caution' | 'custom' | 'default'
                  uri: string
                }
                preferences?:
                  | {
                      videos?:
                        | {
                            privacy?:
                              | {
                                  add?: boolean | undefined
                                  comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                                  download?: boolean | undefined
                                  embed?: 'private' | 'public' | 'whitelist' | undefined
                                  view?:
                                    | 'anybody'
                                    | 'contacts'
                                    | 'disable'
                                    | 'nobody'
                                    | 'password'
                                    | 'unlisted'
                                    | 'users'
                                    | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                resource_key: string
                upload_quota: {
                  lifetime: { free: number | null; max: number | null; used: number | null }
                  periodic: {
                    free: number | null
                    max: number | null
                    reset_date: string | null
                    used: number | null
                  }
                  space: {
                    free: number
                    max: number | null
                    showing: 'lifetime' | 'periodic'
                    used: number
                  }
                }
                uri: string
                websites: { description: string | null; link: string; name: string | null }[]
              }
            }
          | undefined
        password?: string | undefined
        pictures: {
          active: boolean
          link?: string | undefined
          resource_key: string
          sizes: {
            height: number | null
            link: string
            link_with_play_button?: string | undefined
            width: number
          }[]
          type: 'caution' | 'custom' | 'default'
          uri: string
        }
        privacy: {
          add: boolean
          comments: 'anybody' | 'contacts' | 'nobody'
          download: boolean
          embed: 'private' | 'public'
          view: 'anybody' | 'contacts' | 'disable' | 'nobody' | 'password' | 'unlisted' | 'users'
        }
        release_time: string
        resource_key: string
        spatial: {
          director_timeline: {
            pitch?: number | undefined
            roll?: number | undefined
            time_code?: number | undefined
            yaw?: number | undefined
          }[]
          field_of_view: number | null
          projection: 'cubical' | 'cylindrical' | 'dome' | 'equirectangular' | 'pyramid'
          stereo_format: 'left-right' | 'mono' | 'top-bottom'
        }
        stats: { plays: number | null }
        status:
          | 'available'
          | 'quota_exceeded'
          | 'total_cap_exceeded'
          | 'transcode_starting'
          | 'transcoding'
          | 'transcoding_error'
          | 'unavailable'
          | 'uploading'
          | 'uploading_error'
        tags: Tag[]
        transcode: { status?: 'complete' | 'error' | 'in_progress' | undefined } | null
        type: 'live' | 'stock' | 'video'
        upload: {
          approach?: 'post' | 'pull' | 'streaming' | 'tus' | undefined
          complete_uri?: string | undefined
          form?: string | undefined
          link?: string | undefined
          redirect_url?: string | undefined
          size?: number | undefined
          status: 'complete' | 'error' | 'in_progress'
          upload_link?: string | undefined
        } | null
        uri: string
        user: {
          account:
            | 'basic'
            | 'business'
            | 'live_business'
            | 'live_premium'
            | 'live_pro'
            | 'plus'
            | 'pro'
            | 'pro_unlimited'
            | 'producer'
          bio: string | null
          content_filter?:
            | 'drugs'
            | 'language'
            | 'nudity'
            | 'safe'
            | 'unrated'
            | 'violence'
            | undefined
          created_time: string
          email?: string | undefined
          link: string
          location: string | null
          metadata: {
            connections: {
              albums: { options: string[]; total: number; uri: string }
              appearances: { options: string[]; total: number; uri: string }
              block: { options: string[]; total: number; uri: string }
              categories: { options: string[]; total: number; uri: string }
              channels: { options: string[]; total: number; uri: string }
              feed: { options: string[]; uri: string }
              folders: { options: string[]; total: number; uri: string }
              followers: { options: string[]; total: number; uri: string }
              following: { options: string[]; total: number; uri: string }
              groups: { options: string[]; total: number; uri: string }
              likes: { options: string[]; total: number; uri: string }
              moderated_channels: { options: string[]; total: number; uri: string }
              pictures: { options: string[]; total: number; uri: string }
              portfolios: { options: string[]; total: number; uri: string }
              recommended_channels: { options: string[]; total: number; uri: string }
              recommended_users: { options: string[]; total: number; uri: string }
              shared: { options: string[]; total: number; uri: string }
              videos: { options: string[]; total: number; uri: string }
              watched_videos: { options: string[]; total: number; uri: string }
              watchlater: { options: string[]; total: number; uri: string }
            }
            interactions: {
              add_privacy_user?:
                | { options?: string[] | undefined; uri?: string | undefined }
                | undefined
              block: { added: boolean; added_time: string | null; options: string[]; uri: string }
              follow: { added: boolean; options: string[]; uri: string }
              report: { options: string[]; reason: string[]; uri: string }
            }
          }
          name: string
          pictures: {
            active: boolean
            link?: string | undefined
            resource_key: string
            sizes: {
              height: number | null
              link: string
              link_with_play_button?: string | undefined
              width: number
            }[]
            type: 'caution' | 'custom' | 'default'
            uri: string
          }
          preferences?:
            | {
                videos?:
                  | {
                      privacy?:
                        | {
                            add?: boolean | undefined
                            comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                            download?: boolean | undefined
                            embed?: 'private' | 'public' | 'whitelist' | undefined
                            view?:
                              | 'anybody'
                              | 'contacts'
                              | 'disable'
                              | 'nobody'
                              | 'password'
                              | 'unlisted'
                              | 'users'
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            | undefined
          resource_key: string
          upload_quota: {
            lifetime: { free: number | null; max: number | null; used: number | null }
            periodic: {
              free: number | null
              max: number | null
              reset_date: string | null
              used: number | null
            }
            space: {
              free: number
              max: number | null
              showing: 'lifetime' | 'periodic'
              used: number
            }
          }
          uri: string
          websites: { description: string | null; link: string; name: string | null }[]
        }
        width: number
      }
    | undefined
  genres: OnDemandGenre[]
  link: string
  metadata: {
    connections: {
      metadata: {
        connections: {
          comments: { options: string[]; total: number; uri: string }
          genres: { options: string[]; total: number; uri: string }
          likes: { options: string[]; total: number; uri: string }
          pictures: { options: string[]; total: number; uri: string }
          seasons: { options: string[]; total: number; uri: string }
          videos: {
            extra_total: number
            main_total: number
            options: string[]
            total: number
            uri: string
            viewable_total: number
          }
        }
      }
    }
    interactions: {
      buy?: ({ drm?: boolean | undefined } | null) | undefined
      rent?: ({ [x: string]: unknown } | null) | undefined
      subscribe?:
        | ({
            drm?: boolean | undefined
            expires_time?: (string | null) | undefined
            link?: (string | null) | undefined
            purchase_time?: (string | null) | undefined
            stream?: 'available' | 'purchased' | 'restricted' | 'unavailable' | undefined
            uri?: (string | null) | undefined
          } | null)
        | undefined
    }
  }
  modified_time?: string | undefined
  name: string
  pictures: {
    active: boolean
    link?: string | undefined
    resource_key: string
    sizes: {
      height: number | null
      link: string
      link_with_play_button?: string | undefined
      width: number
    }[]
    type: 'caution' | 'custom' | 'default'
    uri: string
  }
  preorder: { active: boolean; cancel_time: string; publish_time: string; time: string }
  published: { enabled: boolean; time: string }
  rating: number | null
  resource_key: string
  sku?: (string | null) | undefined
  subscription: {
    active: boolean
    link: string | null
    period?: string | undefined
    price: { [x: string]: unknown }
  } | null
  theme: string
  thumbnail: {
    active: boolean
    link?: string | undefined
    resource_key: string
    sizes: {
      height: number | null
      link: string
      link_with_play_button?: string | undefined
      width: number
    }[]
    type: 'caution' | 'custom' | 'default'
    uri: string
  }
  trailer: {
    categories: Category[]
    content_rating: string[]
    context: {
      action: 'Added to' | 'Appearance by' | 'Liked by' | 'Uploaded by'
      resource: { [x: string]: unknown } | null
      resource_type: string
    }
    created_time: string
    description: string | null
    duration: number
    embed: {
      buttons: {
        embed: boolean
        fullscreen: boolean
        hd: boolean
        like: boolean
        scaling: boolean
        share: boolean
        watchlater: boolean
      }
      color: string
      logos: { custom: { active: boolean; link: string; sticky: boolean }; vimeo: boolean }
      playbar: boolean
      speed: boolean
      title: {
        name: 'hide' | 'show' | 'user'
        owner: 'hide' | 'show' | 'user'
        portrait: 'hide' | 'show' | 'user'
      }
      uri?: string | undefined
      volume: boolean
    }
    height: number
    language: string | null
    last_user_action_event_date?: (string | null) | undefined
    license: 'by' | 'by-nc' | 'by-nc-nd' | 'by-nc-sa' | 'by-nd' | 'by-sa' | 'cc0'
    link: string
    metadata: {
      connections: {
        available_albums: { options: string[]; total: number; uri: string }
        available_channels: { options: string[]; total: number; uri: string }
        comments: { options: string[]; total: number; uri: string }
        credits: {
          options?: string[] | undefined
          total?: number | undefined
          uri?: string | undefined
        } | null
        likes: { options: string[]; total: number; uri: string }
        ondemand: { options: string[]; resource_key: string; uri: string }
        pictures: { options: string[]; total: number; uri: string }
        playback: { options: string[]; uri: string }
        recommendations: { options?: string[] | undefined; uri?: string | undefined } | null
        related: { options?: string[] | undefined; uri?: string | undefined } | null
        season: { name: string; options: string[]; uri: string }
        texttracks: { options: string[]; total: number; uri: string }
        trailer: { options: string[]; resource_key: string; uri: string }
        users_with_access: { options: string[]; total: number; uri: string }
        versions: {
          current_uri?: string | undefined
          options: string[]
          resource_key?: string | undefined
          total: number
          uri: string
        }
      }
      interactions: {
        buy: {
          currency: string | null
          display_price: string | null
          download: 'available' | 'purchased' | 'restricted' | 'unavailable'
          drm: boolean
          link: string | null
          price: number | null
          purchase_time: string | null
          stream: 'available' | 'purchased' | 'restricted' | 'unavailable'
          uri: string | null
        } | null
        channel: { options: string[]; uri: string } | null
        like: { added: boolean; added_time: string; options: string[]; uri: string }
        rent: {
          currency: string | null
          display_price: string | null
          drm: boolean
          expires_time: string | null
          link: string | null
          price: number | null
          purchase_time: string | null
          stream: 'available' | 'purchased' | 'restricted' | 'unavailable'
          uri: string | null
        } | null
        report: { options: string[]; reason: string[]; uri: string }
        subscribe?:
          | ({
              drm?: boolean | undefined
              expires_time?: string | undefined
              purchase_time?: string | undefined
              stream?: string | undefined
            } | null)
          | undefined
        watched: { added: boolean; added_time: string; options: string[]; uri: string }
        watchlater: { added: boolean; added_time: string; options: string[]; uri: string }
      }
    }
    modified_time: string
    name: string
    parent_folder?:
      | {
          created_time: string
          metadata: { connections: { videos: { options: string[]; total: number; uri: string } } }
          modified_time: string
          name: string
          resource_key: string
          uri: string
          user: {
            account:
              | 'basic'
              | 'business'
              | 'live_business'
              | 'live_premium'
              | 'live_pro'
              | 'plus'
              | 'pro'
              | 'pro_unlimited'
              | 'producer'
            bio: string | null
            content_filter?:
              | 'drugs'
              | 'language'
              | 'nudity'
              | 'safe'
              | 'unrated'
              | 'violence'
              | undefined
            created_time: string
            email?: string | undefined
            link: string
            location: string | null
            metadata: {
              connections: {
                albums: { options: string[]; total: number; uri: string }
                appearances: { options: string[]; total: number; uri: string }
                block: { options: string[]; total: number; uri: string }
                categories: { options: string[]; total: number; uri: string }
                channels: { options: string[]; total: number; uri: string }
                feed: { options: string[]; uri: string }
                folders: { options: string[]; total: number; uri: string }
                followers: { options: string[]; total: number; uri: string }
                following: { options: string[]; total: number; uri: string }
                groups: { options: string[]; total: number; uri: string }
                likes: { options: string[]; total: number; uri: string }
                moderated_channels: { options: string[]; total: number; uri: string }
                pictures: { options: string[]; total: number; uri: string }
                portfolios: { options: string[]; total: number; uri: string }
                recommended_channels: { options: string[]; total: number; uri: string }
                recommended_users: { options: string[]; total: number; uri: string }
                shared: { options: string[]; total: number; uri: string }
                videos: { options: string[]; total: number; uri: string }
                watched_videos: { options: string[]; total: number; uri: string }
                watchlater: { options: string[]; total: number; uri: string }
              }
              interactions: {
                add_privacy_user?:
                  | { options?: string[] | undefined; uri?: string | undefined }
                  | undefined
                block: { added: boolean; added_time: string | null; options: string[]; uri: string }
                follow: { added: boolean; options: string[]; uri: string }
                report: { options: string[]; reason: string[]; uri: string }
              }
            }
            name: string
            pictures: {
              active: boolean
              link?: string | undefined
              resource_key: string
              sizes: {
                height: number | null
                link: string
                link_with_play_button?: string | undefined
                width: number
              }[]
              type: 'caution' | 'custom' | 'default'
              uri: string
            }
            preferences?:
              | {
                  videos?:
                    | {
                        privacy?:
                          | {
                              add?: boolean | undefined
                              comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                              download?: boolean | undefined
                              embed?: 'private' | 'public' | 'whitelist' | undefined
                              view?:
                                | 'anybody'
                                | 'contacts'
                                | 'disable'
                                | 'nobody'
                                | 'password'
                                | 'unlisted'
                                | 'users'
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
              | undefined
            resource_key: string
            upload_quota: {
              lifetime: { free: number | null; max: number | null; used: number | null }
              periodic: {
                free: number | null
                max: number | null
                reset_date: string | null
                used: number | null
              }
              space: {
                free: number
                max: number | null
                showing: 'lifetime' | 'periodic'
                used: number
              }
            }
            uri: string
            websites: { description: string | null; link: string; name: string | null }[]
          }
        }
      | undefined
    password?: string | undefined
    pictures: {
      active: boolean
      link?: string | undefined
      resource_key: string
      sizes: {
        height: number | null
        link: string
        link_with_play_button?: string | undefined
        width: number
      }[]
      type: 'caution' | 'custom' | 'default'
      uri: string
    }
    privacy: {
      add: boolean
      comments: 'anybody' | 'contacts' | 'nobody'
      download: boolean
      embed: 'private' | 'public'
      view: 'anybody' | 'contacts' | 'disable' | 'nobody' | 'password' | 'unlisted' | 'users'
    }
    release_time: string
    resource_key: string
    spatial: {
      director_timeline: {
        pitch?: number | undefined
        roll?: number | undefined
        time_code?: number | undefined
        yaw?: number | undefined
      }[]
      field_of_view: number | null
      projection: 'cubical' | 'cylindrical' | 'dome' | 'equirectangular' | 'pyramid'
      stereo_format: 'left-right' | 'mono' | 'top-bottom'
    }
    stats: { plays: number | null }
    status:
      | 'available'
      | 'quota_exceeded'
      | 'total_cap_exceeded'
      | 'transcode_starting'
      | 'transcoding'
      | 'transcoding_error'
      | 'unavailable'
      | 'uploading'
      | 'uploading_error'
    tags: Tag[]
    transcode: { status?: 'complete' | 'error' | 'in_progress' | undefined } | null
    type: 'live' | 'stock' | 'video'
    upload: {
      approach?: 'post' | 'pull' | 'streaming' | 'tus' | undefined
      complete_uri?: string | undefined
      form?: string | undefined
      link?: string | undefined
      redirect_url?: string | undefined
      size?: number | undefined
      status: 'complete' | 'error' | 'in_progress'
      upload_link?: string | undefined
    } | null
    uri: string
    user: {
      account:
        | 'basic'
        | 'business'
        | 'live_business'
        | 'live_premium'
        | 'live_pro'
        | 'plus'
        | 'pro'
        | 'pro_unlimited'
        | 'producer'
      bio: string | null
      content_filter?: 'drugs' | 'language' | 'nudity' | 'safe' | 'unrated' | 'violence' | undefined
      created_time: string
      email?: string | undefined
      link: string
      location: string | null
      metadata: {
        connections: {
          albums: { options: string[]; total: number; uri: string }
          appearances: { options: string[]; total: number; uri: string }
          block: { options: string[]; total: number; uri: string }
          categories: { options: string[]; total: number; uri: string }
          channels: { options: string[]; total: number; uri: string }
          feed: { options: string[]; uri: string }
          folders: { options: string[]; total: number; uri: string }
          followers: { options: string[]; total: number; uri: string }
          following: { options: string[]; total: number; uri: string }
          groups: { options: string[]; total: number; uri: string }
          likes: { options: string[]; total: number; uri: string }
          moderated_channels: { options: string[]; total: number; uri: string }
          pictures: { options: string[]; total: number; uri: string }
          portfolios: { options: string[]; total: number; uri: string }
          recommended_channels: { options: string[]; total: number; uri: string }
          recommended_users: { options: string[]; total: number; uri: string }
          shared: { options: string[]; total: number; uri: string }
          videos: { options: string[]; total: number; uri: string }
          watched_videos: { options: string[]; total: number; uri: string }
          watchlater: { options: string[]; total: number; uri: string }
        }
        interactions: {
          add_privacy_user?:
            | { options?: string[] | undefined; uri?: string | undefined }
            | undefined
          block: { added: boolean; added_time: string | null; options: string[]; uri: string }
          follow: { added: boolean; options: string[]; uri: string }
          report: { options: string[]; reason: string[]; uri: string }
        }
      }
      name: string
      pictures: {
        active: boolean
        link?: string | undefined
        resource_key: string
        sizes: {
          height: number | null
          link: string
          link_with_play_button?: string | undefined
          width: number
        }[]
        type: 'caution' | 'custom' | 'default'
        uri: string
      }
      preferences?:
        | {
            videos?:
              | {
                  privacy?:
                    | {
                        add?: boolean | undefined
                        comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                        download?: boolean | undefined
                        embed?: 'private' | 'public' | 'whitelist' | undefined
                        view?:
                          | 'anybody'
                          | 'contacts'
                          | 'disable'
                          | 'nobody'
                          | 'password'
                          | 'unlisted'
                          | 'users'
                          | undefined
                      }
                    | undefined
                }
              | undefined
          }
        | undefined
      resource_key: string
      upload_quota: {
        lifetime: { free: number | null; max: number | null; used: number | null }
        periodic: {
          free: number | null
          max: number | null
          reset_date: string | null
          used: number | null
        }
        space: { free: number; max: number | null; showing: 'lifetime' | 'periodic'; used: number }
      }
      uri: string
      websites: { description: string | null; link: string; name: string | null }[]
    }
    width: number
  }
  type: 'film' | 'series'
  uri: string
  user: {
    account:
      | 'basic'
      | 'business'
      | 'live_business'
      | 'live_premium'
      | 'live_pro'
      | 'plus'
      | 'pro'
      | 'pro_unlimited'
      | 'producer'
    bio: string | null
    content_filter?: 'drugs' | 'language' | 'nudity' | 'safe' | 'unrated' | 'violence' | undefined
    created_time: string
    email?: string | undefined
    link: string
    location: string | null
    metadata: {
      connections: {
        albums: { options: string[]; total: number; uri: string }
        appearances: { options: string[]; total: number; uri: string }
        block: { options: string[]; total: number; uri: string }
        categories: { options: string[]; total: number; uri: string }
        channels: { options: string[]; total: number; uri: string }
        feed: { options: string[]; uri: string }
        folders: { options: string[]; total: number; uri: string }
        followers: { options: string[]; total: number; uri: string }
        following: { options: string[]; total: number; uri: string }
        groups: { options: string[]; total: number; uri: string }
        likes: { options: string[]; total: number; uri: string }
        moderated_channels: { options: string[]; total: number; uri: string }
        pictures: { options: string[]; total: number; uri: string }
        portfolios: { options: string[]; total: number; uri: string }
        recommended_channels: { options: string[]; total: number; uri: string }
        recommended_users: { options: string[]; total: number; uri: string }
        shared: { options: string[]; total: number; uri: string }
        videos: { options: string[]; total: number; uri: string }
        watched_videos: { options: string[]; total: number; uri: string }
        watchlater: { options: string[]; total: number; uri: string }
      }
      interactions: {
        add_privacy_user?: { options?: string[] | undefined; uri?: string | undefined } | undefined
        block: { added: boolean; added_time: string | null; options: string[]; uri: string }
        follow: { added: boolean; options: string[]; uri: string }
        report: { options: string[]; reason: string[]; uri: string }
      }
    }
    name: string
    pictures: {
      active: boolean
      link?: string | undefined
      resource_key: string
      sizes: {
        height: number | null
        link: string
        link_with_play_button?: string | undefined
        width: number
      }[]
      type: 'caution' | 'custom' | 'default'
      uri: string
    }
    preferences?:
      | {
          videos?:
            | {
                privacy?:
                  | {
                      add?: boolean | undefined
                      comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                      download?: boolean | undefined
                      embed?: 'private' | 'public' | 'whitelist' | undefined
                      view?:
                        | 'anybody'
                        | 'contacts'
                        | 'disable'
                        | 'nobody'
                        | 'password'
                        | 'unlisted'
                        | 'users'
                        | undefined
                    }
                  | undefined
              }
            | undefined
        }
      | undefined
    resource_key: string
    upload_quota: {
      lifetime: { free: number | null; max: number | null; used: number | null }
      periodic: {
        free: number | null
        max: number | null
        reset_date: string | null
        used: number | null
      }
      space: { free: number; max: number | null; showing: 'lifetime' | 'periodic'; used: number }
    }
    uri: string
    websites: { description: string | null; link: string; name: string | null }[]
  }
}
type Portfolio = {
  created_time: string
  description: string | null
  link: string
  metadata: { connections: { videos: { options: string[]; total: number; uri: string } } }
  modified_time: string
  name: string
  sort: 'alphabetical' | 'clips' | 'modified' | 'recent'
  uri: string
}
type Presets = {
  metadata: { connections: { videos: { options: string[]; total: number; uri: string } } }
  name: string
  settings: {
    buttons: {
      embed: boolean
      hd: boolean
      like: boolean
      share: boolean
      vote: boolean
      watchlater: boolean
    }
    logos: { custom: boolean; sticky_custom: boolean; vimeo: boolean }
    outro: {
      clips?: (string | null) | undefined
      link?: ({ name?: string | undefined; url?: string | undefined } | null) | undefined
      text?: (string | null) | undefined
      type: 'link' | 'no idea' | 'text' | 'uploaded_clips' | 'uploaded_videos'
      videos?: (string | null) | undefined
    }
  }
  uri: string
  user: {
    account:
      | 'basic'
      | 'business'
      | 'live_business'
      | 'live_premium'
      | 'live_pro'
      | 'plus'
      | 'pro'
      | 'pro_unlimited'
      | 'producer'
    bio: string | null
    content_filter?: 'drugs' | 'language' | 'nudity' | 'safe' | 'unrated' | 'violence' | undefined
    created_time: string
    email?: string | undefined
    link: string
    location: string | null
    metadata: {
      connections: {
        albums: { options: string[]; total: number; uri: string }
        appearances: { options: string[]; total: number; uri: string }
        block: { options: string[]; total: number; uri: string }
        categories: { options: string[]; total: number; uri: string }
        channels: { options: string[]; total: number; uri: string }
        feed: { options: string[]; uri: string }
        folders: { options: string[]; total: number; uri: string }
        followers: { options: string[]; total: number; uri: string }
        following: { options: string[]; total: number; uri: string }
        groups: { options: string[]; total: number; uri: string }
        likes: { options: string[]; total: number; uri: string }
        moderated_channels: { options: string[]; total: number; uri: string }
        pictures: { options: string[]; total: number; uri: string }
        portfolios: { options: string[]; total: number; uri: string }
        recommended_channels: { options: string[]; total: number; uri: string }
        recommended_users: { options: string[]; total: number; uri: string }
        shared: { options: string[]; total: number; uri: string }
        videos: { options: string[]; total: number; uri: string }
        watched_videos: { options: string[]; total: number; uri: string }
        watchlater: { options: string[]; total: number; uri: string }
      }
      interactions: {
        add_privacy_user?: { options?: string[] | undefined; uri?: string | undefined } | undefined
        block: { added: boolean; added_time: string | null; options: string[]; uri: string }
        follow: { added: boolean; options: string[]; uri: string }
        report: { options: string[]; reason: string[]; uri: string }
      }
    }
    name: string
    pictures: {
      active: boolean
      link?: string | undefined
      resource_key: string
      sizes: {
        height: number | null
        link: string
        link_with_play_button?: string | undefined
        width: number
      }[]
      type: 'caution' | 'custom' | 'default'
      uri: string
    }
    preferences?:
      | {
          videos?:
            | {
                privacy?:
                  | {
                      add?: boolean | undefined
                      comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                      download?: boolean | undefined
                      embed?: 'private' | 'public' | 'whitelist' | undefined
                      view?:
                        | 'anybody'
                        | 'contacts'
                        | 'disable'
                        | 'nobody'
                        | 'password'
                        | 'unlisted'
                        | 'users'
                        | undefined
                    }
                  | undefined
              }
            | undefined
        }
      | undefined
    resource_key: string
    upload_quota: {
      lifetime: { free: number | null; max: number | null; used: number | null }
      periodic: {
        free: number | null
        max: number | null
        reset_date: string | null
        used: number | null
      }
      space: { free: number; max: number | null; showing: 'lifetime' | 'periodic'; used: number }
    }
    uri: string
    websites: { description: string | null; link: string; name: string | null }[]
  }
}
type Project = {
  created_time: string
  metadata: { connections: { videos: { options: string[]; total: number; uri: string } } }
  modified_time: string
  name: string
  resource_key: string
  uri: string
  user: {
    account:
      | 'basic'
      | 'business'
      | 'live_business'
      | 'live_premium'
      | 'live_pro'
      | 'plus'
      | 'pro'
      | 'pro_unlimited'
      | 'producer'
    bio: string | null
    content_filter?: 'drugs' | 'language' | 'nudity' | 'safe' | 'unrated' | 'violence' | undefined
    created_time: string
    email?: string | undefined
    link: string
    location: string | null
    metadata: {
      connections: {
        albums: { options: string[]; total: number; uri: string }
        appearances: { options: string[]; total: number; uri: string }
        block: { options: string[]; total: number; uri: string }
        categories: { options: string[]; total: number; uri: string }
        channels: { options: string[]; total: number; uri: string }
        feed: { options: string[]; uri: string }
        folders: { options: string[]; total: number; uri: string }
        followers: { options: string[]; total: number; uri: string }
        following: { options: string[]; total: number; uri: string }
        groups: { options: string[]; total: number; uri: string }
        likes: { options: string[]; total: number; uri: string }
        moderated_channels: { options: string[]; total: number; uri: string }
        pictures: { options: string[]; total: number; uri: string }
        portfolios: { options: string[]; total: number; uri: string }
        recommended_channels: { options: string[]; total: number; uri: string }
        recommended_users: { options: string[]; total: number; uri: string }
        shared: { options: string[]; total: number; uri: string }
        videos: { options: string[]; total: number; uri: string }
        watched_videos: { options: string[]; total: number; uri: string }
        watchlater: { options: string[]; total: number; uri: string }
      }
      interactions: {
        add_privacy_user?: { options?: string[] | undefined; uri?: string | undefined } | undefined
        block: { added: boolean; added_time: string | null; options: string[]; uri: string }
        follow: { added: boolean; options: string[]; uri: string }
        report: { options: string[]; reason: string[]; uri: string }
      }
    }
    name: string
    pictures: {
      active: boolean
      link?: string | undefined
      resource_key: string
      sizes: {
        height: number | null
        link: string
        link_with_play_button?: string | undefined
        width: number
      }[]
      type: 'caution' | 'custom' | 'default'
      uri: string
    }
    preferences?:
      | {
          videos?:
            | {
                privacy?:
                  | {
                      add?: boolean | undefined
                      comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                      download?: boolean | undefined
                      embed?: 'private' | 'public' | 'whitelist' | undefined
                      view?:
                        | 'anybody'
                        | 'contacts'
                        | 'disable'
                        | 'nobody'
                        | 'password'
                        | 'unlisted'
                        | 'users'
                        | undefined
                    }
                  | undefined
              }
            | undefined
        }
      | undefined
    resource_key: string
    upload_quota: {
      lifetime: { free: number | null; max: number | null; used: number | null }
      periodic: {
        free: number | null
        max: number | null
        reset_date: string | null
        used: number | null
      }
      space: { free: number; max: number | null; showing: 'lifetime' | 'periodic'; used: number }
    }
    uri: string
    websites: { description: string | null; link: string; name: string | null }[]
  }
}
type Auth = {
  access_token: string
  app: { name: string; uri: string }
  expires_on?: string | undefined
  refresh_token?: string | undefined
  scope: string
  token_type: 'bearer'
  user?:
    | {
        account:
          | 'basic'
          | 'business'
          | 'live_business'
          | 'live_premium'
          | 'live_pro'
          | 'plus'
          | 'pro'
          | 'pro_unlimited'
          | 'producer'
        bio: string | null
        content_filter?:
          | 'drugs'
          | 'language'
          | 'nudity'
          | 'safe'
          | 'unrated'
          | 'violence'
          | undefined
        created_time: string
        email?: string | undefined
        link: string
        location: string | null
        metadata: {
          connections: {
            albums: { options: string[]; total: number; uri: string }
            appearances: { options: string[]; total: number; uri: string }
            block: { options: string[]; total: number; uri: string }
            categories: { options: string[]; total: number; uri: string }
            channels: { options: string[]; total: number; uri: string }
            feed: { options: string[]; uri: string }
            folders: { options: string[]; total: number; uri: string }
            followers: { options: string[]; total: number; uri: string }
            following: { options: string[]; total: number; uri: string }
            groups: { options: string[]; total: number; uri: string }
            likes: { options: string[]; total: number; uri: string }
            moderated_channels: { options: string[]; total: number; uri: string }
            pictures: { options: string[]; total: number; uri: string }
            portfolios: { options: string[]; total: number; uri: string }
            recommended_channels: { options: string[]; total: number; uri: string }
            recommended_users: { options: string[]; total: number; uri: string }
            shared: { options: string[]; total: number; uri: string }
            videos: { options: string[]; total: number; uri: string }
            watched_videos: { options: string[]; total: number; uri: string }
            watchlater: { options: string[]; total: number; uri: string }
          }
          interactions: {
            add_privacy_user?:
              | { options?: string[] | undefined; uri?: string | undefined }
              | undefined
            block: { added: boolean; added_time: string | null; options: string[]; uri: string }
            follow: { added: boolean; options: string[]; uri: string }
            report: { options: string[]; reason: string[]; uri: string }
          }
        }
        name: string
        pictures: {
          active: boolean
          link?: string | undefined
          resource_key: string
          sizes: {
            height: number | null
            link: string
            link_with_play_button?: string | undefined
            width: number
          }[]
          type: 'caution' | 'custom' | 'default'
          uri: string
        }
        preferences?:
          | {
              videos?:
                | {
                    privacy?:
                      | {
                          add?: boolean | undefined
                          comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                          download?: boolean | undefined
                          embed?: 'private' | 'public' | 'whitelist' | undefined
                          view?:
                            | 'anybody'
                            | 'contacts'
                            | 'disable'
                            | 'nobody'
                            | 'password'
                            | 'unlisted'
                            | 'users'
                            | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        resource_key: string
        upload_quota: {
          lifetime: { free: number | null; max: number | null; used: number | null }
          periodic: {
            free: number | null
            max: number | null
            reset_date: string | null
            used: number | null
          }
          space: {
            free: number
            max: number | null
            showing: 'lifetime' | 'periodic'
            used: number
          }
        }
        uri: string
        websites: { description: string | null; link: string; name: string | null }[]
      }
    | undefined
}
type AuthError = { error: string; error_description: string }
type OnDemandPromotion = {
  access_type: 'default' | 'vip'
  discount_type: 'dollars' | 'free' | 'percent'
  download: boolean
  label: string | null
  metadata: { connections: { codes: { options: string[]; total: number; uri: string } } }
  percent_off: number
  product_type: 'any' | 'buy' | 'buy_episode' | 'rent' | 'rent_episode' | 'subscribe'
  stream_period:
    | '1_week'
    | '1_year'
    | '24_hour'
    | '30_days'
    | '3_month'
    | '48_hour'
    | '6_month'
    | '72_hour'
  total: number
  type: 'batch' | 'batch_prefix' | 'single'
  uri: string
}
type OnDemandPromotionCode = { code: string; link: string; max_uses: number; uses: number }
type OnDemandRegion = { country_code: string; country_name: string; uri: string }
type OnDemandSeason = {
  description: string
  metadata: { connections: { videos: { options: string[]; total: number; uri: string } } }
  name: string
  position: number
  resource_key: string
  type: string
  uri: string
  user: {
    account:
      | 'basic'
      | 'business'
      | 'live_business'
      | 'live_premium'
      | 'live_pro'
      | 'plus'
      | 'pro'
      | 'pro_unlimited'
      | 'producer'
    bio: string | null
    content_filter?: 'drugs' | 'language' | 'nudity' | 'safe' | 'unrated' | 'violence' | undefined
    created_time: string
    email?: string | undefined
    link: string
    location: string | null
    metadata: {
      connections: {
        albums: { options: string[]; total: number; uri: string }
        appearances: { options: string[]; total: number; uri: string }
        block: { options: string[]; total: number; uri: string }
        categories: { options: string[]; total: number; uri: string }
        channels: { options: string[]; total: number; uri: string }
        feed: { options: string[]; uri: string }
        folders: { options: string[]; total: number; uri: string }
        followers: { options: string[]; total: number; uri: string }
        following: { options: string[]; total: number; uri: string }
        groups: { options: string[]; total: number; uri: string }
        likes: { options: string[]; total: number; uri: string }
        moderated_channels: { options: string[]; total: number; uri: string }
        pictures: { options: string[]; total: number; uri: string }
        portfolios: { options: string[]; total: number; uri: string }
        recommended_channels: { options: string[]; total: number; uri: string }
        recommended_users: { options: string[]; total: number; uri: string }
        shared: { options: string[]; total: number; uri: string }
        videos: { options: string[]; total: number; uri: string }
        watched_videos: { options: string[]; total: number; uri: string }
        watchlater: { options: string[]; total: number; uri: string }
      }
      interactions: {
        add_privacy_user?: { options?: string[] | undefined; uri?: string | undefined } | undefined
        block: { added: boolean; added_time: string | null; options: string[]; uri: string }
        follow: { added: boolean; options: string[]; uri: string }
        report: { options: string[]; reason: string[]; uri: string }
      }
    }
    name: string
    pictures: {
      active: boolean
      link?: string | undefined
      resource_key: string
      sizes: {
        height: number | null
        link: string
        link_with_play_button?: string | undefined
        width: number
      }[]
      type: 'caution' | 'custom' | 'default'
      uri: string
    }
    preferences?:
      | {
          videos?:
            | {
                privacy?:
                  | {
                      add?: boolean | undefined
                      comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                      download?: boolean | undefined
                      embed?: 'private' | 'public' | 'whitelist' | undefined
                      view?:
                        | 'anybody'
                        | 'contacts'
                        | 'disable'
                        | 'nobody'
                        | 'password'
                        | 'unlisted'
                        | 'users'
                        | undefined
                    }
                  | undefined
              }
            | undefined
        }
      | undefined
    resource_key: string
    upload_quota: {
      lifetime: { free: number | null; max: number | null; used: number | null }
      periodic: {
        free: number | null
        max: number | null
        reset_date: string | null
        used: number | null
      }
      space: { free: number; max: number | null; showing: 'lifetime' | 'periodic'; used: number }
    }
    uri: string
    websites: { description: string | null; link: string; name: string | null }[]
  }
}
type OnDemandVideo = {
  buy: { active: boolean; price: { [x: string]: unknown }; purchased?: boolean | undefined } | null
  description?: string | undefined
  duration?: string | undefined
  episode?: number | undefined
  interactions: { page: { added: boolean; options: string[]; uri: string } }
  link: string
  metadata: {
    connections: { season: { name: string; options: string[]; uri: string } }
    interactions: {
      likes: { added: boolean; added_time: string; uri: string }
      watchlater: { added: boolean; added_time: string; uri: string }
    }
  }
  name?: string | undefined
  options?: string[] | undefined
  pictures?:
    | {
        active: boolean
        link?: string | undefined
        resource_key: string
        sizes: {
          height: number | null
          link: string
          link_with_play_button?: string | undefined
          width: number
        }[]
        type: 'caution' | 'custom' | 'default'
        uri: string
      }
    | undefined
  play_progress: number
  position?: number | undefined
  release_date?: string | undefined
  release_year: number | null
  rent: { active: boolean; price: { [x: string]: unknown }; purchased?: boolean | undefined } | null
  type: 'extra' | 'main' | 'trailer'
  uri: string
  user?:
    | {
        account:
          | 'basic'
          | 'business'
          | 'live_business'
          | 'live_premium'
          | 'live_pro'
          | 'plus'
          | 'pro'
          | 'pro_unlimited'
          | 'producer'
        bio: string | null
        content_filter?:
          | 'drugs'
          | 'language'
          | 'nudity'
          | 'safe'
          | 'unrated'
          | 'violence'
          | undefined
        created_time: string
        email?: string | undefined
        link: string
        location: string | null
        metadata: {
          connections: {
            albums: { options: string[]; total: number; uri: string }
            appearances: { options: string[]; total: number; uri: string }
            block: { options: string[]; total: number; uri: string }
            categories: { options: string[]; total: number; uri: string }
            channels: { options: string[]; total: number; uri: string }
            feed: { options: string[]; uri: string }
            folders: { options: string[]; total: number; uri: string }
            followers: { options: string[]; total: number; uri: string }
            following: { options: string[]; total: number; uri: string }
            groups: { options: string[]; total: number; uri: string }
            likes: { options: string[]; total: number; uri: string }
            moderated_channels: { options: string[]; total: number; uri: string }
            pictures: { options: string[]; total: number; uri: string }
            portfolios: { options: string[]; total: number; uri: string }
            recommended_channels: { options: string[]; total: number; uri: string }
            recommended_users: { options: string[]; total: number; uri: string }
            shared: { options: string[]; total: number; uri: string }
            videos: { options: string[]; total: number; uri: string }
            watched_videos: { options: string[]; total: number; uri: string }
            watchlater: { options: string[]; total: number; uri: string }
          }
          interactions: {
            add_privacy_user?:
              | { options?: string[] | undefined; uri?: string | undefined }
              | undefined
            block: { added: boolean; added_time: string | null; options: string[]; uri: string }
            follow: { added: boolean; options: string[]; uri: string }
            report: { options: string[]; reason: string[]; uri: string }
          }
        }
        name: string
        pictures: {
          active: boolean
          link?: string | undefined
          resource_key: string
          sizes: {
            height: number | null
            link: string
            link_with_play_button?: string | undefined
            width: number
          }[]
          type: 'caution' | 'custom' | 'default'
          uri: string
        }
        preferences?:
          | {
              videos?:
                | {
                    privacy?:
                      | {
                          add?: boolean | undefined
                          comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                          download?: boolean | undefined
                          embed?: 'private' | 'public' | 'whitelist' | undefined
                          view?:
                            | 'anybody'
                            | 'contacts'
                            | 'disable'
                            | 'nobody'
                            | 'password'
                            | 'unlisted'
                            | 'users'
                            | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        resource_key: string
        upload_quota: {
          lifetime: { free: number | null; max: number | null; used: number | null }
          periodic: {
            free: number | null
            max: number | null
            reset_date: string | null
            used: number | null
          }
          space: {
            free: number
            max: number | null
            showing: 'lifetime' | 'periodic'
            used: number
          }
        }
        uri: string
        websites: { description: string | null; link: string; name: string | null }[]
      }
    | undefined
}
type UploadAttempt = {
  clip?:
    | {
        categories: Category[]
        content_rating: string[]
        context: {
          action: 'Added to' | 'Appearance by' | 'Liked by' | 'Uploaded by'
          resource: { [x: string]: unknown } | null
          resource_type: string
        }
        created_time: string
        description: string | null
        duration: number
        embed: {
          buttons: {
            embed: boolean
            fullscreen: boolean
            hd: boolean
            like: boolean
            scaling: boolean
            share: boolean
            watchlater: boolean
          }
          color: string
          logos: { custom: { active: boolean; link: string; sticky: boolean }; vimeo: boolean }
          playbar: boolean
          speed: boolean
          title: {
            name: 'hide' | 'show' | 'user'
            owner: 'hide' | 'show' | 'user'
            portrait: 'hide' | 'show' | 'user'
          }
          uri?: string | undefined
          volume: boolean
        }
        height: number
        language: string | null
        last_user_action_event_date?: (string | null) | undefined
        license: 'by' | 'by-nc' | 'by-nc-nd' | 'by-nc-sa' | 'by-nd' | 'by-sa' | 'cc0'
        link: string
        metadata: {
          connections: {
            available_albums: { options: string[]; total: number; uri: string }
            available_channels: { options: string[]; total: number; uri: string }
            comments: { options: string[]; total: number; uri: string }
            credits: {
              options?: string[] | undefined
              total?: number | undefined
              uri?: string | undefined
            } | null
            likes: { options: string[]; total: number; uri: string }
            ondemand: { options: string[]; resource_key: string; uri: string }
            pictures: { options: string[]; total: number; uri: string }
            playback: { options: string[]; uri: string }
            recommendations: { options?: string[] | undefined; uri?: string | undefined } | null
            related: { options?: string[] | undefined; uri?: string | undefined } | null
            season: { name: string; options: string[]; uri: string }
            texttracks: { options: string[]; total: number; uri: string }
            trailer: { options: string[]; resource_key: string; uri: string }
            users_with_access: { options: string[]; total: number; uri: string }
            versions: {
              current_uri?: string | undefined
              options: string[]
              resource_key?: string | undefined
              total: number
              uri: string
            }
          }
          interactions: {
            buy: {
              currency: string | null
              display_price: string | null
              download: 'available' | 'purchased' | 'restricted' | 'unavailable'
              drm: boolean
              link: string | null
              price: number | null
              purchase_time: string | null
              stream: 'available' | 'purchased' | 'restricted' | 'unavailable'
              uri: string | null
            } | null
            channel: { options: string[]; uri: string } | null
            like: { added: boolean; added_time: string; options: string[]; uri: string }
            rent: {
              currency: string | null
              display_price: string | null
              drm: boolean
              expires_time: string | null
              link: string | null
              price: number | null
              purchase_time: string | null
              stream: 'available' | 'purchased' | 'restricted' | 'unavailable'
              uri: string | null
            } | null
            report: { options: string[]; reason: string[]; uri: string }
            subscribe?:
              | ({
                  drm?: boolean | undefined
                  expires_time?: string | undefined
                  purchase_time?: string | undefined
                  stream?: string | undefined
                } | null)
              | undefined
            watched: { added: boolean; added_time: string; options: string[]; uri: string }
            watchlater: { added: boolean; added_time: string; options: string[]; uri: string }
          }
        }
        modified_time: string
        name: string
        parent_folder?:
          | {
              created_time: string
              metadata: {
                connections: { videos: { options: string[]; total: number; uri: string } }
              }
              modified_time: string
              name: string
              resource_key: string
              uri: string
              user: {
                account:
                  | 'basic'
                  | 'business'
                  | 'live_business'
                  | 'live_premium'
                  | 'live_pro'
                  | 'plus'
                  | 'pro'
                  | 'pro_unlimited'
                  | 'producer'
                bio: string | null
                content_filter?:
                  | 'drugs'
                  | 'language'
                  | 'nudity'
                  | 'safe'
                  | 'unrated'
                  | 'violence'
                  | undefined
                created_time: string
                email?: string | undefined
                link: string
                location: string | null
                metadata: {
                  connections: {
                    albums: { options: string[]; total: number; uri: string }
                    appearances: { options: string[]; total: number; uri: string }
                    block: { options: string[]; total: number; uri: string }
                    categories: { options: string[]; total: number; uri: string }
                    channels: { options: string[]; total: number; uri: string }
                    feed: { options: string[]; uri: string }
                    folders: { options: string[]; total: number; uri: string }
                    followers: { options: string[]; total: number; uri: string }
                    following: { options: string[]; total: number; uri: string }
                    groups: { options: string[]; total: number; uri: string }
                    likes: { options: string[]; total: number; uri: string }
                    moderated_channels: { options: string[]; total: number; uri: string }
                    pictures: { options: string[]; total: number; uri: string }
                    portfolios: { options: string[]; total: number; uri: string }
                    recommended_channels: { options: string[]; total: number; uri: string }
                    recommended_users: { options: string[]; total: number; uri: string }
                    shared: { options: string[]; total: number; uri: string }
                    videos: { options: string[]; total: number; uri: string }
                    watched_videos: { options: string[]; total: number; uri: string }
                    watchlater: { options: string[]; total: number; uri: string }
                  }
                  interactions: {
                    add_privacy_user?:
                      | { options?: string[] | undefined; uri?: string | undefined }
                      | undefined
                    block: {
                      added: boolean
                      added_time: string | null
                      options: string[]
                      uri: string
                    }
                    follow: { added: boolean; options: string[]; uri: string }
                    report: { options: string[]; reason: string[]; uri: string }
                  }
                }
                name: string
                pictures: {
                  active: boolean
                  link?: string | undefined
                  resource_key: string
                  sizes: {
                    height: number | null
                    link: string
                    link_with_play_button?: string | undefined
                    width: number
                  }[]
                  type: 'caution' | 'custom' | 'default'
                  uri: string
                }
                preferences?:
                  | {
                      videos?:
                        | {
                            privacy?:
                              | {
                                  add?: boolean | undefined
                                  comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                                  download?: boolean | undefined
                                  embed?: 'private' | 'public' | 'whitelist' | undefined
                                  view?:
                                    | 'anybody'
                                    | 'contacts'
                                    | 'disable'
                                    | 'nobody'
                                    | 'password'
                                    | 'unlisted'
                                    | 'users'
                                    | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                resource_key: string
                upload_quota: {
                  lifetime: { free: number | null; max: number | null; used: number | null }
                  periodic: {
                    free: number | null
                    max: number | null
                    reset_date: string | null
                    used: number | null
                  }
                  space: {
                    free: number
                    max: number | null
                    showing: 'lifetime' | 'periodic'
                    used: number
                  }
                }
                uri: string
                websites: { description: string | null; link: string; name: string | null }[]
              }
            }
          | undefined
        password?: string | undefined
        pictures: {
          active: boolean
          link?: string | undefined
          resource_key: string
          sizes: {
            height: number | null
            link: string
            link_with_play_button?: string | undefined
            width: number
          }[]
          type: 'caution' | 'custom' | 'default'
          uri: string
        }
        privacy: {
          add: boolean
          comments: 'anybody' | 'contacts' | 'nobody'
          download: boolean
          embed: 'private' | 'public'
          view: 'anybody' | 'contacts' | 'disable' | 'nobody' | 'password' | 'unlisted' | 'users'
        }
        release_time: string
        resource_key: string
        spatial: {
          director_timeline: {
            pitch?: number | undefined
            roll?: number | undefined
            time_code?: number | undefined
            yaw?: number | undefined
          }[]
          field_of_view: number | null
          projection: 'cubical' | 'cylindrical' | 'dome' | 'equirectangular' | 'pyramid'
          stereo_format: 'left-right' | 'mono' | 'top-bottom'
        }
        stats: { plays: number | null }
        status:
          | 'available'
          | 'quota_exceeded'
          | 'total_cap_exceeded'
          | 'transcode_starting'
          | 'transcoding'
          | 'transcoding_error'
          | 'unavailable'
          | 'uploading'
          | 'uploading_error'
        tags: Tag[]
        transcode: { status?: 'complete' | 'error' | 'in_progress' | undefined } | null
        type: 'live' | 'stock' | 'video'
        upload: {
          approach?: 'post' | 'pull' | 'streaming' | 'tus' | undefined
          complete_uri?: string | undefined
          form?: string | undefined
          link?: string | undefined
          redirect_url?: string | undefined
          size?: number | undefined
          status: 'complete' | 'error' | 'in_progress'
          upload_link?: string | undefined
        } | null
        uri: string
        user: {
          account:
            | 'basic'
            | 'business'
            | 'live_business'
            | 'live_premium'
            | 'live_pro'
            | 'plus'
            | 'pro'
            | 'pro_unlimited'
            | 'producer'
          bio: string | null
          content_filter?:
            | 'drugs'
            | 'language'
            | 'nudity'
            | 'safe'
            | 'unrated'
            | 'violence'
            | undefined
          created_time: string
          email?: string | undefined
          link: string
          location: string | null
          metadata: {
            connections: {
              albums: { options: string[]; total: number; uri: string }
              appearances: { options: string[]; total: number; uri: string }
              block: { options: string[]; total: number; uri: string }
              categories: { options: string[]; total: number; uri: string }
              channels: { options: string[]; total: number; uri: string }
              feed: { options: string[]; uri: string }
              folders: { options: string[]; total: number; uri: string }
              followers: { options: string[]; total: number; uri: string }
              following: { options: string[]; total: number; uri: string }
              groups: { options: string[]; total: number; uri: string }
              likes: { options: string[]; total: number; uri: string }
              moderated_channels: { options: string[]; total: number; uri: string }
              pictures: { options: string[]; total: number; uri: string }
              portfolios: { options: string[]; total: number; uri: string }
              recommended_channels: { options: string[]; total: number; uri: string }
              recommended_users: { options: string[]; total: number; uri: string }
              shared: { options: string[]; total: number; uri: string }
              videos: { options: string[]; total: number; uri: string }
              watched_videos: { options: string[]; total: number; uri: string }
              watchlater: { options: string[]; total: number; uri: string }
            }
            interactions: {
              add_privacy_user?:
                | { options?: string[] | undefined; uri?: string | undefined }
                | undefined
              block: { added: boolean; added_time: string | null; options: string[]; uri: string }
              follow: { added: boolean; options: string[]; uri: string }
              report: { options: string[]; reason: string[]; uri: string }
            }
          }
          name: string
          pictures: {
            active: boolean
            link?: string | undefined
            resource_key: string
            sizes: {
              height: number | null
              link: string
              link_with_play_button?: string | undefined
              width: number
            }[]
            type: 'caution' | 'custom' | 'default'
            uri: string
          }
          preferences?:
            | {
                videos?:
                  | {
                      privacy?:
                        | {
                            add?: boolean | undefined
                            comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                            download?: boolean | undefined
                            embed?: 'private' | 'public' | 'whitelist' | undefined
                            view?:
                              | 'anybody'
                              | 'contacts'
                              | 'disable'
                              | 'nobody'
                              | 'password'
                              | 'unlisted'
                              | 'users'
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            | undefined
          resource_key: string
          upload_quota: {
            lifetime: { free: number | null; max: number | null; used: number | null }
            periodic: {
              free: number | null
              max: number | null
              reset_date: string | null
              used: number | null
            }
            space: {
              free: number
              max: number | null
              showing: 'lifetime' | 'periodic'
              used: number
            }
          }
          uri: string
          websites: { description: string | null; link: string; name: string | null }[]
        }
        width: number
      }
    | undefined
  complete_uri?: string | undefined
  form?: string | undefined
  ticket_id: string
  upload_link: string
  uri: string
  user: {
    account:
      | 'basic'
      | 'business'
      | 'live_business'
      | 'live_premium'
      | 'live_pro'
      | 'plus'
      | 'pro'
      | 'pro_unlimited'
      | 'producer'
    bio: string | null
    content_filter?: 'drugs' | 'language' | 'nudity' | 'safe' | 'unrated' | 'violence' | undefined
    created_time: string
    email?: string | undefined
    link: string
    location: string | null
    metadata: {
      connections: {
        albums: { options: string[]; total: number; uri: string }
        appearances: { options: string[]; total: number; uri: string }
        block: { options: string[]; total: number; uri: string }
        categories: { options: string[]; total: number; uri: string }
        channels: { options: string[]; total: number; uri: string }
        feed: { options: string[]; uri: string }
        folders: { options: string[]; total: number; uri: string }
        followers: { options: string[]; total: number; uri: string }
        following: { options: string[]; total: number; uri: string }
        groups: { options: string[]; total: number; uri: string }
        likes: { options: string[]; total: number; uri: string }
        moderated_channels: { options: string[]; total: number; uri: string }
        pictures: { options: string[]; total: number; uri: string }
        portfolios: { options: string[]; total: number; uri: string }
        recommended_channels: { options: string[]; total: number; uri: string }
        recommended_users: { options: string[]; total: number; uri: string }
        shared: { options: string[]; total: number; uri: string }
        videos: { options: string[]; total: number; uri: string }
        watched_videos: { options: string[]; total: number; uri: string }
        watchlater: { options: string[]; total: number; uri: string }
      }
      interactions: {
        add_privacy_user?: { options?: string[] | undefined; uri?: string | undefined } | undefined
        block: { added: boolean; added_time: string | null; options: string[]; uri: string }
        follow: { added: boolean; options: string[]; uri: string }
        report: { options: string[]; reason: string[]; uri: string }
      }
    }
    name: string
    pictures: {
      active: boolean
      link?: string | undefined
      resource_key: string
      sizes: {
        height: number | null
        link: string
        link_with_play_button?: string | undefined
        width: number
      }[]
      type: 'caution' | 'custom' | 'default'
      uri: string
    }
    preferences?:
      | {
          videos?:
            | {
                privacy?:
                  | {
                      add?: boolean | undefined
                      comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                      download?: boolean | undefined
                      embed?: 'private' | 'public' | 'whitelist' | undefined
                      view?:
                        | 'anybody'
                        | 'contacts'
                        | 'disable'
                        | 'nobody'
                        | 'password'
                        | 'unlisted'
                        | 'users'
                        | undefined
                    }
                  | undefined
              }
            | undefined
        }
      | undefined
    resource_key: string
    upload_quota: {
      lifetime: { free: number | null; max: number | null; used: number | null }
      periodic: {
        free: number | null
        max: number | null
        reset_date: string | null
        used: number | null
      }
      space: { free: number; max: number | null; showing: 'lifetime' | 'periodic'; used: number }
    }
    uri: string
    websites: { description: string | null; link: string; name: string | null }[]
  }
}
type Domain = { allow_hd: boolean; domain: string; uri: string }
type VideoVersions = {
  active: boolean
  app: { name: string; uri: string }
  created_time: string
  duration: number | null
  filename: string
  filesize: number | null
  metadata: { connections: { video: { options: string[]; total: number; uri: string } } }
  modified_time: string
  play: {
    progressive?:
      | {
          created_time: string
          fps: number
          height: number | null
          link: string
          link_expiration_time: string
          log?: { [x: string]: unknown } | undefined
          md5: string
          size: number | null
          type: 'source' | 'video/mp4' | 'video/webm' | 'vp6/x-video'
          width: number | null
        }[]
      | undefined
    status: 'playable' | 'purchase_required' | 'restricted' | 'unavailable'
  }
  upload: {
    approach?: 'post' | 'pull' | 'streaming' | 'tus' | undefined
    complete_uri?: string | undefined
    form?: string | undefined
    link?: string | undefined
    redirect_url?: string | undefined
    size?: number | undefined
    status: 'complete' | 'error' | 'in_progress'
    upload_link?: string | undefined
  } | null
  upload_date: string | null
  uri: string
  user: {
    account:
      | 'basic'
      | 'business'
      | 'live_business'
      | 'live_premium'
      | 'live_pro'
      | 'plus'
      | 'pro'
      | 'pro_unlimited'
      | 'producer'
    bio: string | null
    content_filter?: 'drugs' | 'language' | 'nudity' | 'safe' | 'unrated' | 'violence' | undefined
    created_time: string
    email?: string | undefined
    link: string
    location: string | null
    metadata: {
      connections: {
        albums: { options: string[]; total: number; uri: string }
        appearances: { options: string[]; total: number; uri: string }
        block: { options: string[]; total: number; uri: string }
        categories: { options: string[]; total: number; uri: string }
        channels: { options: string[]; total: number; uri: string }
        feed: { options: string[]; uri: string }
        folders: { options: string[]; total: number; uri: string }
        followers: { options: string[]; total: number; uri: string }
        following: { options: string[]; total: number; uri: string }
        groups: { options: string[]; total: number; uri: string }
        likes: { options: string[]; total: number; uri: string }
        moderated_channels: { options: string[]; total: number; uri: string }
        pictures: { options: string[]; total: number; uri: string }
        portfolios: { options: string[]; total: number; uri: string }
        recommended_channels: { options: string[]; total: number; uri: string }
        recommended_users: { options: string[]; total: number; uri: string }
        shared: { options: string[]; total: number; uri: string }
        videos: { options: string[]; total: number; uri: string }
        watched_videos: { options: string[]; total: number; uri: string }
        watchlater: { options: string[]; total: number; uri: string }
      }
      interactions: {
        add_privacy_user?: { options?: string[] | undefined; uri?: string | undefined } | undefined
        block: { added: boolean; added_time: string | null; options: string[]; uri: string }
        follow: { added: boolean; options: string[]; uri: string }
        report: { options: string[]; reason: string[]; uri: string }
      }
    }
    name: string
    pictures: {
      active: boolean
      link?: string | undefined
      resource_key: string
      sizes: {
        height: number | null
        link: string
        link_with_play_button?: string | undefined
        width: number
      }[]
      type: 'caution' | 'custom' | 'default'
      uri: string
    }
    preferences?:
      | {
          videos?:
            | {
                privacy?:
                  | {
                      add?: boolean | undefined
                      comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                      download?: boolean | undefined
                      embed?: 'private' | 'public' | 'whitelist' | undefined
                      view?:
                        | 'anybody'
                        | 'contacts'
                        | 'disable'
                        | 'nobody'
                        | 'password'
                        | 'unlisted'
                        | 'users'
                        | undefined
                    }
                  | undefined
              }
            | undefined
        }
      | undefined
    resource_key: string
    upload_quota: {
      lifetime: { free: number | null; max: number | null; used: number | null }
      periodic: {
        free: number | null
        max: number | null
        reset_date: string | null
        used: number | null
      }
      space: { free: number; max: number | null; showing: 'lifetime' | 'periodic'; used: number }
    }
    uri: string
    websites: { description: string | null; link: string; name: string | null }[]
  }
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $get: {
        input: { query: { openapi?: boolean | undefined } }
        output: Endpoint
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/categories': {
      $get: {
        input: {
          query: {
            direction?: 'asc' | 'desc' | undefined
            page?: number | undefined
            per_page?: number | undefined
            sort?: 'last_video_featured_time' | 'name' | undefined
          }
        }
        output: Category[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/categories/:category': {
      $get:
        | {
            input: { param: { category: string } }
            output: Category
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { category: string } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/categories/:category/channels': {
      $get:
        | {
            input: { param: { category: string } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?: 'alphabetical' | 'date' | 'followers' | 'videos' | undefined
              }
            }
            output: Channel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { category: string } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?: 'alphabetical' | 'date' | 'followers' | 'videos' | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/categories/:category/groups': {
      $get:
        | {
            input: { param: { category: string } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?: 'alphabetical' | 'date' | 'members' | 'videos' | undefined
              }
            }
            output: Group[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { category: string } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?: 'alphabetical' | 'date' | 'members' | 'videos' | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/categories/:category/videos': {
      $get:
        | {
            input: { param: { category: string } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                filter?: 'conditional_featured' | 'embeddable' | undefined
                filter_embeddable?: boolean | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?:
                  | 'alphabetical'
                  | 'comments'
                  | 'date'
                  | 'duration'
                  | 'featured'
                  | 'likes'
                  | 'plays'
                  | 'relevant'
                  | undefined
              }
            }
            output: Video[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { category: string } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                filter?: 'conditional_featured' | 'embeddable' | undefined
                filter_embeddable?: boolean | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?:
                  | 'alphabetical'
                  | 'comments'
                  | 'date'
                  | 'duration'
                  | 'featured'
                  | 'likes'
                  | 'plays'
                  | 'relevant'
                  | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/categories/:category/videos/:video_id': {
      $get:
        | {
            input: { param: { category: string; video_id: number } }
            output: Video
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { category: string; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/channels': {
      $get:
        | {
            input: {
              query: {
                direction?: 'asc' | 'desc' | undefined
                filter?: 'featured' | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?: 'alphabetical' | 'date' | 'followers' | 'relevant' | 'videos' | undefined
              }
            }
            output: Channel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                direction?: 'asc' | 'desc' | undefined
                filter?: 'featured' | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?: 'alphabetical' | 'date' | 'followers' | 'relevant' | 'videos' | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              json: {
                description?: string | undefined
                link?: string | undefined
                name: string
                privacy: 'anybody' | 'moderators' | 'user'
              }
            }
            output: Channel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                description?: string | undefined
                link?: string | undefined
                name: string
                privacy: 'anybody' | 'moderators' | 'user'
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                description?: string | undefined
                link?: string | undefined
                name: string
                privacy: 'anybody' | 'moderators' | 'user'
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/channels/:channel_id': {
      $delete:
        | {
            input: { param: { channel_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
      $get: {
        input: { param: { channel_id: number } }
        output: Channel
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { channel_id: number } } & {
              json: {
                description?: string | undefined
                link?: string | undefined
                name?: string | undefined
                privacy?: 'anybody' | 'moderators' | 'users' | undefined
              }
            }
            output: Channel
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: number } } & {
              json: {
                description?: string | undefined
                link?: string | undefined
                name?: string | undefined
                privacy?: 'anybody' | 'moderators' | 'users' | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/channels/:channel_id/categories': {
      $get:
        | {
            input: { param: { channel_id: number } }
            output: Category[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { channel_id: number } } & { json: { channels: string[] } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: number } } & { json: { channels: string[] } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { channel_id: number } } & { json: { channels: string[] } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { channel_id: number } } & { json: { channels: string[] } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { channel_id: number } } & { json: { channels: string[] } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/channels/:channel_id/categories/:category': {
      $delete:
        | {
            input: { param: { category: string; channel_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { category: string; channel_id: number } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { category: string; channel_id: number } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { category: string; channel_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { category: string; channel_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { category: string; channel_id: number } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { category: string; channel_id: number } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { category: string; channel_id: number } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { category: string; channel_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/channels/:channel_id/moderators': {
      $delete:
        | {
            input: { param: { channel_id: number } } & { json: { user_uri: string } }
            output: User
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { channel_id: number } } & { json: { user_uri: string } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { channel_id: number } } & { json: { user_uri: string } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $get: {
        input: { param: { channel_id: number } } & {
          query: {
            direction?: 'asc' | 'desc' | undefined
            page?: number | undefined
            per_page?: number | undefined
            query?: string | undefined
            sort?: 'alphabetical' | 'date' | undefined
          }
        }
        output: User[]
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { channel_id: number } } & { json: { user_uri: string } }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: number } } & { json: { user_uri: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { channel_id: number } } & { json: { user_uri: string } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { channel_id: number } } & { json: { user_uri: string } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { channel_id: number } } & { json: { user_uri: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { channel_id: number } } & { json: { user_uri: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { channel_id: number } } & { json: { user_uri: string } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { channel_id: number } } & { json: { user_uri: string } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/channels/:channel_id/moderators/:user_id': {
      $get: {
        input: { param: { channel_id: number; user_id: number } }
        output: User
        outputFormat: 'json'
        status: 200
      }
      $delete:
        | {
            input: { param: { channel_id: number; user_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: number; user_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { channel_id: number; user_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { channel_id: number; user_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { channel_id: number; user_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/channels/:channel_id/privacy/users': {
      $get:
        | {
            input: { param: { channel_id: number } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: number } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { channel_id: number } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { channel_id: number } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { channel_id: number } } & { json: { users: string[] } }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: number } } & { json: { users: string[] } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { channel_id: number } } & { json: { users: string[] } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { channel_id: number } } & { json: { users: string[] } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { channel_id: number } } & { json: { users: string[] } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/channels/:channel_id/privacy/users/:user_id': {
      $delete:
        | {
            input: { param: { channel_id: number; user_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: number; user_id: number } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { channel_id: number; user_id: number } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { channel_id: number; user_id: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { channel_id: number; user_id: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { channel_id: number; user_id: number } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { channel_id: number; user_id: number } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { channel_id: number; user_id: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/channels/:channel_id/tags': {
      $get:
        | {
            input: { param: { channel_id: number } }
            output: Tag[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { channel_id: number } } & { json: { tag: string[] } }
            output: Tag[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: number } } & { json: { tag: string[] } }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { channel_id: number } } & { json: { tag: string[] } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { channel_id: number } } & { json: { tag: string[] } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/channels/:channel_id/tags/:word': {
      $delete:
        | {
            input: { param: { channel_id: number; word: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: number; word: string } }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { channel_id: number; word: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { channel_id: number; word: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
      $get:
        | {
            input: { param: { channel_id: number; word: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: number; word: string } }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { channel_id: number; word: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { channel_id: number; word: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: number; word: string } }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { channel_id: number; word: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { channel_id: number; word: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/channels/:channel_id/users': {
      $get:
        | {
            input: { param: { channel_id: number } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                filter: 'moderators'
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?: 'alphabetical' | 'date' | undefined
              }
            }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: number } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                filter: 'moderators'
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?: 'alphabetical' | 'date' | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/channels/:channel_id/videos': {
      $delete:
        | {
            input: { param: { channel_id: number } } & { json: { video_uri: string } }
            output: Video
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { channel_id: number } } & { json: { video_uri: string } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { channel_id: number } } & { json: { video_uri: string } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { channel_id: number } } & {
              query: {
                containing_uri?: string | undefined
                direction?: 'asc' | 'desc' | undefined
                filter?: 'embeddable' | undefined
                filter_embeddable?: boolean | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?:
                  | 'added'
                  | 'alphabetical'
                  | 'comments'
                  | 'date'
                  | 'default'
                  | 'duration'
                  | 'likes'
                  | 'manual'
                  | 'modified_time'
                  | 'plays'
                  | undefined
              }
            }
            output: Video[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: number } } & {
              query: {
                containing_uri?: string | undefined
                direction?: 'asc' | 'desc' | undefined
                filter?: 'embeddable' | undefined
                filter_embeddable?: boolean | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?:
                  | 'added'
                  | 'alphabetical'
                  | 'comments'
                  | 'date'
                  | 'default'
                  | 'duration'
                  | 'likes'
                  | 'manual'
                  | 'modified_time'
                  | 'plays'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { channel_id: number } } & {
              query: {
                containing_uri?: string | undefined
                direction?: 'asc' | 'desc' | undefined
                filter?: 'embeddable' | undefined
                filter_embeddable?: boolean | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?:
                  | 'added'
                  | 'alphabetical'
                  | 'comments'
                  | 'date'
                  | 'default'
                  | 'duration'
                  | 'likes'
                  | 'manual'
                  | 'modified_time'
                  | 'plays'
                  | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { channel_id: number } } & {
              query: {
                containing_uri?: string | undefined
                direction?: 'asc' | 'desc' | undefined
                filter?: 'embeddable' | undefined
                filter_embeddable?: boolean | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?:
                  | 'added'
                  | 'alphabetical'
                  | 'comments'
                  | 'date'
                  | 'default'
                  | 'duration'
                  | 'likes'
                  | 'manual'
                  | 'modified_time'
                  | 'plays'
                  | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { channel_id: number } } & { json: { video_uri: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { channel_id: number } } & { json: { video_uri: string } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { channel_id: number } } & { json: { video_uri: string } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/channels/:channel_id/videos/:video_id': {
      $delete:
        | {
            input: { param: { channel_id: number; video_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { channel_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { channel_id: number; video_id: number } }
            output: Video
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { channel_id: number; video_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { channel_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/channels/:channel_id/videos/:video_id/comments': {
      $get: {
        input: { param: { channel_id: number; video_id: number } } & {
          query: {
            direction?: 'asc' | 'desc' | undefined
            page?: number | undefined
            per_page?: number | undefined
          }
        }
        output: Comment[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { channel_id: number; video_id: number } } & { json: { text: string } }
            output: Comment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { channel_id: number; video_id: number } } & { json: { text: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { channel_id: number; video_id: number } } & { json: { text: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { channel_id: number; video_id: number } } & { json: { text: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/channels/:channel_id/videos/:video_id/credits': {
      $get: {
        input: { param: { channel_id: number; video_id: number } } & {
          query: {
            direction?: 'asc' | 'desc' | undefined
            page?: number | undefined
            per_page?: number | undefined
            query?: string | undefined
            sort?: 'alphabetical' | 'date' | undefined
          }
        }
        output: Credit[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { channel_id: number; video_id: number } } & {
              json: { email: string; name: string; role: string; user_uri: string }
            }
            output: Credit
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { channel_id: number; video_id: number } } & {
              json: { email: string; name: string; role: string; user_uri: string }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { channel_id: number; video_id: number } } & {
              json: { email: string; name: string; role: string; user_uri: string }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/channels/:channel_id/videos/:video_id/likes': {
      $get: {
        input: { param: { channel_id: number; video_id: number } } & {
          query: {
            direction?: 'asc' | 'desc' | undefined
            page?: number | undefined
            per_page?: number | undefined
            sort?: 'alphabetical' | 'date' | undefined
          }
        }
        output: User[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channels/:channel_id/videos/:video_id/pictures': {
      $get: {
        input: { param: { channel_id: number; video_id: number } } & {
          query: { page?: number | undefined; per_page?: number | undefined }
        }
        output: Picture[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { channel_id: number; video_id: number } } & {
          json: { active?: boolean | undefined; time?: number | undefined }
        }
        output: Picture
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/channels/:channel_id/videos/:video_id/privacy/users': {
      $get:
        | {
            input: { param: { channel_id: number; video_id: number } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: number; video_id: number } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
      $put: {
        input: { param: { channel_id: number; video_id: number } }
        output: User[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/channels/:channel_id/videos/:video_id/texttracks': {
      $get:
        | {
            input: { param: { channel_id: number; video_id: number } }
            output: TextTrack[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { channel_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { channel_id: number; video_id: number } } & {
              json: {
                active?: boolean | undefined
                language: string
                name: string
                type: 'captions' | 'chapters' | 'descriptions' | 'metadata' | 'subtitles'
              }
            }
            output: TextTrack
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { channel_id: number; video_id: number } } & {
              json: {
                active?: boolean | undefined
                language: string
                name: string
                type: 'captions' | 'chapters' | 'descriptions' | 'metadata' | 'subtitles'
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/contentratings': {
      $get: { input: {}; output: ContentRating[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/creativecommons': {
      $get: { input: {}; output: CreativeCommons[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/groups': {
      $get: {
        input: {
          query: {
            direction?: 'asc' | 'desc' | undefined
            filter?: 'featured' | undefined
            page?: number | undefined
            per_page?: number | undefined
            query?: string | undefined
            sort?: 'alphabetical' | 'date' | 'followers' | 'relevant' | 'videos' | undefined
          }
        }
        output: Group[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { json: { description?: string | undefined; name: string } }
            output: Group
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { description?: string | undefined; name: string } }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { description?: string | undefined; name: string } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/groups/:group_id': {
      $delete:
        | { input: { param: { group_id: number } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { group_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
      $get: {
        input: { param: { group_id: number } }
        output: Group
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/groups/:group_id/users': {
      $get:
        | {
            input: { param: { group_id: number } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                filter?: 'moderators' | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?: 'alphabetical' | 'date' | undefined
              }
            }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: number } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                filter?: 'moderators' | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?: 'alphabetical' | 'date' | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/groups/:group_id/videos': {
      $get:
        | {
            input: { param: { group_id: number } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                filter?: 'embeddable' | undefined
                filter_embeddable?: boolean | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?:
                  | 'alphabetical'
                  | 'comments'
                  | 'date'
                  | 'duration'
                  | 'likes'
                  | 'plays'
                  | undefined
              }
            }
            output: Video[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: number } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                filter?: 'embeddable' | undefined
                filter_embeddable?: boolean | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?:
                  | 'alphabetical'
                  | 'comments'
                  | 'date'
                  | 'duration'
                  | 'likes'
                  | 'plays'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 304
          }
        | {
            input: { param: { group_id: number } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                filter?: 'embeddable' | undefined
                filter_embeddable?: boolean | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?:
                  | 'alphabetical'
                  | 'comments'
                  | 'date'
                  | 'duration'
                  | 'likes'
                  | 'plays'
                  | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/groups/:group_id/videos/:video_id': {
      $delete:
        | {
            input: { param: { group_id: number; video_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { group_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
      $get:
        | {
            input: { param: { group_id: number; video_id: number } }
            output: Video
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { group_id: number; video_id: number } }
            output: Video
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { group_id: number; video_id: number } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { group_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/languages': {
      $get: {
        input: { query: { filter?: 'texttracks' | undefined } }
        output: Language[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/me': {
      $get: { input: {}; output: User; outputFormat: 'json'; status: 200 }
      $patch: {
        input: {
          json: {
            bio?: string | undefined
            content_filter?: string[] | undefined
            link?: string | undefined
            location?: string | undefined
            name?: string | undefined
            password?: string | undefined
            videos?:
              | {
                  privacy?:
                    | {
                        add?: boolean | undefined
                        comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                        download?: boolean | undefined
                        embed?: 'private' | 'public' | 'whitelist' | undefined
                        view?:
                          | 'anybody'
                          | 'contacts'
                          | 'disable'
                          | 'nobody'
                          | 'password'
                          | 'unlisted'
                          | 'users'
                          | undefined
                      }
                    | undefined
                }
              | undefined
          }
        }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/me/albums': {
      $get:
        | {
            input: {
              query: {
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?: 'alphabetical' | 'date' | 'duration' | 'videos' | undefined
              }
            }
            output: Album[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?: 'alphabetical' | 'date' | 'duration' | 'videos' | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: {
              json: {
                brand_color?: string | undefined
                description?: string | undefined
                hide_nav?: boolean | undefined
                layout?: 'grid' | 'player' | undefined
                name: string
                password?: string | undefined
                privacy?: 'anybody' | 'embed_only' | 'password' | undefined
                review_mode?: boolean | undefined
                sort?:
                  | 'added_first'
                  | 'added_last'
                  | 'alphabetical'
                  | 'arranged'
                  | 'comments'
                  | 'likes'
                  | 'newest'
                  | 'oldest'
                  | 'plays'
                  | undefined
                theme?: 'dark' | 'standard' | undefined
              }
            }
            output: Album
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                brand_color?: string | undefined
                description?: string | undefined
                hide_nav?: boolean | undefined
                layout?: 'grid' | 'player' | undefined
                name: string
                password?: string | undefined
                privacy?: 'anybody' | 'embed_only' | 'password' | undefined
                review_mode?: boolean | undefined
                sort?:
                  | 'added_first'
                  | 'added_last'
                  | 'alphabetical'
                  | 'arranged'
                  | 'comments'
                  | 'likes'
                  | 'newest'
                  | 'oldest'
                  | 'plays'
                  | undefined
                theme?: 'dark' | 'standard' | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                brand_color?: string | undefined
                description?: string | undefined
                hide_nav?: boolean | undefined
                layout?: 'grid' | 'player' | undefined
                name: string
                password?: string | undefined
                privacy?: 'anybody' | 'embed_only' | 'password' | undefined
                review_mode?: boolean | undefined
                sort?:
                  | 'added_first'
                  | 'added_last'
                  | 'alphabetical'
                  | 'arranged'
                  | 'comments'
                  | 'likes'
                  | 'newest'
                  | 'oldest'
                  | 'plays'
                  | undefined
                theme?: 'dark' | 'standard' | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/me/albums/:album_id': {
      $delete:
        | { input: { param: { album_id: number } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { album_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { album_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { album_id: number } }
            output: Album
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { album_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { album_id: number } } & {
              json: {
                brand_color?: string | undefined
                description?: string | undefined
                domain?: (string | null) | undefined
                hide_nav?: boolean | undefined
                layout?: 'grid' | 'player' | undefined
                name?: string | undefined
                password?: string | undefined
                privacy?: 'anybody' | 'embed_only' | 'password' | undefined
                review_mode?: boolean | undefined
                sort?:
                  | 'added_first'
                  | 'added_last'
                  | 'alphabetical'
                  | 'arranged'
                  | 'comments'
                  | 'likes'
                  | 'newest'
                  | 'oldest'
                  | 'plays'
                  | undefined
                theme?: 'dark' | 'standard' | undefined
                url?: (string | null) | undefined
                use_custom_domain?: boolean | undefined
              }
            }
            output: Album
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { album_id: number } } & {
              json: {
                brand_color?: string | undefined
                description?: string | undefined
                domain?: (string | null) | undefined
                hide_nav?: boolean | undefined
                layout?: 'grid' | 'player' | undefined
                name?: string | undefined
                password?: string | undefined
                privacy?: 'anybody' | 'embed_only' | 'password' | undefined
                review_mode?: boolean | undefined
                sort?:
                  | 'added_first'
                  | 'added_last'
                  | 'alphabetical'
                  | 'arranged'
                  | 'comments'
                  | 'likes'
                  | 'newest'
                  | 'oldest'
                  | 'plays'
                  | undefined
                theme?: 'dark' | 'standard' | undefined
                url?: (string | null) | undefined
                use_custom_domain?: boolean | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { album_id: number } } & {
              json: {
                brand_color?: string | undefined
                description?: string | undefined
                domain?: (string | null) | undefined
                hide_nav?: boolean | undefined
                layout?: 'grid' | 'player' | undefined
                name?: string | undefined
                password?: string | undefined
                privacy?: 'anybody' | 'embed_only' | 'password' | undefined
                review_mode?: boolean | undefined
                sort?:
                  | 'added_first'
                  | 'added_last'
                  | 'alphabetical'
                  | 'arranged'
                  | 'comments'
                  | 'likes'
                  | 'newest'
                  | 'oldest'
                  | 'plays'
                  | undefined
                theme?: 'dark' | 'standard' | undefined
                url?: (string | null) | undefined
                use_custom_domain?: boolean | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { album_id: number } } & {
              json: {
                brand_color?: string | undefined
                description?: string | undefined
                domain?: (string | null) | undefined
                hide_nav?: boolean | undefined
                layout?: 'grid' | 'player' | undefined
                name?: string | undefined
                password?: string | undefined
                privacy?: 'anybody' | 'embed_only' | 'password' | undefined
                review_mode?: boolean | undefined
                sort?:
                  | 'added_first'
                  | 'added_last'
                  | 'alphabetical'
                  | 'arranged'
                  | 'comments'
                  | 'likes'
                  | 'newest'
                  | 'oldest'
                  | 'plays'
                  | undefined
                theme?: 'dark' | 'standard' | undefined
                url?: (string | null) | undefined
                use_custom_domain?: boolean | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/me/albums/:album_id/videos': {
      $get:
        | {
            input: { param: { album_id: number } } & {
              query: {
                containing_uri?: string | undefined
                direction?: 'asc' | 'desc' | undefined
                filter?: 'embeddable' | undefined
                filter_embeddable?: boolean | undefined
                page?: number | undefined
                password?: string | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?:
                  | 'alphabetical'
                  | 'comments'
                  | 'date'
                  | 'default'
                  | 'duration'
                  | 'likes'
                  | 'manual'
                  | 'modified_time'
                  | 'plays'
                  | undefined
                weak_search?: boolean | undefined
              }
            }
            output: Video[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { album_id: number } } & {
              query: {
                containing_uri?: string | undefined
                direction?: 'asc' | 'desc' | undefined
                filter?: 'embeddable' | undefined
                filter_embeddable?: boolean | undefined
                page?: number | undefined
                password?: string | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?:
                  | 'alphabetical'
                  | 'comments'
                  | 'date'
                  | 'default'
                  | 'duration'
                  | 'likes'
                  | 'manual'
                  | 'modified_time'
                  | 'plays'
                  | undefined
                weak_search?: boolean | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { album_id: number } } & { json: { videos: string } }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { album_id: number } } & { json: { videos: string } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { album_id: number } } & { json: { videos: string } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/me/albums/:album_id/videos/:video_id': {
      $delete:
        | {
            input: { param: { album_id: number; video_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { album_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { album_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { album_id: number; video_id: number } } & {
              query: { password?: string | undefined }
            }
            output: Video
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { album_id: number; video_id: number } } & {
              query: { password?: string | undefined }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { album_id: number; video_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { album_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { album_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/me/albums/:album_id/videos/:video_id/set_album_thumbnail': {
      $post:
        | {
            input: { param: { album_id: number; video_id: number } } & {
              json: { time_code?: number | undefined }
            }
            output: Album
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { album_id: number; video_id: number } } & {
              json: { time_code?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { album_id: number; video_id: number } } & {
              json: { time_code?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { album_id: number; video_id: number } } & {
              json: { time_code?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/me/appearances': {
      $get: {
        input: {
          query: {
            direction?: 'asc' | 'desc' | undefined
            filter?: 'embeddable' | undefined
            filter_embeddable?: boolean | undefined
            page?: number | undefined
            per_page?: number | undefined
            query?: string | undefined
            sort?: 'alphabetical' | 'comments' | 'date' | 'duration' | 'likes' | 'plays' | undefined
          }
        }
        output: Video[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/me/categories': {
      $get:
        | {
            input: {
              query: {
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'alphabetical' | 'date' | 'name' | undefined
              }
            }
            output: Category[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'alphabetical' | 'date' | 'name' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/me/categories/:category': {
      $delete: {
        input: { param: { category: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { category: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $put: {
        input: { param: { category: number } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/me/channels': {
      $get:
        | {
            input: {
              query: {
                direction?: 'asc' | 'desc' | undefined
                filter?: 'moderated' | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?: 'alphabetical' | 'date' | 'followers' | 'videos' | undefined
              }
            }
            output: Channel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                direction?: 'asc' | 'desc' | undefined
                filter?: 'moderated' | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?: 'alphabetical' | 'date' | 'followers' | 'videos' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 304
          }
    }
  } & {
    '/me/channels/:channel_id': {
      $delete:
        | {
            input: { param: { channel_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { channel_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { channel_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/me/customlogos': {
      $get:
        | { input: {}; output: Picture[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: LegacyError; outputFormat: 'json'; status: 403 }
      $post:
        | { input: {}; output: Picture; outputFormat: 'json'; status: 201 }
        | { input: {}; output: LegacyError; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/me/customlogos/:logo_id': {
      $get:
        | {
            input: { param: { logo_id: number } }
            output: Picture
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { logo_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/me/feed': {
      $get: {
        input: {
          query: {
            offset?: string | undefined
            page?: number | undefined
            per_page?: number | undefined
            type?:
              | 'appears'
              | 'category_featured'
              | 'channel'
              | 'facebook_feed'
              | 'following'
              | 'group'
              | 'likes'
              | 'ondemand_publish'
              | 'share'
              | 'tagged_with'
              | 'twitter_timeline'
              | 'uploads'
              | undefined
          }
        }
        output: Activity_3_1[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/me/followers': {
      $get: {
        input: {
          query: {
            direction?: 'asc' | 'desc' | undefined
            page?: number | undefined
            per_page?: number | undefined
            query?: string | undefined
            sort?: 'alphabetical' | 'date' | undefined
          }
        }
        output: User[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/me/following': {
      $get: {
        input: {
          query: {
            direction?: 'asc' | 'desc' | undefined
            filter?: 'online' | undefined
            page?: number | undefined
            per_page?: number | undefined
            query?: string | undefined
            sort?: 'alphabetical' | 'date' | undefined
          }
        }
        output: User[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | { input: { json: { users: string[] } }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: { users: string[] } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: { users: string[] } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { users: string[] } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: { users: string[] } }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { json: { users: string[] } }; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/me/following/:follow_user_id': {
      $delete: {
        input: { param: { follow_user_id: number } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get:
        | {
            input: { param: { follow_user_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { follow_user_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { follow_user_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { follow_user_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/me/groups': {
      $get: {
        input: {
          query: {
            direction?: 'asc' | 'desc' | undefined
            filter?: 'moderated' | undefined
            page?: number | undefined
            per_page?: number | undefined
            query?: string | undefined
            sort?: 'alphabetical' | 'date' | 'members' | 'videos' | undefined
          }
        }
        output: Group[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/me/groups/:group_id': {
      $delete:
        | { input: { param: { group_id: number } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { group_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
      $put:
        | { input: { param: { group_id: number } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { group_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
      $get:
        | { input: { param: { group_id: number } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { group_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/me/likes': {
      $get: {
        input: {
          query: {
            filter?: 'embeddable' | undefined
            filter_embeddable?: boolean | undefined
            page?: number | undefined
            per_page?: number | undefined
            query?: string | undefined
            sort?: 'alphabetical' | 'comments' | 'date' | 'duration' | 'likes' | 'plays' | undefined
          }
        }
        output: Video[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/me/likes/:video_id': {
      $delete:
        | { input: { param: { video_id: number } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
      $get:
        | { input: { param: { video_id: number } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $put:
        | { input: { param: { video_id: number } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/me/ondemand/pages': {
      $get:
        | {
            input: {
              query: {
                direction?: 'asc' | 'desc' | undefined
                filter?: 'film' | 'series' | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?:
                  | 'added'
                  | 'alphabetical'
                  | 'date'
                  | 'modified_time'
                  | 'name'
                  | 'publish.time'
                  | 'rating'
                  | undefined
              }
            }
            output: OnDemandPage[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                direction?: 'asc' | 'desc' | undefined
                filter?: 'film' | 'series' | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?:
                  | 'added'
                  | 'alphabetical'
                  | 'date'
                  | 'modified_time'
                  | 'name'
                  | 'publish.time'
                  | 'rating'
                  | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $post: {
        input: {
          json: {
            accepted_currencies?:
              | 'AUD'
              | 'CAD'
              | 'CHF'
              | 'DKK'
              | 'EUR'
              | 'GBP'
              | 'JPY'
              | 'KRW'
              | 'NOK'
              | 'PLN'
              | 'SEK'
              | 'USD'
              | undefined
            buy?:
              | {
                  active?: boolean | undefined
                  download?: boolean | undefined
                  price?:
                    | {
                        AUD?: number | undefined
                        CAD?: number | undefined
                        CHF?: number | undefined
                        DKK?: number | undefined
                        EUR?: number | undefined
                        GBP?: number | undefined
                        JPY?: number | undefined
                        KRW?: number | undefined
                        NOK?: number | undefined
                        PLN?: number | undefined
                        SEK?: number | undefined
                        USD?: number | undefined
                      }
                    | undefined
                }
              | undefined
            content_rating: 'drugs' | 'language' | 'nudity' | 'safe' | 'unrated' | 'violence'
            description: string
            domain_link?: string | undefined
            episodes?:
              | {
                  buy?:
                    | {
                        active?: boolean | undefined
                        download?: boolean | undefined
                        price?: { USD?: number | undefined } | undefined
                      }
                    | undefined
                  rent?:
                    | {
                        active?: boolean | undefined
                        period?:
                          | '1 week'
                          | '1 year'
                          | '24 hour'
                          | '3 month'
                          | '30 day'
                          | '48 hour'
                          | '6 month'
                          | '72 hour'
                          | undefined
                        price?: { USD?: number | undefined } | undefined
                      }
                    | undefined
                }
              | undefined
            link?: string | undefined
            name: string
            rent?:
              | {
                  active?: boolean | undefined
                  period?:
                    | '1 week'
                    | '1 year'
                    | '24 hour'
                    | '3 month'
                    | '30 day'
                    | '48 hour'
                    | '6 month'
                    | '72 hour'
                    | undefined
                  price?:
                    | {
                        AUD?: number | undefined
                        CAD?: number | undefined
                        CHF?: number | undefined
                        DKK?: number | undefined
                        EUR?: number | undefined
                        GBP?: number | undefined
                        JPY?: number | undefined
                        KRW?: number | undefined
                        NOK?: number | undefined
                        PLN?: number | undefined
                        SEK?: number | undefined
                        USD?: number | undefined
                      }
                    | undefined
                }
              | undefined
            subscription?:
              | {
                  monthly?:
                    | {
                        active?: boolean | undefined
                        price?: { USD?: number | undefined } | undefined
                      }
                    | undefined
                }
              | undefined
            type: 'film' | 'series'
          }
        }
        output: OnDemandPage
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/me/ondemand/purchases': {
      $get:
        | {
            input: {
              query: {
                direction?: 'asc' | 'desc' | undefined
                filter?:
                  | 'all'
                  | 'expiring_soon'
                  | 'film'
                  | 'important'
                  | 'purchased'
                  | 'rented'
                  | 'series'
                  | 'subscription'
                  | 'unwatched'
                  | 'watched'
                  | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?:
                  | 'added'
                  | 'alphabetical'
                  | 'date'
                  | 'name'
                  | 'purchase_time'
                  | 'rating'
                  | 'release_date'
                  | undefined
              }
            }
            output: OnDemandPage[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                direction?: 'asc' | 'desc' | undefined
                filter?:
                  | 'all'
                  | 'expiring_soon'
                  | 'film'
                  | 'important'
                  | 'purchased'
                  | 'rented'
                  | 'series'
                  | 'subscription'
                  | 'unwatched'
                  | 'watched'
                  | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?:
                  | 'added'
                  | 'alphabetical'
                  | 'date'
                  | 'name'
                  | 'purchase_time'
                  | 'rating'
                  | 'release_date'
                  | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/me/ondemand/purchases/:ondemand_id': {
      $get:
        | {
            input: { param: { ondemand_id: number } }
            output: OnDemandPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ondemand_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ondemand_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/me/pictures': {
      $get: {
        input: { query: { page?: number | undefined; per_page?: number | undefined } }
        output: Picture[]
        outputFormat: 'json'
        status: 200
      }
      $post: { input: {}; output: Picture; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/me/pictures/:portraitset_id': {
      $delete: {
        input: { param: { portraitset_id: number } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { portraitset_id: number } }
        output: Picture
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { portraitset_id: number } } & { json: { active?: boolean | undefined } }
        output: Picture
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/me/portfolios': {
      $get: {
        input: {
          query: {
            direction?: 'asc' | 'desc' | undefined
            page?: number | undefined
            per_page?: number | undefined
            query?: string | undefined
            sort?: 'alphabetical' | 'date' | undefined
          }
        }
        output: Portfolio[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/me/portfolios/:portfolio_id': {
      $get: {
        input: { param: { portfolio_id: number } }
        output: Portfolio
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/me/portfolios/:portfolio_id/videos': {
      $get: {
        input: { param: { portfolio_id: number } } & {
          query: {
            containing_uri?: string | undefined
            filter?: 'embeddable' | undefined
            filter_embeddable?: boolean | undefined
            page?: number | undefined
            per_page?: number | undefined
            sort?:
              | 'alphabetical'
              | 'comments'
              | 'date'
              | 'default'
              | 'likes'
              | 'manual'
              | 'plays'
              | undefined
          }
        }
        output: Video[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/me/portfolios/:portfolio_id/videos/:video_id': {
      $delete:
        | {
            input: { param: { portfolio_id: number; video_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { portfolio_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $get: {
        input: { param: { portfolio_id: number; video_id: number } }
        output: Video
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { portfolio_id: number; video_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { portfolio_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/me/presets': {
      $get: {
        input: { query: { page?: number | undefined; per_page?: number | undefined } }
        output: Presets[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/me/presets/:preset_id': {
      $get: {
        input: { param: { preset_id: number } }
        output: Presets
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { preset_id: number } } & { json: { outro?: 'nothing' | undefined } }
            output: Presets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { preset_id: number } } & { json: { outro?: 'nothing' | undefined } }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { preset_id: number } } & { json: { outro?: 'nothing' | undefined } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/me/presets/:preset_id/videos': {
      $get: {
        input: { param: { preset_id: number } } & {
          query: { page?: number | undefined; per_page?: number | undefined }
        }
        output: Video[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/me/projects': {
      $get:
        | {
            input: {
              query: {
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'date' | 'default' | 'modified_time' | 'name' | undefined
              }
            }
            output: Project[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'date' | 'default' | 'modified_time' | 'name' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $post:
        | { input: { json: { name: string } }; output: Project; outputFormat: 'json'; status: 201 }
        | { input: { json: { name: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: { name: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: { name: string } }; output: Error; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/me/projects/:project_id': {
      $delete:
        | {
            input: { param: { project_id: number } } & {
              query: { should_delete_clips?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { project_id: number } } & {
              query: { should_delete_clips?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: number } } & {
              query: { should_delete_clips?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: number } } & {
              query: { should_delete_clips?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { project_id: number } }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: number } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { project_id: number } } & { json: { name: string } }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: number } } & { json: { name: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: number } } & { json: { name: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: number } } & { json: { name: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: number } } & { json: { name: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/me/projects/:project_id/videos': {
      $delete:
        | {
            input: { param: { project_id: number } } & {
              query: { should_delete_clips?: boolean | undefined; uris: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { project_id: number } } & {
              query: { should_delete_clips?: boolean | undefined; uris: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: number } } & {
              query: { should_delete_clips?: boolean | undefined; uris: string }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: number } } & {
              query: { should_delete_clips?: boolean | undefined; uris: string }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { project_id: number } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?:
                  | 'alphabetical'
                  | 'date'
                  | 'default'
                  | 'duration'
                  | 'last_user_action_event_date'
                  | undefined
              }
            }
            output: Video[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: number } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?:
                  | 'alphabetical'
                  | 'date'
                  | 'default'
                  | 'duration'
                  | 'last_user_action_event_date'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: number } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?:
                  | 'alphabetical'
                  | 'date'
                  | 'default'
                  | 'duration'
                  | 'last_user_action_event_date'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { project_id: number } } & { query: { uris: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { project_id: number } } & { query: { uris: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: number } } & { query: { uris: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: number } } & { query: { uris: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/me/projects/:project_id/videos/:video_id': {
      $delete:
        | {
            input: { param: { project_id: number; video_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { project_id: number; video_id: number } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: number; video_id: number } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: number; video_id: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { project_id: number; video_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { project_id: number; video_id: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/me/videos': {
      $get:
        | {
            input: {
              query: {
                containing_uri?: string | undefined
                direction?: 'asc' | 'desc' | undefined
                filter?: 'app_only' | 'embeddable' | 'featured' | 'playable' | undefined
                filter_embeddable?: boolean | undefined
                filter_playable?: boolean | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?:
                  | 'alphabetical'
                  | 'comments'
                  | 'date'
                  | 'default'
                  | 'duration'
                  | 'last_user_action_event_date'
                  | 'likes'
                  | 'modified_time'
                  | 'plays'
                  | undefined
              }
            }
            output: Video[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                containing_uri?: string | undefined
                direction?: 'asc' | 'desc' | undefined
                filter?: 'app_only' | 'embeddable' | 'featured' | 'playable' | undefined
                filter_embeddable?: boolean | undefined
                filter_playable?: boolean | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?:
                  | 'alphabetical'
                  | 'comments'
                  | 'date'
                  | 'default'
                  | 'duration'
                  | 'last_user_action_event_date'
                  | 'likes'
                  | 'modified_time'
                  | 'plays'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 304
          }
      $post:
        | {
            input: {
              json: {
                content_rating?: string[] | undefined
                description?: string | undefined
                embed?:
                  | {
                      buttons?:
                        | {
                            embed?: boolean | undefined
                            fullscreen?: boolean | undefined
                            hd?: boolean | undefined
                            like?: boolean | undefined
                            scaling?: boolean | undefined
                            share?: boolean | undefined
                            watchlater?: boolean | undefined
                          }
                        | undefined
                      color?: string | undefined
                      logos?:
                        | {
                            custom?:
                              | {
                                  active?: boolean | undefined
                                  link?: string | undefined
                                  sticky?: boolean | undefined
                                }
                              | undefined
                            vimeo?: boolean | undefined
                          }
                        | undefined
                      playbar?: boolean | undefined
                      title?:
                        | {
                            name?: 'hide' | 'show' | 'user' | undefined
                            owner?: 'hide' | 'show' | 'user' | undefined
                            portrait?: 'hide' | 'show' | 'user' | undefined
                          }
                        | undefined
                      volume?: boolean | undefined
                    }
                  | undefined
                license?:
                  | 'by'
                  | 'by-nc'
                  | 'by-nc-nd'
                  | 'by-nc-sa'
                  | 'by-nd'
                  | 'by-sa'
                  | 'cc0'
                  | undefined
                locale?: string | undefined
                name?: string | undefined
                password?: string | undefined
                privacy?:
                  | {
                      add?: boolean | undefined
                      comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                      download?: boolean | undefined
                      embed?: 'private' | 'public' | 'whitelist' | undefined
                      view?:
                        | 'anybody'
                        | 'contacts'
                        | 'disable'
                        | 'nobody'
                        | 'password'
                        | 'unlisted'
                        | 'users'
                        | undefined
                    }
                  | undefined
                review_page?: { active?: boolean | undefined } | undefined
                spatial?:
                  | {
                      director_timeline?:
                        | {
                            pitch: number
                            roll?: number | undefined
                            time_code: number
                            yaw: number
                          }[]
                        | undefined
                      field_of_view?: number | undefined
                      projection?:
                        | 'cubical'
                        | 'cylindrical'
                        | 'dome'
                        | 'equirectangular'
                        | 'pyramid'
                        | undefined
                      stereo_format?: 'left-right' | 'mono' | 'top-bottom' | undefined
                    }
                  | undefined
                upload: {
                  approach: 'post' | 'pull' | 'streaming' | 'tus'
                  link?: string | undefined
                  redirect_url?: string | undefined
                  size?: string | undefined
                }
              }
            }
            output: Video
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                content_rating?: string[] | undefined
                description?: string | undefined
                embed?:
                  | {
                      buttons?:
                        | {
                            embed?: boolean | undefined
                            fullscreen?: boolean | undefined
                            hd?: boolean | undefined
                            like?: boolean | undefined
                            scaling?: boolean | undefined
                            share?: boolean | undefined
                            watchlater?: boolean | undefined
                          }
                        | undefined
                      color?: string | undefined
                      logos?:
                        | {
                            custom?:
                              | {
                                  active?: boolean | undefined
                                  link?: string | undefined
                                  sticky?: boolean | undefined
                                }
                              | undefined
                            vimeo?: boolean | undefined
                          }
                        | undefined
                      playbar?: boolean | undefined
                      title?:
                        | {
                            name?: 'hide' | 'show' | 'user' | undefined
                            owner?: 'hide' | 'show' | 'user' | undefined
                            portrait?: 'hide' | 'show' | 'user' | undefined
                          }
                        | undefined
                      volume?: boolean | undefined
                    }
                  | undefined
                license?:
                  | 'by'
                  | 'by-nc'
                  | 'by-nc-nd'
                  | 'by-nc-sa'
                  | 'by-nd'
                  | 'by-sa'
                  | 'cc0'
                  | undefined
                locale?: string | undefined
                name?: string | undefined
                password?: string | undefined
                privacy?:
                  | {
                      add?: boolean | undefined
                      comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                      download?: boolean | undefined
                      embed?: 'private' | 'public' | 'whitelist' | undefined
                      view?:
                        | 'anybody'
                        | 'contacts'
                        | 'disable'
                        | 'nobody'
                        | 'password'
                        | 'unlisted'
                        | 'users'
                        | undefined
                    }
                  | undefined
                review_page?: { active?: boolean | undefined } | undefined
                spatial?:
                  | {
                      director_timeline?:
                        | {
                            pitch: number
                            roll?: number | undefined
                            time_code: number
                            yaw: number
                          }[]
                        | undefined
                      field_of_view?: number | undefined
                      projection?:
                        | 'cubical'
                        | 'cylindrical'
                        | 'dome'
                        | 'equirectangular'
                        | 'pyramid'
                        | undefined
                      stereo_format?: 'left-right' | 'mono' | 'top-bottom' | undefined
                    }
                  | undefined
                upload: {
                  approach: 'post' | 'pull' | 'streaming' | 'tus'
                  link?: string | undefined
                  redirect_url?: string | undefined
                  size?: string | undefined
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                content_rating?: string[] | undefined
                description?: string | undefined
                embed?:
                  | {
                      buttons?:
                        | {
                            embed?: boolean | undefined
                            fullscreen?: boolean | undefined
                            hd?: boolean | undefined
                            like?: boolean | undefined
                            scaling?: boolean | undefined
                            share?: boolean | undefined
                            watchlater?: boolean | undefined
                          }
                        | undefined
                      color?: string | undefined
                      logos?:
                        | {
                            custom?:
                              | {
                                  active?: boolean | undefined
                                  link?: string | undefined
                                  sticky?: boolean | undefined
                                }
                              | undefined
                            vimeo?: boolean | undefined
                          }
                        | undefined
                      playbar?: boolean | undefined
                      title?:
                        | {
                            name?: 'hide' | 'show' | 'user' | undefined
                            owner?: 'hide' | 'show' | 'user' | undefined
                            portrait?: 'hide' | 'show' | 'user' | undefined
                          }
                        | undefined
                      volume?: boolean | undefined
                    }
                  | undefined
                license?:
                  | 'by'
                  | 'by-nc'
                  | 'by-nc-nd'
                  | 'by-nc-sa'
                  | 'by-nd'
                  | 'by-sa'
                  | 'cc0'
                  | undefined
                locale?: string | undefined
                name?: string | undefined
                password?: string | undefined
                privacy?:
                  | {
                      add?: boolean | undefined
                      comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                      download?: boolean | undefined
                      embed?: 'private' | 'public' | 'whitelist' | undefined
                      view?:
                        | 'anybody'
                        | 'contacts'
                        | 'disable'
                        | 'nobody'
                        | 'password'
                        | 'unlisted'
                        | 'users'
                        | undefined
                    }
                  | undefined
                review_page?: { active?: boolean | undefined } | undefined
                spatial?:
                  | {
                      director_timeline?:
                        | {
                            pitch: number
                            roll?: number | undefined
                            time_code: number
                            yaw: number
                          }[]
                        | undefined
                      field_of_view?: number | undefined
                      projection?:
                        | 'cubical'
                        | 'cylindrical'
                        | 'dome'
                        | 'equirectangular'
                        | 'pyramid'
                        | undefined
                      stereo_format?: 'left-right' | 'mono' | 'top-bottom' | undefined
                    }
                  | undefined
                upload: {
                  approach: 'post' | 'pull' | 'streaming' | 'tus'
                  link?: string | undefined
                  redirect_url?: string | undefined
                  size?: string | undefined
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                content_rating?: string[] | undefined
                description?: string | undefined
                embed?:
                  | {
                      buttons?:
                        | {
                            embed?: boolean | undefined
                            fullscreen?: boolean | undefined
                            hd?: boolean | undefined
                            like?: boolean | undefined
                            scaling?: boolean | undefined
                            share?: boolean | undefined
                            watchlater?: boolean | undefined
                          }
                        | undefined
                      color?: string | undefined
                      logos?:
                        | {
                            custom?:
                              | {
                                  active?: boolean | undefined
                                  link?: string | undefined
                                  sticky?: boolean | undefined
                                }
                              | undefined
                            vimeo?: boolean | undefined
                          }
                        | undefined
                      playbar?: boolean | undefined
                      title?:
                        | {
                            name?: 'hide' | 'show' | 'user' | undefined
                            owner?: 'hide' | 'show' | 'user' | undefined
                            portrait?: 'hide' | 'show' | 'user' | undefined
                          }
                        | undefined
                      volume?: boolean | undefined
                    }
                  | undefined
                license?:
                  | 'by'
                  | 'by-nc'
                  | 'by-nc-nd'
                  | 'by-nc-sa'
                  | 'by-nd'
                  | 'by-sa'
                  | 'cc0'
                  | undefined
                locale?: string | undefined
                name?: string | undefined
                password?: string | undefined
                privacy?:
                  | {
                      add?: boolean | undefined
                      comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                      download?: boolean | undefined
                      embed?: 'private' | 'public' | 'whitelist' | undefined
                      view?:
                        | 'anybody'
                        | 'contacts'
                        | 'disable'
                        | 'nobody'
                        | 'password'
                        | 'unlisted'
                        | 'users'
                        | undefined
                    }
                  | undefined
                review_page?: { active?: boolean | undefined } | undefined
                spatial?:
                  | {
                      director_timeline?:
                        | {
                            pitch: number
                            roll?: number | undefined
                            time_code: number
                            yaw: number
                          }[]
                        | undefined
                      field_of_view?: number | undefined
                      projection?:
                        | 'cubical'
                        | 'cylindrical'
                        | 'dome'
                        | 'equirectangular'
                        | 'pyramid'
                        | undefined
                      stereo_format?: 'left-right' | 'mono' | 'top-bottom' | undefined
                    }
                  | undefined
                upload: {
                  approach: 'post' | 'pull' | 'streaming' | 'tus'
                  link?: string | undefined
                  redirect_url?: string | undefined
                  size?: string | undefined
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                content_rating?: string[] | undefined
                description?: string | undefined
                embed?:
                  | {
                      buttons?:
                        | {
                            embed?: boolean | undefined
                            fullscreen?: boolean | undefined
                            hd?: boolean | undefined
                            like?: boolean | undefined
                            scaling?: boolean | undefined
                            share?: boolean | undefined
                            watchlater?: boolean | undefined
                          }
                        | undefined
                      color?: string | undefined
                      logos?:
                        | {
                            custom?:
                              | {
                                  active?: boolean | undefined
                                  link?: string | undefined
                                  sticky?: boolean | undefined
                                }
                              | undefined
                            vimeo?: boolean | undefined
                          }
                        | undefined
                      playbar?: boolean | undefined
                      title?:
                        | {
                            name?: 'hide' | 'show' | 'user' | undefined
                            owner?: 'hide' | 'show' | 'user' | undefined
                            portrait?: 'hide' | 'show' | 'user' | undefined
                          }
                        | undefined
                      volume?: boolean | undefined
                    }
                  | undefined
                license?:
                  | 'by'
                  | 'by-nc'
                  | 'by-nc-nd'
                  | 'by-nc-sa'
                  | 'by-nd'
                  | 'by-sa'
                  | 'cc0'
                  | undefined
                locale?: string | undefined
                name?: string | undefined
                password?: string | undefined
                privacy?:
                  | {
                      add?: boolean | undefined
                      comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                      download?: boolean | undefined
                      embed?: 'private' | 'public' | 'whitelist' | undefined
                      view?:
                        | 'anybody'
                        | 'contacts'
                        | 'disable'
                        | 'nobody'
                        | 'password'
                        | 'unlisted'
                        | 'users'
                        | undefined
                    }
                  | undefined
                review_page?: { active?: boolean | undefined } | undefined
                spatial?:
                  | {
                      director_timeline?:
                        | {
                            pitch: number
                            roll?: number | undefined
                            time_code: number
                            yaw: number
                          }[]
                        | undefined
                      field_of_view?: number | undefined
                      projection?:
                        | 'cubical'
                        | 'cylindrical'
                        | 'dome'
                        | 'equirectangular'
                        | 'pyramid'
                        | undefined
                      stereo_format?: 'left-right' | 'mono' | 'top-bottom' | undefined
                    }
                  | undefined
                upload: {
                  approach: 'post' | 'pull' | 'streaming' | 'tus'
                  link?: string | undefined
                  redirect_url?: string | undefined
                  size?: string | undefined
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/me/videos/:video_id': {
      $get:
        | {
            input: { param: { video_id: number } }
            output: Video
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/me/watched/videos': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 204 }
      $get:
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: Video[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/me/watched/videos/:video_id': {
      $delete: {
        input: { param: { video_id: number } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/me/watchlater': {
      $get:
        | {
            input: {
              query: {
                direction?: 'asc' | 'desc' | undefined
                filter?: 'embeddable' | undefined
                filter_embeddable?: boolean | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?:
                  | 'alphabetical'
                  | 'comments'
                  | 'date'
                  | 'duration'
                  | 'likes'
                  | 'plays'
                  | undefined
              }
            }
            output: Video[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                direction?: 'asc' | 'desc' | undefined
                filter?: 'embeddable' | undefined
                filter_embeddable?: boolean | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?:
                  | 'alphabetical'
                  | 'comments'
                  | 'date'
                  | 'duration'
                  | 'likes'
                  | 'plays'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 304
          }
    }
  } & {
    '/me/watchlater/:video_id': {
      $delete: {
        input: { param: { video_id: number } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get:
        | {
            input: { param: { video_id: number } }
            output: Video
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $put: {
        input: { param: { video_id: number } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/oauth/access_token': {
      $post:
        | {
            input: {
              json: { code: string; grant_type: 'authorization_code'; redirect_uri: string }
            }
            output: Auth
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: { code: string; grant_type: 'authorization_code'; redirect_uri: string }
            }
            output: AuthError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/oauth/authorize/client': {
      $post:
        | {
            input: { json: { grant_type: 'client_credentials'; scope: string } }
            output: Auth
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { grant_type: 'client_credentials'; scope: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/oauth/authorize/vimeo_oauth1': {
      $post:
        | {
            input: { json: { grant_type: 'vimeo_oauth1'; token: string; token_secret: string } }
            output: Auth
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { grant_type: 'vimeo_oauth1'; token: string; token_secret: string } }
            output: AuthError
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/oauth/verify': {
      $get:
        | { input: {}; output: Auth; outputFormat: 'json'; status: 200 }
        | { input: {}; output: LegacyError; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/ondemand/genres': {
      $get: { input: {}; output: OnDemandGenre[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/ondemand/genres/:genre_id': {
      $get:
        | {
            input: { param: { genre_id: string } }
            output: OnDemandGenre
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { genre_id: string } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ondemand/genres/:genre_id/pages': {
      $get: {
        input: { param: { genre_id: string } } & {
          query: {
            direction?: 'asc' | 'desc' | undefined
            filter?: 'country' | 'my_region' | undefined
            page?: number | undefined
            per_page?: number | undefined
            query?: string | undefined
            sort?: 'alphabetical' | 'date' | 'name' | 'publish.time' | 'videos' | undefined
          }
        }
        output: OnDemandPage[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ondemand/genres/:genre_id/pages/:ondemand_id': {
      $get:
        | {
            input: { param: { genre_id: string; ondemand_id: number } }
            output: OnDemandPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { genre_id: string; ondemand_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ondemand/pages/:ondemand_id': {
      $delete:
        | {
            input: { param: { ondemand_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ondemand_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ondemand_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { ondemand_id: number } }
            output: OnDemandPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ondemand_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { ondemand_id: number } } & {
              json: {
                link?: string | undefined
                preorder?:
                  | { active?: boolean | undefined; publish_time?: string | undefined }
                  | undefined
                publish?: { active?: boolean | undefined } | undefined
                publish_when_ready?: boolean | undefined
              }
            }
            output: OnDemandPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ondemand_id: number } } & {
              json: {
                link?: string | undefined
                preorder?:
                  | { active?: boolean | undefined; publish_time?: string | undefined }
                  | undefined
                publish?: { active?: boolean | undefined } | undefined
                publish_when_ready?: boolean | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ondemand_id: number } } & {
              json: {
                link?: string | undefined
                preorder?:
                  | { active?: boolean | undefined; publish_time?: string | undefined }
                  | undefined
                publish?: { active?: boolean | undefined } | undefined
                publish_when_ready?: boolean | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ondemand/pages/:ondemand_id/backgrounds': {
      $get:
        | {
            input: { param: { ondemand_id: number } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: Picture[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ondemand_id: number } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { ondemand_id: number } }
            output: Picture
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ondemand_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ondemand_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ondemand/pages/:ondemand_id/backgrounds/:background_id': {
      $delete:
        | {
            input: { param: { background_id: number; ondemand_id: number } }
            output: Picture
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { param: { background_id: number; ondemand_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { background_id: number; ondemand_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { background_id: number; ondemand_id: number } }
            output: Picture
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { background_id: number; ondemand_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { background_id: number; ondemand_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { background_id: number; ondemand_id: number } } & {
              json: { active?: boolean | undefined }
            }
            output: Picture
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { background_id: number; ondemand_id: number } } & {
              json: { active?: boolean | undefined }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { background_id: number; ondemand_id: number } } & {
              json: { active?: boolean | undefined }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ondemand/pages/:ondemand_id/genres': {
      $get:
        | {
            input: { param: { ondemand_id: number } }
            output: OnDemandGenre[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ondemand_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ondemand/pages/:ondemand_id/genres/:genre_id': {
      $delete:
        | {
            input: { param: { genre_id: string; ondemand_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { genre_id: string; ondemand_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { genre_id: string; ondemand_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { genre_id: string; ondemand_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { genre_id: string; ondemand_id: number } }
            output: OnDemandGenre
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { genre_id: string; ondemand_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { genre_id: string; ondemand_id: number } }
            output: OnDemandGenre
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { genre_id: string; ondemand_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { genre_id: string; ondemand_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { genre_id: string; ondemand_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ondemand/pages/:ondemand_id/likes': {
      $get: {
        input: { param: { ondemand_id: number } } & {
          query: {
            direction?: 'asc' | 'desc' | undefined
            filter?: 'extra' | 'main' | 'trailer' | undefined
            page?: number | undefined
            per_page?: number | undefined
            sort?: 'alphabetical' | 'date' | undefined
          }
        }
        output: User[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ondemand/pages/:ondemand_id/pictures': {
      $get:
        | {
            input: { param: { ondemand_id: number } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: Picture[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ondemand_id: number } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { ondemand_id: number } }
            output: Picture
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { ondemand_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ondemand/pages/:ondemand_id/pictures/:poster_id': {
      $get: {
        input: { param: { ondemand_id: number; poster_id: number } }
        output: Picture
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { ondemand_id: number; poster_id: number } } & {
          json: { active?: boolean | undefined }
        }
        output: Picture
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ondemand/pages/:ondemand_id/promotions': {
      $get:
        | {
            input: { param: { ondemand_id: number } } & {
              query: {
                filter: 'batch' | 'default' | 'single' | 'vip'
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: OnDemandPromotion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ondemand_id: number } } & {
              query: {
                filter: 'batch' | 'default' | 'single' | 'vip'
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ondemand_id: number } } & {
              query: {
                filter: 'batch' | 'default' | 'single' | 'vip'
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ondemand_id: number } } & {
              query: {
                filter: 'batch' | 'default' | 'single' | 'vip'
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { ondemand_id: number } } & {
              json: {
                access_type?: 'default' | 'vip' | undefined
                code?: string | undefined
                discount_type?: 'free' | 'percent' | undefined
                download: boolean
                end_time?: string | undefined
                label?: string | undefined
                percent_off?: number | undefined
                product_type?:
                  | 'any'
                  | 'buy'
                  | 'buy_episode'
                  | 'rent'
                  | 'rent_episode'
                  | 'subscribe'
                  | undefined
                start_time?: string | undefined
                stream_period:
                  | '1_week'
                  | '1_year'
                  | '24_hour'
                  | '30_day'
                  | '3_month'
                  | '48_hour'
                  | '6_month'
                  | '72_hour'
                total: number
                type: 'batch' | 'single'
              }
            }
            output: OnDemandPromotion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ondemand_id: number } } & {
              json: {
                access_type?: 'default' | 'vip' | undefined
                code?: string | undefined
                discount_type?: 'free' | 'percent' | undefined
                download: boolean
                end_time?: string | undefined
                label?: string | undefined
                percent_off?: number | undefined
                product_type?:
                  | 'any'
                  | 'buy'
                  | 'buy_episode'
                  | 'rent'
                  | 'rent_episode'
                  | 'subscribe'
                  | undefined
                start_time?: string | undefined
                stream_period:
                  | '1_week'
                  | '1_year'
                  | '24_hour'
                  | '30_day'
                  | '3_month'
                  | '48_hour'
                  | '6_month'
                  | '72_hour'
                total: number
                type: 'batch' | 'single'
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ondemand_id: number } } & {
              json: {
                access_type?: 'default' | 'vip' | undefined
                code?: string | undefined
                discount_type?: 'free' | 'percent' | undefined
                download: boolean
                end_time?: string | undefined
                label?: string | undefined
                percent_off?: number | undefined
                product_type?:
                  | 'any'
                  | 'buy'
                  | 'buy_episode'
                  | 'rent'
                  | 'rent_episode'
                  | 'subscribe'
                  | undefined
                start_time?: string | undefined
                stream_period:
                  | '1_week'
                  | '1_year'
                  | '24_hour'
                  | '30_day'
                  | '3_month'
                  | '48_hour'
                  | '6_month'
                  | '72_hour'
                total: number
                type: 'batch' | 'single'
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ondemand_id: number } } & {
              json: {
                access_type?: 'default' | 'vip' | undefined
                code?: string | undefined
                discount_type?: 'free' | 'percent' | undefined
                download: boolean
                end_time?: string | undefined
                label?: string | undefined
                percent_off?: number | undefined
                product_type?:
                  | 'any'
                  | 'buy'
                  | 'buy_episode'
                  | 'rent'
                  | 'rent_episode'
                  | 'subscribe'
                  | undefined
                start_time?: string | undefined
                stream_period:
                  | '1_week'
                  | '1_year'
                  | '24_hour'
                  | '30_day'
                  | '3_month'
                  | '48_hour'
                  | '6_month'
                  | '72_hour'
                total: number
                type: 'batch' | 'single'
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ondemand/pages/:ondemand_id/promotions/:promotion_id': {
      $delete:
        | {
            input: { param: { ondemand_id: number; promotion_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ondemand_id: number; promotion_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ondemand_id: number; promotion_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { ondemand_id: number; promotion_id: number } }
            output: OnDemandPromotion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ondemand_id: number; promotion_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ondemand_id: number; promotion_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ondemand/pages/:ondemand_id/promotions/:promotion_id/codes': {
      $get:
        | {
            input: { param: { ondemand_id: number; promotion_id: number } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: OnDemandPromotionCode
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ondemand_id: number; promotion_id: number } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ondemand_id: number; promotion_id: number } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ondemand/pages/:ondemand_id/regions': {
      $delete:
        | {
            input: { param: { ondemand_id: number } } & {
              json: { countries?: string[] | undefined }
            }
            output: OnDemandRegion[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ondemand_id: number } } & {
              json: { countries?: string[] | undefined }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ondemand_id: number } } & {
              json: { countries?: string[] | undefined }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { ondemand_id: number } }
            output: OnDemandRegion[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ondemand_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { ondemand_id: number } } & { json: { countries: string[] } }
            output: OnDemandRegion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ondemand_id: number } } & { json: { countries: string[] } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ondemand_id: number } } & { json: { countries: string[] } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ondemand/pages/:ondemand_id/regions/:country': {
      $delete:
        | {
            input: { param: { country: string; ondemand_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { country: string; ondemand_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { country: string; ondemand_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { country: string; ondemand_id: number } }
            output: OnDemandRegion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { country: string; ondemand_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { country: string; ondemand_id: number } }
            output: OnDemandRegion
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { country: string; ondemand_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { country: string; ondemand_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ondemand/pages/:ondemand_id/seasons': {
      $get:
        | {
            input: { param: { ondemand_id: number } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                filter?: 'viewable' | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'date' | 'manual' | undefined
              }
            }
            output: OnDemandSeason[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ondemand_id: number } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                filter?: 'viewable' | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'date' | 'manual' | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ondemand/pages/:ondemand_id/seasons/:season_id': {
      $get:
        | {
            input: { param: { ondemand_id: number; season_id: number } }
            output: OnDemandSeason
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ondemand_id: number; season_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ondemand/pages/:ondemand_id/seasons/:season_id/videos': {
      $get: {
        input: { param: { ondemand_id: number; season_id: number } } & {
          query: {
            filter?: 'viewable' | undefined
            page?: number | undefined
            per_page?: number | undefined
            sort?:
              | 'date'
              | 'default'
              | 'manual'
              | 'name'
              | 'purchase_time'
              | 'release_date'
              | undefined
          }
        }
        output: Video[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ondemand/pages/:ondemand_id/videos': {
      $get: {
        input: { param: { ondemand_id: number } } & {
          query: {
            direction?: 'asc' | 'desc' | undefined
            filter?:
              | 'all'
              | 'buy'
              | 'expiring_soon'
              | 'extra'
              | 'main'
              | 'main.viewable'
              | 'rent'
              | 'trailer'
              | 'unwatched'
              | 'viewable'
              | 'watched'
              | undefined
            page?: number | undefined
            per_page?: number | undefined
            sort?:
              | 'date'
              | 'default'
              | 'episode'
              | 'manual'
              | 'name'
              | 'purchase_time'
              | 'release_date'
              | undefined
          }
        }
        output: Video[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ondemand/pages/:ondemand_id/videos/:video_id': {
      $delete:
        | {
            input: { param: { ondemand_id: number; video_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ondemand_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
      $get: {
        input: { param: { ondemand_id: number; video_id: number } }
        output: Video
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { ondemand_id: number; video_id: number } } & {
              json: {
                buy?:
                  | {
                      price?:
                        | {
                            AUD?: number | undefined
                            CAD?: number | undefined
                            CHF?: number | undefined
                            DKK?: number | undefined
                            EUR?: number | undefined
                            GBP?: number | undefined
                            JPY?: number | undefined
                            KRW?: number | undefined
                            NOK?: number | undefined
                            PLN?: number | undefined
                            SEK?: number | undefined
                            USD?: number | undefined
                          }
                        | undefined
                    }
                  | undefined
                position?: number | undefined
                release_year?: number | undefined
                rent?:
                  | {
                      price?:
                        | {
                            AUD?: number | undefined
                            CAD?: number | undefined
                            CHF?: number | undefined
                            DKK?: number | undefined
                            EUR?: number | undefined
                            GBP?: number | undefined
                            JPY?: number | undefined
                            KRW?: number | undefined
                            NOK?: number | undefined
                            PLN?: number | undefined
                            SEK?: number | undefined
                            USD?: number | undefined
                          }
                        | undefined
                    }
                  | undefined
                type: 'extra' | 'main' | 'trailer'
              }
            }
            output: OnDemandVideo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ondemand_id: number; video_id: number } } & {
              json: {
                buy?:
                  | {
                      price?:
                        | {
                            AUD?: number | undefined
                            CAD?: number | undefined
                            CHF?: number | undefined
                            DKK?: number | undefined
                            EUR?: number | undefined
                            GBP?: number | undefined
                            JPY?: number | undefined
                            KRW?: number | undefined
                            NOK?: number | undefined
                            PLN?: number | undefined
                            SEK?: number | undefined
                            USD?: number | undefined
                          }
                        | undefined
                    }
                  | undefined
                position?: number | undefined
                release_year?: number | undefined
                rent?:
                  | {
                      price?:
                        | {
                            AUD?: number | undefined
                            CAD?: number | undefined
                            CHF?: number | undefined
                            DKK?: number | undefined
                            EUR?: number | undefined
                            GBP?: number | undefined
                            JPY?: number | undefined
                            KRW?: number | undefined
                            NOK?: number | undefined
                            PLN?: number | undefined
                            SEK?: number | undefined
                            USD?: number | undefined
                          }
                        | undefined
                    }
                  | undefined
                type: 'extra' | 'main' | 'trailer'
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ondemand_id: number; video_id: number } } & {
              json: {
                buy?:
                  | {
                      price?:
                        | {
                            AUD?: number | undefined
                            CAD?: number | undefined
                            CHF?: number | undefined
                            DKK?: number | undefined
                            EUR?: number | undefined
                            GBP?: number | undefined
                            JPY?: number | undefined
                            KRW?: number | undefined
                            NOK?: number | undefined
                            PLN?: number | undefined
                            SEK?: number | undefined
                            USD?: number | undefined
                          }
                        | undefined
                    }
                  | undefined
                position?: number | undefined
                release_year?: number | undefined
                rent?:
                  | {
                      price?:
                        | {
                            AUD?: number | undefined
                            CAD?: number | undefined
                            CHF?: number | undefined
                            DKK?: number | undefined
                            EUR?: number | undefined
                            GBP?: number | undefined
                            JPY?: number | undefined
                            KRW?: number | undefined
                            NOK?: number | undefined
                            PLN?: number | undefined
                            SEK?: number | undefined
                            USD?: number | undefined
                          }
                        | undefined
                    }
                  | undefined
                type: 'extra' | 'main' | 'trailer'
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/ondemand/regions': {
      $get: { input: {}; output: OnDemandRegion[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/ondemand/regions/:country': {
      $get:
        | {
            input: { param: { country: string } }
            output: OnDemandRegion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { country: string } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/tags/:word': {
      $get: { input: { param: { word: string } }; output: Tag; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/tags/:word/videos': {
      $get:
        | {
            input: { param: { word: string } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'created_time' | 'duration' | 'name' | undefined
              }
            }
            output: Video[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { word: string } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'created_time' | 'duration' | 'name' | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/tokens': {
      $delete:
        | { input: {}; output: Auth; outputFormat: 'json'; status: 204 }
        | { input: {}; output: LegacyError; outputFormat: 'json'; status: 400 }
    }
  } & { '/tutorial': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/users': {
      $get:
        | {
            input: {
              query: {
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?: 'alphabetical' | 'date' | 'followers' | 'relevant' | 'videos' | undefined
              }
            }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?: 'alphabetical' | 'date' | 'followers' | 'relevant' | 'videos' | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?: 'alphabetical' | 'date' | 'followers' | 'relevant' | 'videos' | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/users/:user_id': {
      $get: {
        input: { param: { user_id: number } }
        output: User
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { user_id: number } } & {
          json: {
            bio?: string | undefined
            content_filter?: string[] | undefined
            link?: string | undefined
            location?: string | undefined
            name?: string | undefined
            password?: string | undefined
            videos?:
              | {
                  privacy?:
                    | {
                        add?: boolean | undefined
                        comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                        download?: boolean | undefined
                        embed?: 'private' | 'public' | 'whitelist' | undefined
                        view?:
                          | 'anybody'
                          | 'contacts'
                          | 'disable'
                          | 'nobody'
                          | 'password'
                          | 'unlisted'
                          | 'users'
                          | undefined
                      }
                    | undefined
                }
              | undefined
          }
        }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:user_id/albums': {
      $get:
        | {
            input: { param: { user_id: number } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?: 'alphabetical' | 'date' | 'duration' | 'videos' | undefined
              }
            }
            output: Album[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: number } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?: 'alphabetical' | 'date' | 'duration' | 'videos' | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { user_id: number } } & {
              json: {
                brand_color?: string | undefined
                description?: string | undefined
                hide_nav?: boolean | undefined
                layout?: 'grid' | 'player' | undefined
                name: string
                password?: string | undefined
                privacy?: 'anybody' | 'embed_only' | 'password' | undefined
                review_mode?: boolean | undefined
                sort?:
                  | 'added_first'
                  | 'added_last'
                  | 'alphabetical'
                  | 'arranged'
                  | 'comments'
                  | 'likes'
                  | 'newest'
                  | 'oldest'
                  | 'plays'
                  | undefined
                theme?: 'dark' | 'standard' | undefined
              }
            }
            output: Album
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { user_id: number } } & {
              json: {
                brand_color?: string | undefined
                description?: string | undefined
                hide_nav?: boolean | undefined
                layout?: 'grid' | 'player' | undefined
                name: string
                password?: string | undefined
                privacy?: 'anybody' | 'embed_only' | 'password' | undefined
                review_mode?: boolean | undefined
                sort?:
                  | 'added_first'
                  | 'added_last'
                  | 'alphabetical'
                  | 'arranged'
                  | 'comments'
                  | 'likes'
                  | 'newest'
                  | 'oldest'
                  | 'plays'
                  | undefined
                theme?: 'dark' | 'standard' | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: number } } & {
              json: {
                brand_color?: string | undefined
                description?: string | undefined
                hide_nav?: boolean | undefined
                layout?: 'grid' | 'player' | undefined
                name: string
                password?: string | undefined
                privacy?: 'anybody' | 'embed_only' | 'password' | undefined
                review_mode?: boolean | undefined
                sort?:
                  | 'added_first'
                  | 'added_last'
                  | 'alphabetical'
                  | 'arranged'
                  | 'comments'
                  | 'likes'
                  | 'newest'
                  | 'oldest'
                  | 'plays'
                  | undefined
                theme?: 'dark' | 'standard' | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/users/:user_id/albums/:album_id': {
      $delete:
        | {
            input: { param: { album_id: number; user_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { album_id: number; user_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { album_id: number; user_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { album_id: number; user_id: number } }
            output: Album
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { album_id: number; user_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { album_id: number; user_id: number } } & {
              json: {
                brand_color?: string | undefined
                description?: string | undefined
                domain?: (string | null) | undefined
                hide_nav?: boolean | undefined
                layout?: 'grid' | 'player' | undefined
                name?: string | undefined
                password?: string | undefined
                privacy?: 'anybody' | 'embed_only' | 'password' | undefined
                review_mode?: boolean | undefined
                sort?:
                  | 'added_first'
                  | 'added_last'
                  | 'alphabetical'
                  | 'arranged'
                  | 'comments'
                  | 'likes'
                  | 'newest'
                  | 'oldest'
                  | 'plays'
                  | undefined
                theme?: 'dark' | 'standard' | undefined
                url?: (string | null) | undefined
                use_custom_domain?: boolean | undefined
              }
            }
            output: Album
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { album_id: number; user_id: number } } & {
              json: {
                brand_color?: string | undefined
                description?: string | undefined
                domain?: (string | null) | undefined
                hide_nav?: boolean | undefined
                layout?: 'grid' | 'player' | undefined
                name?: string | undefined
                password?: string | undefined
                privacy?: 'anybody' | 'embed_only' | 'password' | undefined
                review_mode?: boolean | undefined
                sort?:
                  | 'added_first'
                  | 'added_last'
                  | 'alphabetical'
                  | 'arranged'
                  | 'comments'
                  | 'likes'
                  | 'newest'
                  | 'oldest'
                  | 'plays'
                  | undefined
                theme?: 'dark' | 'standard' | undefined
                url?: (string | null) | undefined
                use_custom_domain?: boolean | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { album_id: number; user_id: number } } & {
              json: {
                brand_color?: string | undefined
                description?: string | undefined
                domain?: (string | null) | undefined
                hide_nav?: boolean | undefined
                layout?: 'grid' | 'player' | undefined
                name?: string | undefined
                password?: string | undefined
                privacy?: 'anybody' | 'embed_only' | 'password' | undefined
                review_mode?: boolean | undefined
                sort?:
                  | 'added_first'
                  | 'added_last'
                  | 'alphabetical'
                  | 'arranged'
                  | 'comments'
                  | 'likes'
                  | 'newest'
                  | 'oldest'
                  | 'plays'
                  | undefined
                theme?: 'dark' | 'standard' | undefined
                url?: (string | null) | undefined
                use_custom_domain?: boolean | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { album_id: number; user_id: number } } & {
              json: {
                brand_color?: string | undefined
                description?: string | undefined
                domain?: (string | null) | undefined
                hide_nav?: boolean | undefined
                layout?: 'grid' | 'player' | undefined
                name?: string | undefined
                password?: string | undefined
                privacy?: 'anybody' | 'embed_only' | 'password' | undefined
                review_mode?: boolean | undefined
                sort?:
                  | 'added_first'
                  | 'added_last'
                  | 'alphabetical'
                  | 'arranged'
                  | 'comments'
                  | 'likes'
                  | 'newest'
                  | 'oldest'
                  | 'plays'
                  | undefined
                theme?: 'dark' | 'standard' | undefined
                url?: (string | null) | undefined
                use_custom_domain?: boolean | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:user_id/albums/:album_id/custom_thumbnails': {
      $get:
        | {
            input: { param: { album_id: number; user_id: number } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: Picture[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { album_id: number; user_id: number } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { album_id: number; user_id: number } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { album_id: number; user_id: number } }
            output: Picture
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { album_id: number; user_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { album_id: number; user_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:user_id/albums/:album_id/custom_thumbnails/:thumbnail_id': {
      $delete:
        | {
            input: { param: { album_id: number; thumbnail_id: number; user_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { album_id: number; thumbnail_id: number; user_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { album_id: number; thumbnail_id: number; user_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { album_id: number; thumbnail_id: number; user_id: number } }
            output: Picture
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { album_id: number; thumbnail_id: number; user_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { album_id: number; thumbnail_id: number; user_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { album_id: number; thumbnail_id: number; user_id: number } } & {
              json: { active?: boolean | undefined }
            }
            output: Picture
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { album_id: number; thumbnail_id: number; user_id: number } } & {
              json: { active?: boolean | undefined }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { album_id: number; thumbnail_id: number; user_id: number } } & {
              json: { active?: boolean | undefined }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:user_id/albums/:album_id/logos': {
      $get:
        | {
            input: { param: { album_id: number; user_id: number } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: Picture[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { album_id: number; user_id: number } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { album_id: number; user_id: number } }
            output: Picture
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { album_id: number; user_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { album_id: number; user_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:user_id/albums/:album_id/logos/:logo_id': {
      $delete:
        | {
            input: { param: { album_id: number; logo_id: number; user_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { album_id: number; logo_id: number; user_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { album_id: number; logo_id: number; user_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { album_id: number; logo_id: number; user_id: number } }
            output: Picture
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { album_id: number; logo_id: number; user_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { album_id: number; logo_id: number; user_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { album_id: number; logo_id: number; user_id: number } } & {
              json: { active?: boolean | undefined }
            }
            output: Picture
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { album_id: number; logo_id: number; user_id: number } } & {
              json: { active?: boolean | undefined }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { album_id: number; logo_id: number; user_id: number } } & {
              json: { active?: boolean | undefined }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:user_id/albums/:album_id/videos': {
      $get:
        | {
            input: { param: { album_id: number; user_id: number } } & {
              query: {
                containing_uri?: string | undefined
                direction?: 'asc' | 'desc' | undefined
                filter?: 'embeddable' | undefined
                filter_embeddable?: boolean | undefined
                page?: number | undefined
                password?: string | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?:
                  | 'alphabetical'
                  | 'comments'
                  | 'date'
                  | 'default'
                  | 'duration'
                  | 'likes'
                  | 'manual'
                  | 'modified_time'
                  | 'plays'
                  | undefined
                weak_search?: boolean | undefined
              }
            }
            output: Video[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { album_id: number; user_id: number } } & {
              query: {
                containing_uri?: string | undefined
                direction?: 'asc' | 'desc' | undefined
                filter?: 'embeddable' | undefined
                filter_embeddable?: boolean | undefined
                page?: number | undefined
                password?: string | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?:
                  | 'alphabetical'
                  | 'comments'
                  | 'date'
                  | 'default'
                  | 'duration'
                  | 'likes'
                  | 'manual'
                  | 'modified_time'
                  | 'plays'
                  | undefined
                weak_search?: boolean | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { album_id: number; user_id: number } } & { json: { videos: string } }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { album_id: number; user_id: number } } & { json: { videos: string } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { album_id: number; user_id: number } } & { json: { videos: string } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:user_id/albums/:album_id/videos/:video_id': {
      $delete:
        | {
            input: { param: { album_id: number; user_id: number; video_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { album_id: number; user_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { album_id: number; user_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { album_id: number; user_id: number; video_id: number } } & {
              query: { password?: string | undefined }
            }
            output: Video
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { album_id: number; user_id: number; video_id: number } } & {
              query: { password?: string | undefined }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { album_id: number; user_id: number; video_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { album_id: number; user_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { album_id: number; user_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:user_id/albums/:album_id/videos/:video_id/set_album_thumbnail': {
      $post:
        | {
            input: { param: { album_id: number; user_id: number; video_id: number } } & {
              json: { time_code?: number | undefined }
            }
            output: Album
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { album_id: number; user_id: number; video_id: number } } & {
              json: { time_code?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { album_id: number; user_id: number; video_id: number } } & {
              json: { time_code?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { album_id: number; user_id: number; video_id: number } } & {
              json: { time_code?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/:user_id/appearances': {
      $get: {
        input: { param: { user_id: number } } & {
          query: {
            direction?: 'asc' | 'desc' | undefined
            filter?: 'embeddable' | undefined
            filter_embeddable?: boolean | undefined
            page?: number | undefined
            per_page?: number | undefined
            query?: string | undefined
            sort?: 'alphabetical' | 'comments' | 'date' | 'duration' | 'likes' | 'plays' | undefined
          }
        }
        output: Video[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:user_id/categories': {
      $get:
        | {
            input: { param: { user_id: number } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'alphabetical' | 'date' | 'name' | undefined
              }
            }
            output: Category[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: number } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'alphabetical' | 'date' | 'name' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/users/:user_id/categories/:category': {
      $delete: {
        input: { param: { category: string; user_id: number } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { category: string; user_id: number } }
        output: {}
        outputFormat: string
        status: 204
      }
      $put: {
        input: { param: { category: number; user_id: number } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/users/:user_id/channels': {
      $get:
        | {
            input: { param: { user_id: number } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                filter?: 'moderated' | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?: 'alphabetical' | 'date' | 'followers' | 'videos' | undefined
              }
            }
            output: Channel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: number } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                filter?: 'moderated' | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?: 'alphabetical' | 'date' | 'followers' | 'videos' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 304
          }
    }
  } & {
    '/users/:user_id/channels/:channel_id': {
      $delete:
        | {
            input: { param: { channel_id: number; user_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: number; user_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { channel_id: number; user_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: number; user_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { channel_id: number; user_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { channel_id: number; user_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:user_id/customlogos': {
      $get:
        | {
            input: { param: { user_id: number } }
            output: Picture[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
      $post:
        | {
            input: { param: { user_id: number } }
            output: Picture
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { user_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/users/:user_id/customlogos/:logo_id': {
      $get:
        | {
            input: { param: { logo_id: number; user_id: number } }
            output: Picture
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { logo_id: number; user_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/users/:user_id/feed': {
      $get: {
        input: { param: { user_id: number } } & {
          query: {
            offset?: string | undefined
            page?: number | undefined
            per_page?: number | undefined
            type?:
              | 'appears'
              | 'category_featured'
              | 'channel'
              | 'facebook_feed'
              | 'following'
              | 'group'
              | 'likes'
              | 'ondemand_publish'
              | 'share'
              | 'tagged_with'
              | 'twitter_timeline'
              | 'uploads'
              | undefined
          }
        }
        output: Activity_3_1[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:user_id/followers': {
      $get: {
        input: { param: { user_id: number } } & {
          query: {
            direction?: 'asc' | 'desc' | undefined
            page?: number | undefined
            per_page?: number | undefined
            query?: string | undefined
            sort?: 'alphabetical' | 'date' | undefined
          }
        }
        output: User[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:user_id/following': {
      $get: {
        input: { param: { user_id: number } } & {
          query: {
            direction?: 'asc' | 'desc' | undefined
            filter?: 'online' | undefined
            page?: number | undefined
            per_page?: number | undefined
            query?: string | undefined
            sort?: 'alphabetical' | 'date' | undefined
          }
        }
        output: User[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { user_id: number } } & { json: { users: string[] } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { user_id: number } } & { json: { users: string[] } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: number } } & { json: { users: string[] } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: number } } & { json: { users: string[] } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: number } } & { json: { users: string[] } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { user_id: number } } & { json: { users: string[] } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/:user_id/following/:follow_user_id': {
      $delete: {
        input: { param: { follow_user_id: number; user_id: number } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get:
        | {
            input: { param: { follow_user_id: number; user_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { follow_user_id: number; user_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { follow_user_id: number; user_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { follow_user_id: number; user_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/users/:user_id/groups': {
      $get: {
        input: { param: { user_id: number } } & {
          query: {
            direction?: 'asc' | 'desc' | undefined
            filter?: 'moderated' | undefined
            page?: number | undefined
            per_page?: number | undefined
            query?: string | undefined
            sort?: 'alphabetical' | 'date' | 'members' | 'videos' | undefined
          }
        }
        output: Group[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:user_id/groups/:group_id': {
      $delete:
        | {
            input: { param: { group_id: number; user_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { group_id: number; user_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
      $put:
        | {
            input: { param: { group_id: number; user_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { group_id: number; user_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
      $get:
        | {
            input: { param: { group_id: number; user_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { group_id: number; user_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:user_id/likes': {
      $get: {
        input: { param: { user_id: number } } & {
          query: {
            filter?: 'embeddable' | undefined
            filter_embeddable?: boolean | undefined
            page?: number | undefined
            per_page?: number | undefined
            query?: string | undefined
            sort?: 'alphabetical' | 'comments' | 'date' | 'duration' | 'likes' | 'plays' | undefined
          }
        }
        output: Video[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:user_id/likes/:video_id': {
      $delete:
        | {
            input: { param: { user_id: number; video_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { user_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
      $get:
        | {
            input: { param: { user_id: number; video_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { user_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { user_id: number; video_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { user_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/users/:user_id/ondemand/pages': {
      $get:
        | {
            input: { param: { user_id: number } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                filter?: 'film' | 'series' | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?:
                  | 'added'
                  | 'alphabetical'
                  | 'date'
                  | 'modified_time'
                  | 'name'
                  | 'publish.time'
                  | 'rating'
                  | undefined
              }
            }
            output: OnDemandPage[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: number } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                filter?: 'film' | 'series' | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?:
                  | 'added'
                  | 'alphabetical'
                  | 'date'
                  | 'modified_time'
                  | 'name'
                  | 'publish.time'
                  | 'rating'
                  | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $post: {
        input: { param: { user_id: number } } & {
          json: {
            accepted_currencies?:
              | 'AUD'
              | 'CAD'
              | 'CHF'
              | 'DKK'
              | 'EUR'
              | 'GBP'
              | 'JPY'
              | 'KRW'
              | 'NOK'
              | 'PLN'
              | 'SEK'
              | 'USD'
              | undefined
            buy?:
              | {
                  active?: boolean | undefined
                  download?: boolean | undefined
                  price?:
                    | {
                        AUD?: number | undefined
                        CAD?: number | undefined
                        CHF?: number | undefined
                        DKK?: number | undefined
                        EUR?: number | undefined
                        GBP?: number | undefined
                        JPY?: number | undefined
                        KRW?: number | undefined
                        NOK?: number | undefined
                        PLN?: number | undefined
                        SEK?: number | undefined
                        USD?: number | undefined
                      }
                    | undefined
                }
              | undefined
            content_rating: 'drugs' | 'language' | 'nudity' | 'safe' | 'unrated' | 'violence'
            description: string
            domain_link?: string | undefined
            episodes?:
              | {
                  buy?:
                    | {
                        active?: boolean | undefined
                        download?: boolean | undefined
                        price?: { USD?: number | undefined } | undefined
                      }
                    | undefined
                  rent?:
                    | {
                        active?: boolean | undefined
                        period?:
                          | '1 week'
                          | '1 year'
                          | '24 hour'
                          | '3 month'
                          | '30 day'
                          | '48 hour'
                          | '6 month'
                          | '72 hour'
                          | undefined
                        price?: { USD?: number | undefined } | undefined
                      }
                    | undefined
                }
              | undefined
            link?: string | undefined
            name: string
            rent?:
              | {
                  active?: boolean | undefined
                  period?:
                    | '1 week'
                    | '1 year'
                    | '24 hour'
                    | '3 month'
                    | '30 day'
                    | '48 hour'
                    | '6 month'
                    | '72 hour'
                    | undefined
                  price?:
                    | {
                        AUD?: number | undefined
                        CAD?: number | undefined
                        CHF?: number | undefined
                        DKK?: number | undefined
                        EUR?: number | undefined
                        GBP?: number | undefined
                        JPY?: number | undefined
                        KRW?: number | undefined
                        NOK?: number | undefined
                        PLN?: number | undefined
                        SEK?: number | undefined
                        USD?: number | undefined
                      }
                    | undefined
                }
              | undefined
            subscription?:
              | {
                  monthly?:
                    | {
                        active?: boolean | undefined
                        price?: { USD?: number | undefined } | undefined
                      }
                    | undefined
                }
              | undefined
            type: 'film' | 'series'
          }
        }
        output: OnDemandPage
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/users/:user_id/ondemand/purchases': {
      $get:
        | {
            input: { param: { user_id: number } }
            output: OnDemandPage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:user_id/pictures': {
      $get: {
        input: { param: { user_id: number } } & {
          query: { page?: number | undefined; per_page?: number | undefined }
        }
        output: Picture[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { user_id: number } }
        output: Picture
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:user_id/pictures/:portraitset_id': {
      $delete: {
        input: { param: { portraitset_id: number; user_id: number } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { portraitset_id: number; user_id: number } }
        output: Picture
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { portraitset_id: number; user_id: number } } & {
          json: { active?: boolean | undefined }
        }
        output: Picture
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:user_id/portfolios': {
      $get: {
        input: { param: { user_id: number } } & {
          query: {
            direction?: 'asc' | 'desc' | undefined
            page?: number | undefined
            per_page?: number | undefined
            query?: string | undefined
            sort?: 'alphabetical' | 'date' | undefined
          }
        }
        output: Portfolio[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:user_id/portfolios/:portfolio_id': {
      $get: {
        input: { param: { portfolio_id: number; user_id: number } }
        output: Portfolio
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:user_id/portfolios/:portfolio_id/videos': {
      $get: {
        input: { param: { portfolio_id: number; user_id: number } } & {
          query: {
            containing_uri?: string | undefined
            filter?: 'embeddable' | undefined
            filter_embeddable?: boolean | undefined
            page?: number | undefined
            per_page?: number | undefined
            sort?:
              | 'alphabetical'
              | 'comments'
              | 'date'
              | 'default'
              | 'likes'
              | 'manual'
              | 'plays'
              | undefined
          }
        }
        output: Video[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:user_id/portfolios/:portfolio_id/videos/:video_id': {
      $delete:
        | {
            input: { param: { portfolio_id: number; user_id: number; video_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { portfolio_id: number; user_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $get: {
        input: { param: { portfolio_id: number; user_id: number; video_id: number } }
        output: Video
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { portfolio_id: number; user_id: number; video_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { portfolio_id: number; user_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:user_id/presets': {
      $get: {
        input: { param: { user_id: number } } & {
          query: { page?: number | undefined; per_page?: number | undefined }
        }
        output: Presets[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:user_id/presets/:preset_id': {
      $get: {
        input: { param: { preset_id: number; user_id: number } }
        output: Presets
        outputFormat: 'json'
        status: 200
      }
      $patch:
        | {
            input: { param: { preset_id: number; user_id: number } } & {
              json: { outro?: 'nothing' | undefined }
            }
            output: Presets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { preset_id: number; user_id: number } } & {
              json: { outro?: 'nothing' | undefined }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { preset_id: number; user_id: number } } & {
              json: { outro?: 'nothing' | undefined }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:user_id/presets/:preset_id/videos': {
      $get: {
        input: { param: { preset_id: number; user_id: number } } & {
          query: { page?: number | undefined; per_page?: number | undefined }
        }
        output: Video[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:user_id/projects': {
      $get:
        | {
            input: { param: { user_id: number } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'date' | 'default' | 'modified_time' | 'name' | undefined
              }
            }
            output: Project[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: number } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?: 'date' | 'default' | 'modified_time' | 'name' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { param: { user_id: number } } & { json: { name: string } }
            output: Project
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { user_id: number } } & { json: { name: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: number } } & { json: { name: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: number } } & { json: { name: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/users/:user_id/projects/:project_id': {
      $delete:
        | {
            input: { param: { project_id: number; user_id: number } } & {
              query: { should_delete_clips?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { project_id: number; user_id: number } } & {
              query: { should_delete_clips?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: number; user_id: number } } & {
              query: { should_delete_clips?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: number; user_id: number } } & {
              query: { should_delete_clips?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { project_id: number; user_id: number } }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: number; user_id: number } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: number; user_id: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { project_id: number; user_id: number } } & { json: { name: string } }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: number; user_id: number } } & { json: { name: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: number; user_id: number } } & { json: { name: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: number; user_id: number } } & { json: { name: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { project_id: number; user_id: number } } & { json: { name: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:user_id/projects/:project_id/videos': {
      $delete:
        | {
            input: { param: { project_id: number; user_id: number } } & {
              query: { should_delete_clips?: boolean | undefined; uris: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { project_id: number; user_id: number } } & {
              query: { should_delete_clips?: boolean | undefined; uris: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: number; user_id: number } } & {
              query: { should_delete_clips?: boolean | undefined; uris: string }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: number; user_id: number } } & {
              query: { should_delete_clips?: boolean | undefined; uris: string }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { project_id: number; user_id: number } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?:
                  | 'alphabetical'
                  | 'date'
                  | 'default'
                  | 'duration'
                  | 'last_user_action_event_date'
                  | undefined
              }
            }
            output: Video[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: number; user_id: number } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?:
                  | 'alphabetical'
                  | 'date'
                  | 'default'
                  | 'duration'
                  | 'last_user_action_event_date'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: number; user_id: number } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                page?: number | undefined
                per_page?: number | undefined
                sort?:
                  | 'alphabetical'
                  | 'date'
                  | 'default'
                  | 'duration'
                  | 'last_user_action_event_date'
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { project_id: number; user_id: number } } & { query: { uris: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { project_id: number; user_id: number } } & { query: { uris: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: number; user_id: number } } & { query: { uris: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: number; user_id: number } } & { query: { uris: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:user_id/projects/:project_id/videos/:video_id': {
      $delete:
        | {
            input: { param: { project_id: number; user_id: number; video_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { project_id: number; user_id: number; video_id: number } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { project_id: number; user_id: number; video_id: number } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { project_id: number; user_id: number; video_id: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { project_id: number; user_id: number; video_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { project_id: number; user_id: number; video_id: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:user_id/uploads/:upload_id': {
      $delete:
        | {
            input: { param: { upload_id: number; user_id: number } } & {
              query: { signature: string; video_file_id: number }
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { upload_id: number; user_id: number } } & {
              query: { signature: string; video_file_id: number }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { upload_id: number; user_id: number } } & {
              query: { signature: string; video_file_id: number }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { upload_id: number; user_id: number } } & {
              query: { signature: string; video_file_id: number }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get: {
        input: { param: { upload_id: number; user_id: number } }
        output: UploadAttempt
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/users/:user_id/videos': {
      $get:
        | {
            input: { param: { user_id: number } } & {
              query: {
                containing_uri?: string | undefined
                direction?: 'asc' | 'desc' | undefined
                filter?: 'app_only' | 'embeddable' | 'featured' | 'playable' | undefined
                filter_embeddable?: boolean | undefined
                filter_playable?: boolean | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?:
                  | 'alphabetical'
                  | 'comments'
                  | 'date'
                  | 'default'
                  | 'duration'
                  | 'last_user_action_event_date'
                  | 'likes'
                  | 'modified_time'
                  | 'plays'
                  | undefined
              }
            }
            output: Video[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: number } } & {
              query: {
                containing_uri?: string | undefined
                direction?: 'asc' | 'desc' | undefined
                filter?: 'app_only' | 'embeddable' | 'featured' | 'playable' | undefined
                filter_embeddable?: boolean | undefined
                filter_playable?: boolean | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?:
                  | 'alphabetical'
                  | 'comments'
                  | 'date'
                  | 'default'
                  | 'duration'
                  | 'last_user_action_event_date'
                  | 'likes'
                  | 'modified_time'
                  | 'plays'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 304
          }
      $post:
        | {
            input: { param: { user_id: number } } & {
              json: {
                content_rating?: string[] | undefined
                description?: string | undefined
                embed?:
                  | {
                      buttons?:
                        | {
                            embed?: boolean | undefined
                            fullscreen?: boolean | undefined
                            hd?: boolean | undefined
                            like?: boolean | undefined
                            scaling?: boolean | undefined
                            share?: boolean | undefined
                            watchlater?: boolean | undefined
                          }
                        | undefined
                      color?: string | undefined
                      logos?:
                        | {
                            custom?:
                              | {
                                  active?: boolean | undefined
                                  link?: string | undefined
                                  sticky?: boolean | undefined
                                }
                              | undefined
                            vimeo?: boolean | undefined
                          }
                        | undefined
                      playbar?: boolean | undefined
                      title?:
                        | {
                            name?: 'hide' | 'show' | 'user' | undefined
                            owner?: 'hide' | 'show' | 'user' | undefined
                            portrait?: 'hide' | 'show' | 'user' | undefined
                          }
                        | undefined
                      volume?: boolean | undefined
                    }
                  | undefined
                license?:
                  | 'by'
                  | 'by-nc'
                  | 'by-nc-nd'
                  | 'by-nc-sa'
                  | 'by-nd'
                  | 'by-sa'
                  | 'cc0'
                  | undefined
                locale?: string | undefined
                name?: string | undefined
                password?: string | undefined
                privacy?:
                  | {
                      add?: boolean | undefined
                      comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                      download?: boolean | undefined
                      embed?: 'private' | 'public' | 'whitelist' | undefined
                      view?:
                        | 'anybody'
                        | 'contacts'
                        | 'disable'
                        | 'nobody'
                        | 'password'
                        | 'unlisted'
                        | 'users'
                        | undefined
                    }
                  | undefined
                review_page?: { active?: boolean | undefined } | undefined
                spatial?:
                  | {
                      director_timeline?:
                        | {
                            pitch: number
                            roll?: number | undefined
                            time_code: number
                            yaw: number
                          }[]
                        | undefined
                      field_of_view?: number | undefined
                      projection?:
                        | 'cubical'
                        | 'cylindrical'
                        | 'dome'
                        | 'equirectangular'
                        | 'pyramid'
                        | undefined
                      stereo_format?: 'left-right' | 'mono' | 'top-bottom' | undefined
                    }
                  | undefined
                upload: {
                  approach: 'post' | 'pull' | 'streaming' | 'tus'
                  link?: string | undefined
                  redirect_url?: string | undefined
                  size?: string | undefined
                }
              }
            }
            output: Video
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { user_id: number } } & {
              json: {
                content_rating?: string[] | undefined
                description?: string | undefined
                embed?:
                  | {
                      buttons?:
                        | {
                            embed?: boolean | undefined
                            fullscreen?: boolean | undefined
                            hd?: boolean | undefined
                            like?: boolean | undefined
                            scaling?: boolean | undefined
                            share?: boolean | undefined
                            watchlater?: boolean | undefined
                          }
                        | undefined
                      color?: string | undefined
                      logos?:
                        | {
                            custom?:
                              | {
                                  active?: boolean | undefined
                                  link?: string | undefined
                                  sticky?: boolean | undefined
                                }
                              | undefined
                            vimeo?: boolean | undefined
                          }
                        | undefined
                      playbar?: boolean | undefined
                      title?:
                        | {
                            name?: 'hide' | 'show' | 'user' | undefined
                            owner?: 'hide' | 'show' | 'user' | undefined
                            portrait?: 'hide' | 'show' | 'user' | undefined
                          }
                        | undefined
                      volume?: boolean | undefined
                    }
                  | undefined
                license?:
                  | 'by'
                  | 'by-nc'
                  | 'by-nc-nd'
                  | 'by-nc-sa'
                  | 'by-nd'
                  | 'by-sa'
                  | 'cc0'
                  | undefined
                locale?: string | undefined
                name?: string | undefined
                password?: string | undefined
                privacy?:
                  | {
                      add?: boolean | undefined
                      comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                      download?: boolean | undefined
                      embed?: 'private' | 'public' | 'whitelist' | undefined
                      view?:
                        | 'anybody'
                        | 'contacts'
                        | 'disable'
                        | 'nobody'
                        | 'password'
                        | 'unlisted'
                        | 'users'
                        | undefined
                    }
                  | undefined
                review_page?: { active?: boolean | undefined } | undefined
                spatial?:
                  | {
                      director_timeline?:
                        | {
                            pitch: number
                            roll?: number | undefined
                            time_code: number
                            yaw: number
                          }[]
                        | undefined
                      field_of_view?: number | undefined
                      projection?:
                        | 'cubical'
                        | 'cylindrical'
                        | 'dome'
                        | 'equirectangular'
                        | 'pyramid'
                        | undefined
                      stereo_format?: 'left-right' | 'mono' | 'top-bottom' | undefined
                    }
                  | undefined
                upload: {
                  approach: 'post' | 'pull' | 'streaming' | 'tus'
                  link?: string | undefined
                  redirect_url?: string | undefined
                  size?: string | undefined
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { user_id: number } } & {
              json: {
                content_rating?: string[] | undefined
                description?: string | undefined
                embed?:
                  | {
                      buttons?:
                        | {
                            embed?: boolean | undefined
                            fullscreen?: boolean | undefined
                            hd?: boolean | undefined
                            like?: boolean | undefined
                            scaling?: boolean | undefined
                            share?: boolean | undefined
                            watchlater?: boolean | undefined
                          }
                        | undefined
                      color?: string | undefined
                      logos?:
                        | {
                            custom?:
                              | {
                                  active?: boolean | undefined
                                  link?: string | undefined
                                  sticky?: boolean | undefined
                                }
                              | undefined
                            vimeo?: boolean | undefined
                          }
                        | undefined
                      playbar?: boolean | undefined
                      title?:
                        | {
                            name?: 'hide' | 'show' | 'user' | undefined
                            owner?: 'hide' | 'show' | 'user' | undefined
                            portrait?: 'hide' | 'show' | 'user' | undefined
                          }
                        | undefined
                      volume?: boolean | undefined
                    }
                  | undefined
                license?:
                  | 'by'
                  | 'by-nc'
                  | 'by-nc-nd'
                  | 'by-nc-sa'
                  | 'by-nd'
                  | 'by-sa'
                  | 'cc0'
                  | undefined
                locale?: string | undefined
                name?: string | undefined
                password?: string | undefined
                privacy?:
                  | {
                      add?: boolean | undefined
                      comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                      download?: boolean | undefined
                      embed?: 'private' | 'public' | 'whitelist' | undefined
                      view?:
                        | 'anybody'
                        | 'contacts'
                        | 'disable'
                        | 'nobody'
                        | 'password'
                        | 'unlisted'
                        | 'users'
                        | undefined
                    }
                  | undefined
                review_page?: { active?: boolean | undefined } | undefined
                spatial?:
                  | {
                      director_timeline?:
                        | {
                            pitch: number
                            roll?: number | undefined
                            time_code: number
                            yaw: number
                          }[]
                        | undefined
                      field_of_view?: number | undefined
                      projection?:
                        | 'cubical'
                        | 'cylindrical'
                        | 'dome'
                        | 'equirectangular'
                        | 'pyramid'
                        | undefined
                      stereo_format?: 'left-right' | 'mono' | 'top-bottom' | undefined
                    }
                  | undefined
                upload: {
                  approach: 'post' | 'pull' | 'streaming' | 'tus'
                  link?: string | undefined
                  redirect_url?: string | undefined
                  size?: string | undefined
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { user_id: number } } & {
              json: {
                content_rating?: string[] | undefined
                description?: string | undefined
                embed?:
                  | {
                      buttons?:
                        | {
                            embed?: boolean | undefined
                            fullscreen?: boolean | undefined
                            hd?: boolean | undefined
                            like?: boolean | undefined
                            scaling?: boolean | undefined
                            share?: boolean | undefined
                            watchlater?: boolean | undefined
                          }
                        | undefined
                      color?: string | undefined
                      logos?:
                        | {
                            custom?:
                              | {
                                  active?: boolean | undefined
                                  link?: string | undefined
                                  sticky?: boolean | undefined
                                }
                              | undefined
                            vimeo?: boolean | undefined
                          }
                        | undefined
                      playbar?: boolean | undefined
                      title?:
                        | {
                            name?: 'hide' | 'show' | 'user' | undefined
                            owner?: 'hide' | 'show' | 'user' | undefined
                            portrait?: 'hide' | 'show' | 'user' | undefined
                          }
                        | undefined
                      volume?: boolean | undefined
                    }
                  | undefined
                license?:
                  | 'by'
                  | 'by-nc'
                  | 'by-nc-nd'
                  | 'by-nc-sa'
                  | 'by-nd'
                  | 'by-sa'
                  | 'cc0'
                  | undefined
                locale?: string | undefined
                name?: string | undefined
                password?: string | undefined
                privacy?:
                  | {
                      add?: boolean | undefined
                      comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                      download?: boolean | undefined
                      embed?: 'private' | 'public' | 'whitelist' | undefined
                      view?:
                        | 'anybody'
                        | 'contacts'
                        | 'disable'
                        | 'nobody'
                        | 'password'
                        | 'unlisted'
                        | 'users'
                        | undefined
                    }
                  | undefined
                review_page?: { active?: boolean | undefined } | undefined
                spatial?:
                  | {
                      director_timeline?:
                        | {
                            pitch: number
                            roll?: number | undefined
                            time_code: number
                            yaw: number
                          }[]
                        | undefined
                      field_of_view?: number | undefined
                      projection?:
                        | 'cubical'
                        | 'cylindrical'
                        | 'dome'
                        | 'equirectangular'
                        | 'pyramid'
                        | undefined
                      stereo_format?: 'left-right' | 'mono' | 'top-bottom' | undefined
                    }
                  | undefined
                upload: {
                  approach: 'post' | 'pull' | 'streaming' | 'tus'
                  link?: string | undefined
                  redirect_url?: string | undefined
                  size?: string | undefined
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: number } } & {
              json: {
                content_rating?: string[] | undefined
                description?: string | undefined
                embed?:
                  | {
                      buttons?:
                        | {
                            embed?: boolean | undefined
                            fullscreen?: boolean | undefined
                            hd?: boolean | undefined
                            like?: boolean | undefined
                            scaling?: boolean | undefined
                            share?: boolean | undefined
                            watchlater?: boolean | undefined
                          }
                        | undefined
                      color?: string | undefined
                      logos?:
                        | {
                            custom?:
                              | {
                                  active?: boolean | undefined
                                  link?: string | undefined
                                  sticky?: boolean | undefined
                                }
                              | undefined
                            vimeo?: boolean | undefined
                          }
                        | undefined
                      playbar?: boolean | undefined
                      title?:
                        | {
                            name?: 'hide' | 'show' | 'user' | undefined
                            owner?: 'hide' | 'show' | 'user' | undefined
                            portrait?: 'hide' | 'show' | 'user' | undefined
                          }
                        | undefined
                      volume?: boolean | undefined
                    }
                  | undefined
                license?:
                  | 'by'
                  | 'by-nc'
                  | 'by-nc-nd'
                  | 'by-nc-sa'
                  | 'by-nd'
                  | 'by-sa'
                  | 'cc0'
                  | undefined
                locale?: string | undefined
                name?: string | undefined
                password?: string | undefined
                privacy?:
                  | {
                      add?: boolean | undefined
                      comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                      download?: boolean | undefined
                      embed?: 'private' | 'public' | 'whitelist' | undefined
                      view?:
                        | 'anybody'
                        | 'contacts'
                        | 'disable'
                        | 'nobody'
                        | 'password'
                        | 'unlisted'
                        | 'users'
                        | undefined
                    }
                  | undefined
                review_page?: { active?: boolean | undefined } | undefined
                spatial?:
                  | {
                      director_timeline?:
                        | {
                            pitch: number
                            roll?: number | undefined
                            time_code: number
                            yaw: number
                          }[]
                        | undefined
                      field_of_view?: number | undefined
                      projection?:
                        | 'cubical'
                        | 'cylindrical'
                        | 'dome'
                        | 'equirectangular'
                        | 'pyramid'
                        | undefined
                      stereo_format?: 'left-right' | 'mono' | 'top-bottom' | undefined
                    }
                  | undefined
                upload: {
                  approach: 'post' | 'pull' | 'streaming' | 'tus'
                  link?: string | undefined
                  redirect_url?: string | undefined
                  size?: string | undefined
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/:user_id/videos/:video_id': {
      $get:
        | {
            input: { param: { user_id: number; video_id: number } }
            output: Video
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:user_id/watchlater': {
      $get:
        | {
            input: { param: { user_id: number } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                filter?: 'embeddable' | undefined
                filter_embeddable?: boolean | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?:
                  | 'alphabetical'
                  | 'comments'
                  | 'date'
                  | 'duration'
                  | 'likes'
                  | 'plays'
                  | undefined
              }
            }
            output: Video[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: number } } & {
              query: {
                direction?: 'asc' | 'desc' | undefined
                filter?: 'embeddable' | undefined
                filter_embeddable?: boolean | undefined
                page?: number | undefined
                per_page?: number | undefined
                query?: string | undefined
                sort?:
                  | 'alphabetical'
                  | 'comments'
                  | 'date'
                  | 'duration'
                  | 'likes'
                  | 'plays'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 304
          }
    }
  } & {
    '/users/:user_id/watchlater/:video_id': {
      $delete: {
        input: { param: { user_id: number; video_id: number } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get:
        | {
            input: { param: { user_id: number; video_id: number } }
            output: Video
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $put: {
        input: { param: { user_id: number; video_id: number } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/videos': {
      $get:
        | {
            input: {
              query: {
                direction?: 'asc' | 'desc' | undefined
                filter?:
                  | 'CC'
                  | 'CC-BY'
                  | 'CC-BY-NC'
                  | 'CC-BY-NC-ND'
                  | 'CC-BY-NC-SA'
                  | 'CC-BY-ND'
                  | 'CC-BY-SA'
                  | 'CC0'
                  | 'categories'
                  | 'duration'
                  | 'in-progress'
                  | 'minimum_likes'
                  | 'trending'
                  | 'upload_date'
                  | undefined
                links?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                query: string
                sort?:
                  | 'alphabetical'
                  | 'comments'
                  | 'date'
                  | 'duration'
                  | 'likes'
                  | 'plays'
                  | 'relevant'
                  | undefined
                uris?: string | undefined
              }
            }
            output: Video[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                direction?: 'asc' | 'desc' | undefined
                filter?:
                  | 'CC'
                  | 'CC-BY'
                  | 'CC-BY-NC'
                  | 'CC-BY-NC-ND'
                  | 'CC-BY-NC-SA'
                  | 'CC-BY-ND'
                  | 'CC-BY-SA'
                  | 'CC0'
                  | 'categories'
                  | 'duration'
                  | 'in-progress'
                  | 'minimum_likes'
                  | 'trending'
                  | 'upload_date'
                  | undefined
                links?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                query: string
                sort?:
                  | 'alphabetical'
                  | 'comments'
                  | 'date'
                  | 'duration'
                  | 'likes'
                  | 'plays'
                  | 'relevant'
                  | undefined
                uris?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                direction?: 'asc' | 'desc' | undefined
                filter?:
                  | 'CC'
                  | 'CC-BY'
                  | 'CC-BY-NC'
                  | 'CC-BY-NC-ND'
                  | 'CC-BY-NC-SA'
                  | 'CC-BY-ND'
                  | 'CC-BY-SA'
                  | 'CC0'
                  | 'categories'
                  | 'duration'
                  | 'in-progress'
                  | 'minimum_likes'
                  | 'trending'
                  | 'upload_date'
                  | undefined
                links?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                query: string
                sort?:
                  | 'alphabetical'
                  | 'comments'
                  | 'date'
                  | 'duration'
                  | 'likes'
                  | 'plays'
                  | 'relevant'
                  | undefined
                uris?: string | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/videos/:video_id': {
      $delete:
        | { input: { param: { video_id: number } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
      $get:
        | {
            input: { param: { video_id: number } }
            output: Video
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { video_id: number } } & {
              json: {
                content_rating?: string[] | undefined
                description?: string | undefined
                embed?:
                  | {
                      buttons?:
                        | {
                            embed?: boolean | undefined
                            fullscreen?: boolean | undefined
                            hd?: boolean | undefined
                            like?: boolean | undefined
                            scaling?: boolean | undefined
                            share?: boolean | undefined
                            watchlater?: boolean | undefined
                          }
                        | undefined
                      color?: string | undefined
                      logos?:
                        | {
                            custom?:
                              | {
                                  active?: boolean | undefined
                                  link?: string | undefined
                                  sticky?: boolean | undefined
                                }
                              | undefined
                            vimeo?: boolean | undefined
                          }
                        | undefined
                      playbar?: boolean | undefined
                      title?:
                        | {
                            name?: 'hide' | 'show' | 'user' | undefined
                            owner?: 'hide' | 'show' | 'user' | undefined
                            portrait?: 'hide' | 'show' | 'user' | undefined
                          }
                        | undefined
                      volume?: boolean | undefined
                    }
                  | undefined
                license?:
                  | 'by'
                  | 'by-nc'
                  | 'by-nc-nd'
                  | 'by-nc-sa'
                  | 'by-nd'
                  | 'by-sa'
                  | 'cc0'
                  | undefined
                locale?: string | undefined
                name?: string | undefined
                password?: string | undefined
                privacy?:
                  | {
                      add?: boolean | undefined
                      comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                      download?: boolean | undefined
                      embed?: 'private' | 'public' | 'whitelist' | undefined
                      view?:
                        | 'anybody'
                        | 'contacts'
                        | 'disable'
                        | 'nobody'
                        | 'password'
                        | 'unlisted'
                        | 'users'
                        | undefined
                    }
                  | undefined
                review_page?: { active?: boolean | undefined } | undefined
                spatial?:
                  | {
                      director_timeline?:
                        | {
                            pitch: number
                            roll?: number | undefined
                            time_code: number
                            yaw: number
                          }[]
                        | undefined
                      field_of_view?: number | undefined
                      projection?:
                        | 'cubical'
                        | 'cylindrical'
                        | 'dome'
                        | 'equirectangular'
                        | 'pyramid'
                        | undefined
                      stereo_format?: 'left-right' | 'mono' | 'top-bottom' | undefined
                    }
                  | undefined
              }
            }
            output: Video
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { video_id: number } } & {
              json: {
                content_rating?: string[] | undefined
                description?: string | undefined
                embed?:
                  | {
                      buttons?:
                        | {
                            embed?: boolean | undefined
                            fullscreen?: boolean | undefined
                            hd?: boolean | undefined
                            like?: boolean | undefined
                            scaling?: boolean | undefined
                            share?: boolean | undefined
                            watchlater?: boolean | undefined
                          }
                        | undefined
                      color?: string | undefined
                      logos?:
                        | {
                            custom?:
                              | {
                                  active?: boolean | undefined
                                  link?: string | undefined
                                  sticky?: boolean | undefined
                                }
                              | undefined
                            vimeo?: boolean | undefined
                          }
                        | undefined
                      playbar?: boolean | undefined
                      title?:
                        | {
                            name?: 'hide' | 'show' | 'user' | undefined
                            owner?: 'hide' | 'show' | 'user' | undefined
                            portrait?: 'hide' | 'show' | 'user' | undefined
                          }
                        | undefined
                      volume?: boolean | undefined
                    }
                  | undefined
                license?:
                  | 'by'
                  | 'by-nc'
                  | 'by-nc-nd'
                  | 'by-nc-sa'
                  | 'by-nd'
                  | 'by-sa'
                  | 'cc0'
                  | undefined
                locale?: string | undefined
                name?: string | undefined
                password?: string | undefined
                privacy?:
                  | {
                      add?: boolean | undefined
                      comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                      download?: boolean | undefined
                      embed?: 'private' | 'public' | 'whitelist' | undefined
                      view?:
                        | 'anybody'
                        | 'contacts'
                        | 'disable'
                        | 'nobody'
                        | 'password'
                        | 'unlisted'
                        | 'users'
                        | undefined
                    }
                  | undefined
                review_page?: { active?: boolean | undefined } | undefined
                spatial?:
                  | {
                      director_timeline?:
                        | {
                            pitch: number
                            roll?: number | undefined
                            time_code: number
                            yaw: number
                          }[]
                        | undefined
                      field_of_view?: number | undefined
                      projection?:
                        | 'cubical'
                        | 'cylindrical'
                        | 'dome'
                        | 'equirectangular'
                        | 'pyramid'
                        | undefined
                      stereo_format?: 'left-right' | 'mono' | 'top-bottom' | undefined
                    }
                  | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { video_id: number } } & {
              json: {
                content_rating?: string[] | undefined
                description?: string | undefined
                embed?:
                  | {
                      buttons?:
                        | {
                            embed?: boolean | undefined
                            fullscreen?: boolean | undefined
                            hd?: boolean | undefined
                            like?: boolean | undefined
                            scaling?: boolean | undefined
                            share?: boolean | undefined
                            watchlater?: boolean | undefined
                          }
                        | undefined
                      color?: string | undefined
                      logos?:
                        | {
                            custom?:
                              | {
                                  active?: boolean | undefined
                                  link?: string | undefined
                                  sticky?: boolean | undefined
                                }
                              | undefined
                            vimeo?: boolean | undefined
                          }
                        | undefined
                      playbar?: boolean | undefined
                      title?:
                        | {
                            name?: 'hide' | 'show' | 'user' | undefined
                            owner?: 'hide' | 'show' | 'user' | undefined
                            portrait?: 'hide' | 'show' | 'user' | undefined
                          }
                        | undefined
                      volume?: boolean | undefined
                    }
                  | undefined
                license?:
                  | 'by'
                  | 'by-nc'
                  | 'by-nc-nd'
                  | 'by-nc-sa'
                  | 'by-nd'
                  | 'by-sa'
                  | 'cc0'
                  | undefined
                locale?: string | undefined
                name?: string | undefined
                password?: string | undefined
                privacy?:
                  | {
                      add?: boolean | undefined
                      comments?: 'anybody' | 'contacts' | 'nobody' | undefined
                      download?: boolean | undefined
                      embed?: 'private' | 'public' | 'whitelist' | undefined
                      view?:
                        | 'anybody'
                        | 'contacts'
                        | 'disable'
                        | 'nobody'
                        | 'password'
                        | 'unlisted'
                        | 'users'
                        | undefined
                    }
                  | undefined
                review_page?: { active?: boolean | undefined } | undefined
                spatial?:
                  | {
                      director_timeline?:
                        | {
                            pitch: number
                            roll?: number | undefined
                            time_code: number
                            yaw: number
                          }[]
                        | undefined
                      field_of_view?: number | undefined
                      projection?:
                        | 'cubical'
                        | 'cylindrical'
                        | 'dome'
                        | 'equirectangular'
                        | 'pyramid'
                        | undefined
                      stereo_format?: 'left-right' | 'mono' | 'top-bottom' | undefined
                    }
                  | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/videos/:video_id/available_albums': {
      $get:
        | {
            input: { param: { video_id: number } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: Album[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { video_id: number } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/videos/:video_id/available_channels': {
      $get:
        | {
            input: { param: { video_id: number } }
            output: Channel[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/videos/:video_id/categories': {
      $get:
        | {
            input: { param: { video_id: number } }
            output: Category[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { video_id: number } } & { json: { category: string[] } }
            output: Category
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { video_id: number } } & { json: { category: string[] } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { video_id: number } } & { json: { category: string[] } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/videos/:video_id/comments': {
      $get: {
        input: { param: { video_id: number } } & {
          query: {
            direction?: 'asc' | 'desc' | undefined
            page?: number | undefined
            per_page?: number | undefined
          }
        }
        output: Comment[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { video_id: number } } & { json: { text: string } }
            output: Comment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { video_id: number } } & { json: { text: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { video_id: number } } & { json: { text: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { video_id: number } } & { json: { text: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/videos/:video_id/comments/:comment_id': {
      $delete:
        | {
            input: { param: { comment_id: number; video_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { comment_id: number; video_id: number } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { comment_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { comment_id: number; video_id: number } }
            output: Comment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { comment_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { comment_id: number; video_id: number } } & { json: { text: string } }
            output: Comment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { comment_id: number; video_id: number } } & { json: { text: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { comment_id: number; video_id: number } } & { json: { text: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/videos/:video_id/comments/:comment_id/replies': {
      $get:
        | {
            input: { param: { comment_id: number; video_id: number } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: Comment[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { comment_id: number; video_id: number } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { comment_id: number; video_id: number } } & { json: { text: string } }
            output: Comment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { comment_id: number; video_id: number } } & { json: { text: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { comment_id: number; video_id: number } } & { json: { text: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/videos/:video_id/credits': {
      $get: {
        input: { param: { video_id: number } } & {
          query: {
            direction?: 'asc' | 'desc' | undefined
            page?: number | undefined
            per_page?: number | undefined
            query?: string | undefined
            sort?: 'alphabetical' | 'date' | undefined
          }
        }
        output: Credit[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { param: { video_id: number } } & {
              json: { email: string; name: string; role: string; user_uri: string }
            }
            output: Credit
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { video_id: number } } & {
              json: { email: string; name: string; role: string; user_uri: string }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { video_id: number } } & {
              json: { email: string; name: string; role: string; user_uri: string }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/videos/:video_id/credits/:credit_id': {
      $delete:
        | {
            input: { param: { credit_id: number; video_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { credit_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { credit_id: number; video_id: number } }
            output: Credit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { credit_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { credit_id: number; video_id: number } } & {
              json: { name?: string | undefined; role?: string | undefined }
            }
            output: Credit
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { credit_id: number; video_id: number } } & {
              json: { name?: string | undefined; role?: string | undefined }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { credit_id: number; video_id: number } } & {
              json: { name?: string | undefined; role?: string | undefined }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/videos/:video_id/likes': {
      $get: {
        input: { param: { video_id: number } } & {
          query: {
            direction?: 'asc' | 'desc' | undefined
            page?: number | undefined
            per_page?: number | undefined
            sort?: 'alphabetical' | 'date' | undefined
          }
        }
        output: User[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/videos/:video_id/pictures': {
      $get: {
        input: { param: { video_id: number } } & {
          query: { page?: number | undefined; per_page?: number | undefined }
        }
        output: Picture[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { video_id: number } } & {
          json: { active?: boolean | undefined; time?: number | undefined }
        }
        output: Picture
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/videos/:video_id/pictures/:picture_id': {
      $delete: {
        input: { param: { picture_id: number; video_id: number } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { picture_id: number; video_id: number } }
        output: Picture
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { picture_id: number; video_id: number } } & {
          json: { active?: boolean | undefined }
        }
        output: Picture
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/videos/:video_id/presets/:preset_id': {
      $delete:
        | {
            input: { param: { preset_id: number; video_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { preset_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { preset_id: number; video_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { preset_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $put: {
        input: { param: { preset_id: number; video_id: number } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/videos/:video_id/privacy/domains': {
      $get:
        | {
            input: { param: { video_id: number } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: Domain[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { video_id: number } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/videos/:video_id/privacy/domains/:domain': {
      $delete:
        | {
            input: { param: { domain: string; video_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { domain: string; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { domain: string; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { domain: string; video_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { domain: string; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/videos/:video_id/privacy/users': {
      $get:
        | {
            input: { param: { video_id: number } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: User[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { video_id: number } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
      $put: {
        input: { param: { video_id: number } }
        output: User[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/videos/:video_id/privacy/users/:user_id': {
      $delete:
        | {
            input: { param: { user_id: number; video_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { user_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { user_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { user_id: number; video_id: number } }
            output: User
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { user_id: number; video_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { user_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/videos/:video_id/tags': {
      $get: {
        input: { param: { video_id: number } }
        output: Tag[]
        outputFormat: 'json'
        status: 200
      }
      $put:
        | {
            input: { param: { video_id: number } } & {
              json: { name: string; page?: number | undefined; per_page?: number | undefined }
            }
            output: Tag[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { video_id: number } } & {
              json: { name: string; page?: number | undefined; per_page?: number | undefined }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { video_id: number } } & {
              json: { name: string; page?: number | undefined; per_page?: number | undefined }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/videos/:video_id/tags/:word': {
      $delete:
        | {
            input: { param: { video_id: number; word: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { video_id: number; word: string } }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { video_id: number; word: string } }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { video_id: number; word: string } }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { video_id: number; word: string } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { video_id: number; word: string } }
            output: Tag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { video_id: number; word: string } }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { video_id: number; word: string } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/videos/:video_id/texttracks': {
      $get:
        | {
            input: { param: { video_id: number } }
            output: TextTrack[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { video_id: number } } & {
              json: {
                active?: boolean | undefined
                language: string
                name: string
                type: 'captions' | 'chapters' | 'descriptions' | 'metadata' | 'subtitles'
              }
            }
            output: TextTrack
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { video_id: number } } & {
              json: {
                active?: boolean | undefined
                language: string
                name: string
                type: 'captions' | 'chapters' | 'descriptions' | 'metadata' | 'subtitles'
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/videos/:video_id/texttracks/:texttrack_id': {
      $delete:
        | {
            input: { param: { texttrack_id: number; video_id: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { texttrack_id: number; video_id: number } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { texttrack_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { texttrack_id: number; video_id: number } }
            output: TextTrack
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { texttrack_id: number; video_id: number } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { texttrack_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { texttrack_id: number; video_id: number } } & {
              json: {
                active?: boolean | undefined
                language?: string | undefined
                name?: string | undefined
                type?:
                  | 'captions'
                  | 'chapters'
                  | 'descriptions'
                  | 'metadata'
                  | 'subtitles'
                  | undefined
              }
            }
            output: TextTrack
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { texttrack_id: number; video_id: number } } & {
              json: {
                active?: boolean | undefined
                language?: string | undefined
                name?: string | undefined
                type?:
                  | 'captions'
                  | 'chapters'
                  | 'descriptions'
                  | 'metadata'
                  | 'subtitles'
                  | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { texttrack_id: number; video_id: number } } & {
              json: {
                active?: boolean | undefined
                language?: string | undefined
                name?: string | undefined
                type?:
                  | 'captions'
                  | 'chapters'
                  | 'descriptions'
                  | 'metadata'
                  | 'subtitles'
                  | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/videos/:video_id/timelinethumbnails': {
      $post:
        | {
            input: { param: { video_id: number } }
            output: Picture
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/videos/:video_id/timelinethumbnails/:thumbnail_id': {
      $get:
        | {
            input: { param: { thumbnail_id: number; video_id: number } }
            output: Picture
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { thumbnail_id: number; video_id: number } }
            output: LegacyError
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/videos/:video_id/versions': {
      $post:
        | {
            input: { param: { video_id: number } } & {
              json: {
                file_name: string
                upload: {
                  approach: 'post' | 'pull' | 'streaming' | 'tus'
                  link?: string | undefined
                  redirect_url?: string | undefined
                  size?: string | undefined
                }
              }
            }
            output: VideoVersions
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { video_id: number } } & {
              json: {
                file_name: string
                upload: {
                  approach: 'post' | 'pull' | 'streaming' | 'tus'
                  link?: string | undefined
                  redirect_url?: string | undefined
                  size?: string | undefined
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { video_id: number } } & {
              json: {
                file_name: string
                upload: {
                  approach: 'post' | 'pull' | 'streaming' | 'tus'
                  link?: string | undefined
                  redirect_url?: string | undefined
                  size?: string | undefined
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { video_id: number } } & {
              json: {
                file_name: string
                upload: {
                  approach: 'post' | 'pull' | 'streaming' | 'tus'
                  link?: string | undefined
                  redirect_url?: string | undefined
                  size?: string | undefined
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/videos/:video_id/videos': {
      $get:
        | {
            input: { param: { video_id: number } } & {
              query: {
                filter?: 'related' | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Video[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { video_id: number } } & {
              query: {
                filter?: 'related' | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: LegacyError
            outputFormat: 'json'
            status: 400
          }
    }
  },
  '/'
>
export default routes
