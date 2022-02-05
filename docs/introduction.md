---
title: Introduction
sidebar_label: Introduction
hide_title: false
hide_table_of_contents: false
custom_edit_url: null
---

## About SRS
---

SRS(Simple RTMP Server) over state-threads created on 2013.10.

SRS delivers rtmp/hls/http/hds live on x86/x64/arm/mips linux/osx, 
supports origin/edge/vhost and transcode/ingest and dvr/forward 
and http-api/http-callback/reload, introduces tracable 
session-oriented log, exports client srs-librtmp, 
with stream caster to push MPEGTS-over-UDP/RTSP to SRS,
provides EN/CN wiki and the most simple architecture.

## Why SRS?
---

1. We completely rewrote HLS following m3u8/ts spec, and HLS support h.264+aac/mp3.
1. Highly efficient RTMP streaming, supporting 7k+ clients concurrency, vhost based, both origin and edge.
1. Embedded simplified media HTTP server for HLS, api and HTTP flv/ts/mp3/aac streaming.
1. Variety input: RTMP, pull by ingest file or stream(HTTP/RTMP/RTSP), push by stream caster 
RTSP/MPEGTS-over-UDP.
1. Popular internet delivery: RTMP/HDS for flash, HLS for mobile(IOS/IPad/MAC/Android), HTTP 
flv/ts/mp3/aac streaming for user prefered.
1. Enhanced DVR and hstrs: segment/session/append plan, customer path and HTTP callback.
the hstrs(http stream trigger rtmp source) enable the http-flv stream standby util encoder 
start publish, similar to rtmp, which will trigger edge to fetch from origin.
1. Multiple feature: transcode, forward, ingest, http hooks, dvr, hls, rtsp, http streaming, 
http api, refer, log, bandwith test and srs-librtmp.
1. Best maintainess: simple arch over state-threads(coroutine), single thread, single process 
and for linux/osx platform, common server x86-64/i386/arm/mips cpus, rich comments, strictly 
follows RTMP/HLS/RTSP spec.
1. Easy to use: both English and Chinese wiki, typically config files in trunk/conf, traceable 
and session based log, linux service script and install script.
1. MIT license, open source with product management and evolution.

Enjoy it!

## SRS Vision
---

SRS is the world's TOP1 open source media server, supporting live streaming and WebRTC, which can be applied to a variety of video scenarios.

* Mission：A quick demonstration of the future of video with open source.
* Vison：lower the barrier for media developers.
* Values：Simple Reliable and Open.

For details, please see:[欢迎关注SRS：使命、愿景、价值观](https://mp.weixin.qq.com/s/Mx9LMrUVwKq6C3wgHLUibQ)。

## Product Plan
---

* Release1.0, 2013~2014，code name：HuKaiqun（胡开群）。
* Release2.0, 2015~2017，code name：ZhouGuowen（周国文）。
* Release3.0, 2018~2019，code name：OuXuli（欧旭理）。
* Release4.0, 2020~2021，code name：Leo（付亮）。
* Release5.0, 2022，code name：Bee（蜜蜂）。

## Features
---

The features of SRS.

> Note: Please read **Wiki: Gettting Started( [EN](https://github.com/ossrs/srs/wiki/v4_EN_Home#getting-started) / [CN](https://github.com/ossrs/srs/wiki/v4_CN_Home#getting-started) )** first.

- [x] Using coroutine by ST, it's really simple and stupid enough.
- [x] Support cluster which consists of origin ([CN][v4_CN_DeliveryRTMP],[EN][v4_EN_DeliveryRTMP]) and edge([CN][v4_CN_Edge], [EN][v4_EN_Edge]) server and uses RTMP as default transport protocol.
- [x] Origin server supports remuxing RTMP to HTTP-FLV([CN][v4_CN_SampleHttpFlv], [EN][v4_EN_SampleHttpFlv]) and HLS([CN][v4_CN_DeliveryHLS], [EN][v4_EN_DeliveryHLS]).
- [x] Edge server supports remuxing RTMP to HTTP-FLV([CN][v4_CN_SampleHttpFlv], [EN][v4_EN_SampleHttpFlv]). As for HLS([CN][v4_CN_DeliveryHLS], [EN][v4_EN_DeliveryHLS]) edge server, recomment to use HTTP edge server, such as [NGINX](http://nginx.org/).
- [x] Support HLS with audio-only([CN][v4_CN_DeliveryHLS2], [EN][v4_EN_DeliveryHLS2]), which need to build the timestamp from AAC samples, so we enhanced it please read [#547][bug #547].
- [x] Support HLS with mp3(h.264+mp3) audio codec, please read [bug #301][bug #301].
- [x] Support transmux RTMP to HTTP-FLV/MP3/AAC/TS, please read wiki([CN][v4_CN_DeliveryHttpStream], [EN][v4_CN_DeliveryHttpStream]).
- [x] Support ingesting([CN][v4_CN_Ingest], [EN][v4_EN_Ingest]) other protocols to SRS by FFMPEG.
- [x] Support RTMP long time(>4.6hours) publishing/playing, with the timestamp corrected.
- [x] Support native HTTP server([CN][v4_CN_SampleHTTP], [EN][v4_EN_SampleHTTP]) for http api and http live streaming.
- [x] Support HTTP CORS for js in http api and http live streaming.
- [x] Support HTTP API([CN][v4_CN_HTTPApi], [EN][v4_EN_HTTPApi]) for system management.
- [x] Support HTTP callback([CN][v4_CN_HTTPCallback], [EN][v4_EN_HTTPCallback]) for authentication and integration.
- [x] Support DVR([CN][v4_CN_DVR], [EN][v4_EN_DVR]) to record live streaming to FLV file.
- [x] Support DVR control module like NGINX-RTMP, please read [#459][bug #459].
- [x] Support EXEC like NGINX-RTMP, please read [bug #367][bug #367].
- [x] Support security strategy including allow/deny publish/play IP([CN][v4_CN_Security], [EN][v4_EN_Security]).
- [x] Support low latency(0.1s+) transport model, please read [bug #257][bug #257].
- [x] Support gop-cache([CN][v4_CN_LowLatency2], [EN][v4_EN_LowLatency2]) for player fast startup.
- [x] Support Vhost([CN][v4_CN_RtmpUrlVhost], [EN][v4_EN_RtmpUrlVhost]) and \_\_defaultVhost\_\_.
- [x] Support reloading([CN][v4_CN_Reload], [EN][v4_EN_Reload]) to apply changes of config.
- [x] Support listening at multiple ports.
- [x] Support forwarding([CN][v4_CN_Forward], [EN][v4_EN_Forward]) to other RTMP servers.
- [x] Support transcoding([CN][v4_CN_FFMPEG], [EN][v4_EN_FFMPEG]) by FFMPEG.
- [x] All wikis are writen in [Chinese][v4_CN_Home] and [English][v4_EN_Home].
- [x] Enhanced json, replace NXJSON(LGPL) with json-parser(BSD), read [#904][bug #904].
- [x] Support valgrind and latest ARM by patching ST, read [ST#1](https://github.com/ossrs/state-threads/issues/1) and [ST#2](https://github.com/ossrs/state-threads/issues/2).
- [x] Support traceable and session-based log([CN][v4_CN_SrsLog], [EN][v4_EN_SrsLog]).
- [x] High performance([CN][v4_CN_Performance], [EN][v4_EN_Performance]) RTMP/HTTP-FLV, 6000+ connections.
- [x] Enhanced complex error code with description and stack, read [#913][bug #913].
- [x] Enhanced RTMP url  which supports vhost in stream, read [#1059][bug #1059].
- [x] Support origin cluster, please read [#464][bug #464], [RTMP 302][bug #92].
- [x] Support listen at IPv4 and IPv6, read [#460][bug #460].
- [x] Improve test coverage for core/kernel/protocol/service.
- [x] Support docker by [srs-docker](https://github.com/ossrs/srs-docker).
- [x] Support multiple processes by ReusePort([CN][v4_CN_REUSEPORT], [EN][v4_EN_REUSEPORT]), [#775][bug #775].
- [x] Support a simple [mgmt console][console], please read [srs-console][srs-ngb].
- [x] [Experimental] Support playing stream by WebRTC, [#307][bug #307].
- [x] [Experimental] Support publishing stream by WebRTC, [#307][bug #307].
- [x] [Experimental] Support mux RTP/RTCP/DTLS/SRTP on one port for WebRTC, [#307][bug #307].
- [x] [Experimental] Support client address changing for WebRTC, [#307][bug #307].
- [x] [Experimental] Support transcode RTMP/AAC to WebRTC/Opus, [#307][bug #307].
- [x] [Experimental] Support AV1 codec for WebRTC, [#2324][bug #2324].
- [x] [Experimental] Enhance HTTP Stream Server for HTTP-FLV, HTTPS, HLS etc. [#1657][bug #1657].
- [x] [Experimental] Support DVR in MP4 format, read [#738][bug #738].
- [x] [Experimental] Support MPEG-DASH, the future live streaming protocol, read [#299][bug #299].
- [x] [Experimental] Support pushing MPEG-TS over UDP, please read [bug #250][bug #250].
- [x] [Experimental] Support pushing FLV over HTTP POST, please read wiki([CN][v4_CN_Streamer2], [EN][v4_EN_Streamer2]).
- [x] [Experimental] Support SRT server, read [#1147][bug #1147].
- [x] [Experimental] Support transmux RTC to RTMP, [#2093][bug #2093].
- [x] [Deprecated] Support Adobe HDS(f4m), please read wiki([CN][v4_CN_DeliveryHDS], [EN][v4_EN_DeliveryHDS]) and [#1535][bug #1535].
- [x] [Deprecated] Support bandwidth testing, please read [#1535][bug #1535].
- [x] [Deprecated] Support Adobe FMS/AMS token traverse([CN][v4_CN_DRM2], [EN][v4_EN_DRM2]) authentication, please read [#1535][bug #1535].
- [x] [Removed] Support pushing RTSP, please read [#2304](https://github.com/ossrs/srs/issues/2304#issuecomment-826009290).
- [x] [Removed] Support HTTP RAW API, please read [#2653](https://github.com/ossrs/srs/issues/2653).
- [x] [Removed] Support RTMP client library: [srs-librtmp][srs-librtmp].
- [ ] Support Windows/Cygwin 64bits, [#2532](https://github.com/ossrs/srs/issues/2532).
- [ ] Support push stream by GB28181, [#1500][bug #1500].
- [ ] Support IETF-QUIC for WebRTC Cluster, [#2091][bug #2091].
- [ ] Enhanced forwarding with vhost and variables, [#1342][bug #1342].
- [ ] Support DVR to Cloud Storage, [#1193][bug #1193].
- [ ] Support H.265 over RTMP and HLS, [#465][bug #465].
- [ ] Improve RTC performance to 5K by multiple threading, [#2188][bug #2188].
- [ ] Support source cleanup for idle streams, [#413][bug #413].
- [ ] Support change user to run SRS, [#1111][bug #1111].
- [ ] Support HLS variant, [#463][bug #463].


## Compare
---

Compare SRS with other media server.

### Stream Delivery

|   Feature     |   SRS     |   NGINX   | CRTMPD    | FMS       |   WOWZA   |
|   ----------- |   ------- |   -----   | --------- | --------  |   ------  |
|   RTMP        |   Stable  |   Stable  |   Stable  |   Stable  |   Stable  |
|   HLS         |   Stable  |   Stable  |   X       |   Stable  |   Stable  |
|   HDS         | Experiment|   X       |   X       |   Stable  |   Stable  |
|   HTTP FLV    |   Stable  |   X       |   X       |   X       |   X       |
|   HLS(aonly)  |   Stable  |   X       |   X       |   Stable  |   Stable  |
|   HTTP Server |   Stable  |   Stable  |   X       |   X       |   Stable  |

### Cluster

|   Feature     |   SRS     |   NGINX   | CRTMPD    | FMS       |   WOWZA   |
|   ----------- |   ------- |   -----   | --------- | --------  |   ------  |
|   RTMP Edge   |   Stable  |   X       |   X       |   Stable  |   X       |
|   RTMP Backup |   Stable  |   X       |   X       |   X       |   X       |
|   VHOST       |   Stable  |   X       |   X       |   Stable  |   Stable  |
|   Reload      |   Stable  |   X       |   X       |   X       |   X       |
|   Forward     |   Stable  |   X       |   X       |   X       |   X       |
|   ATC         |   Stable  |   X       |   X       |   X       |   X       |

### Stream Service

|   Feature     |   SRS     |   NGINX   | CRTMPD    | FMS       |   WOWZA   |
|   ----------- |   ------- |   -----   | --------- | --------  |   ------  |
|   DVR         |   Stable  |   Stable  |   X       |   X       |   Stable  |
|   Transcode   |   Stable  |   X       |   X       |   X       |   Stable  |
|   HTTP API    |   Stable  |   Stable  |   X       |   X       |   Stable  |
|   HTTP hooks  |   Stable  |   X       |   X       |   X       |   X       |
|   GopCache    |   Stable  |   X       |   X       |   Stable  |   X       |
|   Security    |   Stable  |   Stable  |   X       |   X       |   Stable  |
| Token Traverse|   Stable  |   X       |   X       |   Stable  |   X       |

### Efficiency

|   Feature     |   SRS     |   NGINX   | CRTMPD    | FMS       |   WOWZA   |
|   ----------- |   ------- |   -----   | --------- | --------  |   ------  |
|   Concurrency |   7.5k    |   3k      |   2k      |   2k      |   3k      |
|MultipleProcess| Experiment|   Stable  |   X       |   X       |   X       |
|   RTMP Latency|   0.1s    |   3s      |   3s      |   3s      |   3s      |
|   HLS Latency |   10s     |   30s     |   X       |   30s     |   30s     |

### Stream Caster

|   Feature     |   SRS     |   NGINX   | CRTMPD    | FMS       |   WOWZA   |
|   ----------- |   ------- |   -----   | --------- | --------  |   ------  |
|   Ingest      |   Stable  |   X       |   X       |   X       |   X       |
|   Push MPEGTS | Experiment|   X       |   X       |   X       |   Stable  |
|   Push RTSP   | Experiment|   X       |   Stable  |   X       |   Stable  |
| Push HTTP FLV | Experiment|   X       |   X       |   X       |   X       |

### Debug System

|   Feature     |   SRS     |   NGINX   | CRTMPD    | FMS       |   WOWZA   |
|   ----------- |   ------- |   -----   | --------- | --------  |   ------  |
|   BW check    |   Stable  |   X       |   X       |   X       |   X       |
| Tracable Log  |   Stable  |   X       |   X       |   X       |   X       |

### Docs

|   Feature     |   SRS     |   NGINX   | CRTMPD    | FMS       |   WOWZA   |
|   ----------- |   ------- |   -----   | --------- | --------  |   ------  |
|   Demos       |   Stable  |   X       |   X       |   X       |   X       |
|   WIKI(EN+CN) |   Stable  |  EN only  |   X       |   X       |   Stable  |

### Others 

|   Feature     |   SRS     |   NGINX   | CRTMPD    | FMS       |   WOWZA   |
|   ----------- |   ------- |   -----   | --------- | --------  |   ------  |
|   ARM/MIPS    |   Stable  |   Stable  |   X       |   X       |   X       |
| Client Library|   Stable  |   X       |   X       |   X       |   X       |

Remark:

1. Concurrency: The concurrency of single process.
1. MultipleProcess: SRS is single process, while [srs-dolphin][srs-dolphin] is a MultipleProcess SRS.
1. HLS aonly: The HLS audio only streaming delivery.
1. BW check: The bandwidth check.
1. Security: To allow or deny stream publish or play.
1. Reload: Nginx supports reload, but not nginx-rtmp.

## Performance

Performance benchmark history, on virtual box.

* See also: [Performance for x86/x64 Test Guide][v1_CN_Performance]
* See also: [Performance for RaspberryPi][v1_CN_RaspberryPi]
* About multiple-process performance, read [srs-dolphin][srs-dolphin].

### Play RTMP benchmark

The play RTMP benchmark by [SB][srs-bench]:


|   Update      |    SRS    |    Clients    |     Type      |    CPU    |  Memory   | Commit        |
| ------------- | --------- | ------------- | ------------- | --------- | --------  | ------------  |
|   2013-11-28  |   0.5.0   |   1.8k(1800)  |   players     |   90%     |   41M     |   -           |
|   2014-07-12  |   0.9.156 |   1.8k(1800)  |   players     |   68%     |   38MB    |   -           |
|   2014-07-12  |   0.9.156 |   2.7k(2700)  |   players     |   89%     |   61MB    |   [code][p6]  |
|   2014-11-11  |   1.0.5   |   2.7k(2700)  |   players     |   85%     |   66MB    |   -           |
|   2014-11-11  |   2.0.12  |   2.7k(2700)  |   players     |   85%     |   66MB    |   -           |
|   2014-11-12  |   2.0.14  |   2.7k(2700)  |   players     |   69%     |   59MB    |   -           |
|   2014-11-12  |   2.0.14  |   3.5k(3500)  |   players     |   95%     |   78MB    |   [code][p7]  |
|   2014-11-13  |   2.0.15  |   6.0k(6000)  |   players     |   82%     |   203MB   |   [code][p8]  |
|   2014-11-22  |   2.0.30  |   7.5k(7500)  |   players     |   87%     |   320MB   |   [code][p9]  |
|   2014-12-05  |   2.0.55  |   8.0k(8000)  |   players     |   89%     |   360MB   |   [code][p10] |
|   2014-12-05  |   2.0.57  |   9.0k(9000)  |   players     |   90%     |   468MB   |   [code][p11] |
|   2014-12-07  |   2.0.67  |   10k(10000)  |   players     |   95%     |   656MB   |   [code][p12] |

### Publish RTMP benchmark

The publish RTMP benchmark by [SB][srs-bench]:

|   Update      |    SRS    |    Clients    |     Type      |    CPU    |  Memory   | Commit        |
| ------------- | --------- | ------------- | ------------- | --------- | --------  | ------------  |
|   2014-12-03  |   1.0.10  |   1.2k(1200)  |   publishers  |   96%     |   43MB    |   -           |
|   2014-12-03  |   2.0.12  |   1.2k(1200)  |   publishers  |   96%     |   43MB    |   -           |
|   2014-12-03  |   2.0.47  |   1.2k(1200)  |   publishers  |   84%     |   76MB    |   [code][p1]  |
|   2014-12-03  |   2.0.47  |   1.4k(1400)  |   publishers  |   95%     |   140MB   |   -           |
|   2014-12-03  |   2.0.48  |   1.4k(1400)  |   publishers  |   95%     |   140MB   |   [code][p2]  |
|   2014-12-04  |   2.0.49  |   1.4k(1400)  |   publishers  |   68%     |   144MB   |   -           |
|   2014-12-04  |   2.0.49  |   2.5k(2500)  |   publishers  |   95%     |   404MB   |   [code][p3]  |
|   2014-12-04  |   2.0.51  |   2.5k(2500)  |   publishers  |   91%     |   259MB   |   [code][p4]  |
|   2014-12-04  |   2.0.52  |   4.0k(4000)  |   publishers  |   80%     |   331MB   |   [code][p5]  |

### Play HTTP FLV benchmark

The play HTTP FLV benchmark by [SB][srs-bench]:


|   Update      |    SRS    |    Clients    |     Type      |    CPU    |  Memory   | Commit        |
| ------------- | --------- | ------------- | ------------- | --------- | --------  | ------------  |
|   2014-05-24  |   2.0.167 |   1.0k(1000)  |   players     |   82%     |   86MB    |   -           |
|   2014-05-24  |   2.0.168 |   2.3k(2300)  |   players     |   92%     |   276MB   |   [code][p17] |
|   2014-05-24  |   2.0.169 |   3.0k(3000)  |   players     |   94%     |   188MB   |   [code][p18] |
|   2014-05-24  |   2.0.170 |   3.0k(3000)  |   players     |   89%     |   96MB    |   [code][p19] |
|   2014-05-25  |   2.0.171 |   6.0k(6000)  |   players     |   84%     |   297MB   |   [code][p20] |

### Latency benchmark

The latency between encoder and player with realtime config([CN][v2_CN_LowLatency], [EN][v2_EN_LowLatency]):
|   

|   Update      |    SRS    |    VP6    |  H.264    |  VP6+MP3  | H.264+MP3 |
| ------------- | --------- | --------- | --------- | --------- | --------  |
|   2014-12-03  |   1.0.10  |   0.4s    |   0.4s    |   0.9s    |   1.2s    |
|   2014-12-12  |   2.0.70  |[0.1s][p13]|[0.4s][p14]|   1.0s    |   0.9s    |
|   2014-12-16  |   2.0.72  |   0.1s    |   0.4s    |[0.8s][p15]|[0.6s][p16]|

> 2018-08-05, [c45f72e](https://github.com/ossrs/srs/commit/c45f72ef7bac9c7cf85b9125fc9e3aafd53f396f), Refine HTTP-FLV latency, support realtime mode. 2.0.252

We use FMLE as encoder for benchmark. The latency of server is 0.1s+, 
and the bottleneck is the encoder. For more information, read 
[bug #257][bug #257-c0].

### HLS overhead

About the HLS overhead of SRS, we compare the overhead to FLV by remux the HLS to FLV by ffmpeg.

| Bitrate   |   Duration    |   FLV(KB)     |   HLS(KB)     |   Overhead    |
| -------   |   --------    |   -------     |   --------    |   ---------   |
| 275kbps   |   600s        |   11144       |   12756       |   14.46%      |
| 260kbps   |   1860s       |   59344       |   68004       |   14.59%      |
| 697kbps   |   60s         |   5116        |   5476        |   7.03%       |
| 565kbps   |   453s        |   31316       |   33544       |   7.11%       |
| 565kbps   |   1813s       |   125224      |   134140      |   7.12%       |
| 861kbps   |   497s        |   52316       |   54924       |   4.98%       |
| 857kbps   |   1862s       |   195008      |   204768      |   5.00%       |
| 1301kbps  |   505s        |   80320       |   83676       |   4.17%       |
| 1312kbps  |   1915s       |   306920      |   319680      |   4.15%       |
| 2707kbps  |   600s        |   198356      |   204560      |   3.12%       |
| 2814kbps  |   1800s       |   618456      |   637660      |   3.10%       |
| 2828kbps  |   60s         |   20716       |   21356       |   3.08%       |
| 2599kbps  |   307s        |   97580       |   100672      |   3.16%       |
| 2640kbps  |   1283s       |   413880      |   426912      |   3.14%       |
| 5254kbps  |   71s         |   45832       |   47056       |   2.67%       |
| 5147kbps  |   370s        |   195040      |   200280      |   2.68%       |
| 5158kbps  |   1327s       |   835664      |   858092      |   2.68%       |

The HLS overhead is calc by: (HLS - FLV) / FLV * 100%.

The overhead is larger than this benchmark(48kbps audio is best overhead), for we fix the [#512][bug #512].

## Architecture
---

SRS always use the most simple architecture to support complex transaction.
* System arch: the system structure and arch.
* Modularity arch: the main modularity of SRS.
* Stream arch: the stream dispatch arch of SRS.

### System Architecture

```
+------------------------------------------------------+
|             SRS(Simple RTMP Server)                  |
+---------------+---------------+-----------+----------+
|   API/hook    |   Transcoder  |  HLS/HDS  | RTMP/FLV |
|  http-parser  |  FFMPEG/x264  |  NGINX/ts | protocol |
+---------------+---------------+-----------+----------+
|              Network(state-threads)                  |
+------------------------------------------------------+
|    All Linux/Unix(RHEL,CentOS,Ubuntu,Fedora...)      |
+------------------------------------------------------+
```

### Modularity Architecture

```
+------------------------------------------------------+
|             Main(srs/ingest-hls/librtmp)             |
+------------------------------------------------------+
|           App(Server/Client application)             |
+------------------------------------------------------+
|         RTMP/HTTP/RawStream(Protocol stack)          |
+------------------------------------------------------+
|      Kernel(depends on Core, provides error/log)     |
+------------------------------------------------------+
|         Core(depends only on system apis)            |
+------------------------------------------------------+
```

### Stream Architecture

```
                   +---------+              +----------+
                   | Publish |              |  Deliver |
                   +---|-----+              +----|-----+
+----------------------+-------------------------+----------------+
|     Input            | SRS(Simple RTMP Server) |     Output     |
+----------------------+-------------------------+----------------+
|    Encoder(1)        |   +-> RTMP/HDS  --------+-> Flash player |
|  (FMLE,FFMPEG, -rtmp-+->-+-> HLS/HTTP ---------+-> M3u8 player  |
|  Flash,XSPLIT,       |   +-> FLV/MP3/Aac/Ts ---+-> HTTP player  |
|  ......)             |   +-> Fowarder ---------+-> RTMP server  |
|                      |   +-> Transcoder -------+-> RTMP server  |
|                      |   +-> DVR --------------+-> Flv file     |
|                      |   +-> BandwidthTest ----+-> flash        |
+----------------------+                         |                |
|  MediaSource(2)      |                         |                |
|  (RTSP,FILE,         |                         |                |
|   HTTP,HLS,   --pull-+->-- Ingester(3) -(rtmp)-+-> SRS          |
|   Device,            |                         |                |
|   ......)            |                         |                |
+----------------------+                         |                |
|  MediaSource(2)      |                         |                |
|  (RTSP,FILE,         |                         |                |
|   HTTP,HLS,   --push-+->-- Streamer(4) -(rtmp)-+-> SRS          |
|   Device,            |                         |                |
|   ......)            |                         |                |
+----------------------+-------------------------+----------------+

Remark:
(1) Encoder: encoder must push RTMP stream to SRS server.
(2) MediaSource: any media source, which can be ingest by ffmpeg.
(3) Ingester: SRS will fork a process to run ffmpeg(or your application) 
to ingest any input to rtmp, push to SRS. Read <a href="https://github.com/ossrs/srs/wiki/v1_CN_Ingest">Ingest</a>.
(4) Streamer: SRS will listen for some protocol and accept stream push 
over some protocol and remux to rtmp to SRS. Read <a href="https://github.com/ossrs/srs/wiki/v2_CN_Streamer">Streamer</a>.
```