// This file is auto-generated, don't edit it. Thanks.

using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

using Tea;
using Tea.Utils;

using Alipay.EasySDK.Marketing.OpenLife.Models;

namespace Alipay.EasySDK.Marketing.OpenLife
{
    public class Client 
    {
        protected Alipay.EasySDK.Kernel.Client _kernel;

        public Client(Alipay.EasySDK.Kernel.Client kernel)
        {
            this._kernel = kernel;
        }

        public AlipayOpenPublicMessageContentCreateResponse CreateImageTextContent(string title, string cover, string content, string contentComment, string ctype, string benefit, string extTags, string loginIds)
        {
            Dictionary<string, object> runtime_ = new Dictionary<string, object>
            {
                {"connectTimeout", 15000},
                {"readTimeout", 15000},
                {"retry", new Dictionary<string, int?>
                {
                    {"maxAttempts", 0},
                }},
            };

            TeaRequest _lastRequest = null;
            Exception _lastException = null;
            long _now = System.DateTime.Now.Millisecond;
            int _retryTimes = 0;
            while (TeaCore.AllowRetry((IDictionary) runtime_["retry"], _retryTimes, _now))
            {
                if (_retryTimes > 0)
                {
                    int backoffTime = TeaCore.GetBackoffTime((IDictionary)runtime_["backoff"], _retryTimes);
                    if (backoffTime > 0)
                    {
                        TeaCore.Sleep(backoffTime);
                    }
                }
                _retryTimes = _retryTimes + 1;
                try
                {
                    TeaRequest request_ = new TeaRequest();
                    Dictionary<string, string> systemParams = new Dictionary<string, string>
                    {
                        {"method", "alipay.open.public.message.content.create"},
                        {"app_id", this._kernel.GetConfig("appId")},
                        {"timestamp", this._kernel.GetTimestamp()},
                        {"format", "json"},
                        {"version", "1.0"},
                        {"alipay_sdk", this._kernel.GetSdkVersion()},
                        {"charset", "UTF-8"},
                        {"sign_type", this._kernel.GetConfig("signType")},
                        {"app_cert_sn", this._kernel.GetMerchantCertSN()},
                        {"alipay_root_cert_sn", this._kernel.GetAlipayRootCertSN()},
                    };
                    Dictionary<string, object> bizParams = new Dictionary<string, object>
                    {
                        {"title", title},
                        {"cover", cover},
                        {"content", content},
                        {"could_comment", contentComment},
                        {"ctype", ctype},
                        {"benefit", benefit},
                        {"ext_tags", extTags},
                        {"login_ids", loginIds},
                    };
                    Dictionary<string, string> textParams = new Dictionary<string, string>(){};
                    request_.Protocol = this._kernel.GetConfig("protocol");
                    request_.Method = "POST";
                    request_.Pathname = "/gateway.do";
                    request_.Headers = new Dictionary<string, string>
                    {
                        {"host", this._kernel.GetConfig("gatewayHost")},
                        {"content-type", "application/x-www-form-urlencoded;charset=utf-8"},
                    };
                    request_.Query = this._kernel.SortMap(TeaConverter.merge<string>
                    (
                        new Dictionary<string, string>()
                        {
                            {"sign", this._kernel.Sign(systemParams, bizParams, textParams, this._kernel.GetConfig("merchantPrivateKey"))},
                        },
                        systemParams,
                        textParams
                    ));
                    request_.Body = TeaCore.BytesReadable(this._kernel.ToUrlEncodedRequestBody(bizParams));
                    _lastRequest = request_;
                    TeaResponse response_ = TeaCore.DoAction(request_, runtime_);

                    Dictionary<string, object> respMap = this._kernel.ReadAsJson(response_, "alipay.open.public.message.content.create");
                    if (this._kernel.IsCertMode())
                    {
                        if (this._kernel.Verify(respMap, this._kernel.ExtractAlipayPublicKey(this._kernel.GetAlipayCertSN(respMap))))
                        {
                            return TeaModel.ToObject<AlipayOpenPublicMessageContentCreateResponse>(this._kernel.ToRespModel(respMap));
                        }
                    }
                    else
                    {
                        if (this._kernel.Verify(respMap, this._kernel.GetConfig("alipayPublicKey")))
                        {
                            return TeaModel.ToObject<AlipayOpenPublicMessageContentCreateResponse>(this._kernel.ToRespModel(respMap));
                        }
                    }
                    throw new TeaException(new Dictionary<string, string>
                    {
                        {"message", "????????????????????????????????????????????????????????????"},
                    });
                }
                catch (Exception e)
                {
                    if (TeaCore.IsRetryable(e))
                    {
                        _lastException = e;
                        continue;
                    }
                    throw e;
                }
            }

            throw new TeaUnretryableException(_lastRequest, _lastException);
        }

        public async Task<AlipayOpenPublicMessageContentCreateResponse> CreateImageTextContentAsync(string title, string cover, string content, string contentComment, string ctype, string benefit, string extTags, string loginIds)
        {
            Dictionary<string, object> runtime_ = new Dictionary<string, object>
            {
                {"connectTimeout", 15000},
                {"readTimeout", 15000},
                {"retry", new Dictionary<string, int?>
                {
                    {"maxAttempts", 0},
                }},
            };

            TeaRequest _lastRequest = null;
            Exception _lastException = null;
            long _now = System.DateTime.Now.Millisecond;
            int _retryTimes = 0;
            while (TeaCore.AllowRetry((IDictionary) runtime_["retry"], _retryTimes, _now))
            {
                if (_retryTimes > 0)
                {
                    int backoffTime = TeaCore.GetBackoffTime((IDictionary)runtime_["backoff"], _retryTimes);
                    if (backoffTime > 0)
                    {
                        TeaCore.Sleep(backoffTime);
                    }
                }
                _retryTimes = _retryTimes + 1;
                try
                {
                    TeaRequest request_ = new TeaRequest();
                    Dictionary<string, string> systemParams = new Dictionary<string, string>
                    {
                        {"method", "alipay.open.public.message.content.create"},
                        {"app_id", this._kernel.GetConfig("appId")},
                        {"timestamp", this._kernel.GetTimestamp()},
                        {"format", "json"},
                        {"version", "1.0"},
                        {"alipay_sdk", this._kernel.GetSdkVersion()},
                        {"charset", "UTF-8"},
                        {"sign_type", this._kernel.GetConfig("signType")},
                        {"app_cert_sn", this._kernel.GetMerchantCertSN()},
                        {"alipay_root_cert_sn", this._kernel.GetAlipayRootCertSN()},
                    };
                    Dictionary<string, object> bizParams = new Dictionary<string, object>
                    {
                        {"title", title},
                        {"cover", cover},
                        {"content", content},
                        {"could_comment", contentComment},
                        {"ctype", ctype},
                        {"benefit", benefit},
                        {"ext_tags", extTags},
                        {"login_ids", loginIds},
                    };
                    Dictionary<string, string> textParams = new Dictionary<string, string>(){};
                    request_.Protocol = this._kernel.GetConfig("protocol");
                    request_.Method = "POST";
                    request_.Pathname = "/gateway.do";
                    request_.Headers = new Dictionary<string, string>
                    {
                        {"host", this._kernel.GetConfig("gatewayHost")},
                        {"content-type", "application/x-www-form-urlencoded;charset=utf-8"},
                    };
                    request_.Query = this._kernel.SortMap(TeaConverter.merge<string>
                    (
                        new Dictionary<string, string>()
                        {
                            {"sign", this._kernel.Sign(systemParams, bizParams, textParams, this._kernel.GetConfig("merchantPrivateKey"))},
                        },
                        systemParams,
                        textParams
                    ));
                    request_.Body = TeaCore.BytesReadable(this._kernel.ToUrlEncodedRequestBody(bizParams));
                    _lastRequest = request_;
                    TeaResponse response_ = await TeaCore.DoActionAsync(request_, runtime_);

                    Dictionary<string, object> respMap = await this._kernel.ReadAsJsonAsync(response_, "alipay.open.public.message.content.create");
                    if (this._kernel.IsCertMode())
                    {
                        if (this._kernel.Verify(respMap, this._kernel.ExtractAlipayPublicKey(this._kernel.GetAlipayCertSN(respMap))))
                        {
                            return TeaModel.ToObject<AlipayOpenPublicMessageContentCreateResponse>(this._kernel.ToRespModel(respMap));
                        }
                    }
                    else
                    {
                        if (this._kernel.Verify(respMap, this._kernel.GetConfig("alipayPublicKey")))
                        {
                            return TeaModel.ToObject<AlipayOpenPublicMessageContentCreateResponse>(this._kernel.ToRespModel(respMap));
                        }
                    }
                    throw new TeaException(new Dictionary<string, string>
                    {
                        {"message", "????????????????????????????????????????????????????????????"},
                    });
                }
                catch (Exception e)
                {
                    if (TeaCore.IsRetryable(e))
                    {
                        _lastException = e;
                        continue;
                    }
                    throw e;
                }
            }

            throw new TeaUnretryableException(_lastRequest, _lastException);
        }

        public AlipayOpenPublicMessageContentModifyResponse ModifyImageTextContent(string contentId, string title, string cover, string content, string couldComment, string ctype, string benefit, string extTags, string loginIds)
        {
            Dictionary<string, object> runtime_ = new Dictionary<string, object>
            {
                {"connectTimeout", 15000},
                {"readTimeout", 15000},
                {"retry", new Dictionary<string, int?>
                {
                    {"maxAttempts", 0},
                }},
            };

            TeaRequest _lastRequest = null;
            Exception _lastException = null;
            long _now = System.DateTime.Now.Millisecond;
            int _retryTimes = 0;
            while (TeaCore.AllowRetry((IDictionary) runtime_["retry"], _retryTimes, _now))
            {
                if (_retryTimes > 0)
                {
                    int backoffTime = TeaCore.GetBackoffTime((IDictionary)runtime_["backoff"], _retryTimes);
                    if (backoffTime > 0)
                    {
                        TeaCore.Sleep(backoffTime);
                    }
                }
                _retryTimes = _retryTimes + 1;
                try
                {
                    TeaRequest request_ = new TeaRequest();
                    Dictionary<string, string> systemParams = new Dictionary<string, string>
                    {
                        {"method", "alipay.open.public.message.content.modify"},
                        {"app_id", this._kernel.GetConfig("appId")},
                        {"timestamp", this._kernel.GetTimestamp()},
                        {"format", "json"},
                        {"version", "1.0"},
                        {"alipay_sdk", this._kernel.GetSdkVersion()},
                        {"charset", "UTF-8"},
                        {"sign_type", this._kernel.GetConfig("signType")},
                        {"app_cert_sn", this._kernel.GetMerchantCertSN()},
                        {"alipay_root_cert_sn", this._kernel.GetAlipayRootCertSN()},
                    };
                    Dictionary<string, object> bizParams = new Dictionary<string, object>
                    {
                        {"content_id", contentId},
                        {"title", title},
                        {"cover", cover},
                        {"content", content},
                        {"could_comment", couldComment},
                        {"ctype", ctype},
                        {"benefit", benefit},
                        {"ext_tags", extTags},
                        {"login_ids", loginIds},
                    };
                    Dictionary<string, string> textParams = new Dictionary<string, string>(){};
                    request_.Protocol = this._kernel.GetConfig("protocol");
                    request_.Method = "POST";
                    request_.Pathname = "/gateway.do";
                    request_.Headers = new Dictionary<string, string>
                    {
                        {"host", this._kernel.GetConfig("gatewayHost")},
                        {"content-type", "application/x-www-form-urlencoded;charset=utf-8"},
                    };
                    request_.Query = this._kernel.SortMap(TeaConverter.merge<string>
                    (
                        new Dictionary<string, string>()
                        {
                            {"sign", this._kernel.Sign(systemParams, bizParams, textParams, this._kernel.GetConfig("merchantPrivateKey"))},
                        },
                        systemParams,
                        textParams
                    ));
                    request_.Body = TeaCore.BytesReadable(this._kernel.ToUrlEncodedRequestBody(bizParams));
                    _lastRequest = request_;
                    TeaResponse response_ = TeaCore.DoAction(request_, runtime_);

                    Dictionary<string, object> respMap = this._kernel.ReadAsJson(response_, "alipay.open.public.message.content.modify");
                    if (this._kernel.IsCertMode())
                    {
                        if (this._kernel.Verify(respMap, this._kernel.ExtractAlipayPublicKey(this._kernel.GetAlipayCertSN(respMap))))
                        {
                            return TeaModel.ToObject<AlipayOpenPublicMessageContentModifyResponse>(this._kernel.ToRespModel(respMap));
                        }
                    }
                    else
                    {
                        if (this._kernel.Verify(respMap, this._kernel.GetConfig("alipayPublicKey")))
                        {
                            return TeaModel.ToObject<AlipayOpenPublicMessageContentModifyResponse>(this._kernel.ToRespModel(respMap));
                        }
                    }
                    throw new TeaException(new Dictionary<string, string>
                    {
                        {"message", "????????????????????????????????????????????????????????????"},
                    });
                }
                catch (Exception e)
                {
                    if (TeaCore.IsRetryable(e))
                    {
                        _lastException = e;
                        continue;
                    }
                    throw e;
                }
            }

            throw new TeaUnretryableException(_lastRequest, _lastException);
        }

        public async Task<AlipayOpenPublicMessageContentModifyResponse> ModifyImageTextContentAsync(string contentId, string title, string cover, string content, string couldComment, string ctype, string benefit, string extTags, string loginIds)
        {
            Dictionary<string, object> runtime_ = new Dictionary<string, object>
            {
                {"connectTimeout", 15000},
                {"readTimeout", 15000},
                {"retry", new Dictionary<string, int?>
                {
                    {"maxAttempts", 0},
                }},
            };

            TeaRequest _lastRequest = null;
            Exception _lastException = null;
            long _now = System.DateTime.Now.Millisecond;
            int _retryTimes = 0;
            while (TeaCore.AllowRetry((IDictionary) runtime_["retry"], _retryTimes, _now))
            {
                if (_retryTimes > 0)
                {
                    int backoffTime = TeaCore.GetBackoffTime((IDictionary)runtime_["backoff"], _retryTimes);
                    if (backoffTime > 0)
                    {
                        TeaCore.Sleep(backoffTime);
                    }
                }
                _retryTimes = _retryTimes + 1;
                try
                {
                    TeaRequest request_ = new TeaRequest();
                    Dictionary<string, string> systemParams = new Dictionary<string, string>
                    {
                        {"method", "alipay.open.public.message.content.modify"},
                        {"app_id", this._kernel.GetConfig("appId")},
                        {"timestamp", this._kernel.GetTimestamp()},
                        {"format", "json"},
                        {"version", "1.0"},
                        {"alipay_sdk", this._kernel.GetSdkVersion()},
                        {"charset", "UTF-8"},
                        {"sign_type", this._kernel.GetConfig("signType")},
                        {"app_cert_sn", this._kernel.GetMerchantCertSN()},
                        {"alipay_root_cert_sn", this._kernel.GetAlipayRootCertSN()},
                    };
                    Dictionary<string, object> bizParams = new Dictionary<string, object>
                    {
                        {"content_id", contentId},
                        {"title", title},
                        {"cover", cover},
                        {"content", content},
                        {"could_comment", couldComment},
                        {"ctype", ctype},
                        {"benefit", benefit},
                        {"ext_tags", extTags},
                        {"login_ids", loginIds},
                    };
                    Dictionary<string, string> textParams = new Dictionary<string, string>(){};
                    request_.Protocol = this._kernel.GetConfig("protocol");
                    request_.Method = "POST";
                    request_.Pathname = "/gateway.do";
                    request_.Headers = new Dictionary<string, string>
                    {
                        {"host", this._kernel.GetConfig("gatewayHost")},
                        {"content-type", "application/x-www-form-urlencoded;charset=utf-8"},
                    };
                    request_.Query = this._kernel.SortMap(TeaConverter.merge<string>
                    (
                        new Dictionary<string, string>()
                        {
                            {"sign", this._kernel.Sign(systemParams, bizParams, textParams, this._kernel.GetConfig("merchantPrivateKey"))},
                        },
                        systemParams,
                        textParams
                    ));
                    request_.Body = TeaCore.BytesReadable(this._kernel.ToUrlEncodedRequestBody(bizParams));
                    _lastRequest = request_;
                    TeaResponse response_ = await TeaCore.DoActionAsync(request_, runtime_);

                    Dictionary<string, object> respMap = await this._kernel.ReadAsJsonAsync(response_, "alipay.open.public.message.content.modify");
                    if (this._kernel.IsCertMode())
                    {
                        if (this._kernel.Verify(respMap, this._kernel.ExtractAlipayPublicKey(this._kernel.GetAlipayCertSN(respMap))))
                        {
                            return TeaModel.ToObject<AlipayOpenPublicMessageContentModifyResponse>(this._kernel.ToRespModel(respMap));
                        }
                    }
                    else
                    {
                        if (this._kernel.Verify(respMap, this._kernel.GetConfig("alipayPublicKey")))
                        {
                            return TeaModel.ToObject<AlipayOpenPublicMessageContentModifyResponse>(this._kernel.ToRespModel(respMap));
                        }
                    }
                    throw new TeaException(new Dictionary<string, string>
                    {
                        {"message", "????????????????????????????????????????????????????????????"},
                    });
                }
                catch (Exception e)
                {
                    if (TeaCore.IsRetryable(e))
                    {
                        _lastException = e;
                        continue;
                    }
                    throw e;
                }
            }

            throw new TeaUnretryableException(_lastRequest, _lastException);
        }

        public AlipayOpenPublicMessageTotalSendResponse SendText(string text)
        {
            Dictionary<string, object> runtime_ = new Dictionary<string, object>
            {
                {"connectTimeout", 15000},
                {"readTimeout", 15000},
                {"retry", new Dictionary<string, int?>
                {
                    {"maxAttempts", 0},
                }},
            };

            TeaRequest _lastRequest = null;
            Exception _lastException = null;
            long _now = System.DateTime.Now.Millisecond;
            int _retryTimes = 0;
            while (TeaCore.AllowRetry((IDictionary) runtime_["retry"], _retryTimes, _now))
            {
                if (_retryTimes > 0)
                {
                    int backoffTime = TeaCore.GetBackoffTime((IDictionary)runtime_["backoff"], _retryTimes);
                    if (backoffTime > 0)
                    {
                        TeaCore.Sleep(backoffTime);
                    }
                }
                _retryTimes = _retryTimes + 1;
                try
                {
                    TeaRequest request_ = new TeaRequest();
                    Dictionary<string, string> systemParams = new Dictionary<string, string>
                    {
                        {"method", "alipay.open.public.message.total.send"},
                        {"app_id", this._kernel.GetConfig("appId")},
                        {"timestamp", this._kernel.GetTimestamp()},
                        {"format", "json"},
                        {"version", "1.0"},
                        {"alipay_sdk", this._kernel.GetSdkVersion()},
                        {"charset", "UTF-8"},
                        {"sign_type", this._kernel.GetConfig("signType")},
                        {"app_cert_sn", this._kernel.GetMerchantCertSN()},
                        {"alipay_root_cert_sn", this._kernel.GetAlipayRootCertSN()},
                    };
                    Text textObj = new Text
                    {
                        Title = "",
                        Content = text,
                    };
                    Dictionary<string, object> bizParams = new Dictionary<string, object>
                    {
                        {"msg_type", "text"},
                        {"text", textObj},
                    };
                    Dictionary<string, string> textParams = new Dictionary<string, string>(){};
                    request_.Protocol = this._kernel.GetConfig("protocol");
                    request_.Method = "POST";
                    request_.Pathname = "/gateway.do";
                    request_.Headers = new Dictionary<string, string>
                    {
                        {"host", this._kernel.GetConfig("gatewayHost")},
                        {"content-type", "application/x-www-form-urlencoded;charset=utf-8"},
                    };
                    request_.Query = this._kernel.SortMap(TeaConverter.merge<string>
                    (
                        new Dictionary<string, string>()
                        {
                            {"sign", this._kernel.Sign(systemParams, bizParams, textParams, this._kernel.GetConfig("merchantPrivateKey"))},
                        },
                        systemParams,
                        textParams
                    ));
                    request_.Body = TeaCore.BytesReadable(this._kernel.ToUrlEncodedRequestBody(bizParams));
                    _lastRequest = request_;
                    TeaResponse response_ = TeaCore.DoAction(request_, runtime_);

                    Dictionary<string, object> respMap = this._kernel.ReadAsJson(response_, "alipay.open.public.message.total.send");
                    if (this._kernel.IsCertMode())
                    {
                        if (this._kernel.Verify(respMap, this._kernel.ExtractAlipayPublicKey(this._kernel.GetAlipayCertSN(respMap))))
                        {
                            return TeaModel.ToObject<AlipayOpenPublicMessageTotalSendResponse>(this._kernel.ToRespModel(respMap));
                        }
                    }
                    else
                    {
                        if (this._kernel.Verify(respMap, this._kernel.GetConfig("alipayPublicKey")))
                        {
                            return TeaModel.ToObject<AlipayOpenPublicMessageTotalSendResponse>(this._kernel.ToRespModel(respMap));
                        }
                    }
                    throw new TeaException(new Dictionary<string, string>
                    {
                        {"message", "????????????????????????????????????????????????????????????"},
                    });
                }
                catch (Exception e)
                {
                    if (TeaCore.IsRetryable(e))
                    {
                        _lastException = e;
                        continue;
                    }
                    throw e;
                }
            }

            throw new TeaUnretryableException(_lastRequest, _lastException);
        }

        public async Task<AlipayOpenPublicMessageTotalSendResponse> SendTextAsync(string text)
        {
            Dictionary<string, object> runtime_ = new Dictionary<string, object>
            {
                {"connectTimeout", 15000},
                {"readTimeout", 15000},
                {"retry", new Dictionary<string, int?>
                {
                    {"maxAttempts", 0},
                }},
            };

            TeaRequest _lastRequest = null;
            Exception _lastException = null;
            long _now = System.DateTime.Now.Millisecond;
            int _retryTimes = 0;
            while (TeaCore.AllowRetry((IDictionary) runtime_["retry"], _retryTimes, _now))
            {
                if (_retryTimes > 0)
                {
                    int backoffTime = TeaCore.GetBackoffTime((IDictionary)runtime_["backoff"], _retryTimes);
                    if (backoffTime > 0)
                    {
                        TeaCore.Sleep(backoffTime);
                    }
                }
                _retryTimes = _retryTimes + 1;
                try
                {
                    TeaRequest request_ = new TeaRequest();
                    Dictionary<string, string> systemParams = new Dictionary<string, string>
                    {
                        {"method", "alipay.open.public.message.total.send"},
                        {"app_id", this._kernel.GetConfig("appId")},
                        {"timestamp", this._kernel.GetTimestamp()},
                        {"format", "json"},
                        {"version", "1.0"},
                        {"alipay_sdk", this._kernel.GetSdkVersion()},
                        {"charset", "UTF-8"},
                        {"sign_type", this._kernel.GetConfig("signType")},
                        {"app_cert_sn", this._kernel.GetMerchantCertSN()},
                        {"alipay_root_cert_sn", this._kernel.GetAlipayRootCertSN()},
                    };
                    Text textObj = new Text
                    {
                        Title = "",
                        Content = text,
                    };
                    Dictionary<string, object> bizParams = new Dictionary<string, object>
                    {
                        {"msg_type", "text"},
                        {"text", textObj},
                    };
                    Dictionary<string, string> textParams = new Dictionary<string, string>(){};
                    request_.Protocol = this._kernel.GetConfig("protocol");
                    request_.Method = "POST";
                    request_.Pathname = "/gateway.do";
                    request_.Headers = new Dictionary<string, string>
                    {
                        {"host", this._kernel.GetConfig("gatewayHost")},
                        {"content-type", "application/x-www-form-urlencoded;charset=utf-8"},
                    };
                    request_.Query = this._kernel.SortMap(TeaConverter.merge<string>
                    (
                        new Dictionary<string, string>()
                        {
                            {"sign", this._kernel.Sign(systemParams, bizParams, textParams, this._kernel.GetConfig("merchantPrivateKey"))},
                        },
                        systemParams,
                        textParams
                    ));
                    request_.Body = TeaCore.BytesReadable(this._kernel.ToUrlEncodedRequestBody(bizParams));
                    _lastRequest = request_;
                    TeaResponse response_ = await TeaCore.DoActionAsync(request_, runtime_);

                    Dictionary<string, object> respMap = await this._kernel.ReadAsJsonAsync(response_, "alipay.open.public.message.total.send");
                    if (this._kernel.IsCertMode())
                    {
                        if (this._kernel.Verify(respMap, this._kernel.ExtractAlipayPublicKey(this._kernel.GetAlipayCertSN(respMap))))
                        {
                            return TeaModel.ToObject<AlipayOpenPublicMessageTotalSendResponse>(this._kernel.ToRespModel(respMap));
                        }
                    }
                    else
                    {
                        if (this._kernel.Verify(respMap, this._kernel.GetConfig("alipayPublicKey")))
                        {
                            return TeaModel.ToObject<AlipayOpenPublicMessageTotalSendResponse>(this._kernel.ToRespModel(respMap));
                        }
                    }
                    throw new TeaException(new Dictionary<string, string>
                    {
                        {"message", "????????????????????????????????????????????????????????????"},
                    });
                }
                catch (Exception e)
                {
                    if (TeaCore.IsRetryable(e))
                    {
                        _lastException = e;
                        continue;
                    }
                    throw e;
                }
            }

            throw new TeaUnretryableException(_lastRequest, _lastException);
        }

        public AlipayOpenPublicMessageTotalSendResponse SendImageText(List<Article> articles)
        {
            Dictionary<string, object> runtime_ = new Dictionary<string, object>
            {
                {"connectTimeout", 15000},
                {"readTimeout", 15000},
                {"retry", new Dictionary<string, int?>
                {
                    {"maxAttempts", 0},
                }},
            };

            TeaRequest _lastRequest = null;
            Exception _lastException = null;
            long _now = System.DateTime.Now.Millisecond;
            int _retryTimes = 0;
            while (TeaCore.AllowRetry((IDictionary) runtime_["retry"], _retryTimes, _now))
            {
                if (_retryTimes > 0)
                {
                    int backoffTime = TeaCore.GetBackoffTime((IDictionary)runtime_["backoff"], _retryTimes);
                    if (backoffTime > 0)
                    {
                        TeaCore.Sleep(backoffTime);
                    }
                }
                _retryTimes = _retryTimes + 1;
                try
                {
                    TeaRequest request_ = new TeaRequest();
                    Dictionary<string, string> systemParams = new Dictionary<string, string>
                    {
                        {"method", "alipay.open.public.message.total.send"},
                        {"app_id", this._kernel.GetConfig("appId")},
                        {"timestamp", this._kernel.GetTimestamp()},
                        {"format", "json"},
                        {"version", "1.0"},
                        {"alipay_sdk", this._kernel.GetSdkVersion()},
                        {"charset", "UTF-8"},
                        {"sign_type", this._kernel.GetConfig("signType")},
                        {"app_cert_sn", this._kernel.GetMerchantCertSN()},
                        {"alipay_root_cert_sn", this._kernel.GetAlipayRootCertSN()},
                    };
                    Dictionary<string, object> bizParams = new Dictionary<string, object>
                    {
                        {"msg_type", "image-text"},
                        {"articles", articles},
                    };
                    Dictionary<string, string> textParams = new Dictionary<string, string>(){};
                    request_.Protocol = this._kernel.GetConfig("protocol");
                    request_.Method = "POST";
                    request_.Pathname = "/gateway.do";
                    request_.Headers = new Dictionary<string, string>
                    {
                        {"host", this._kernel.GetConfig("gatewayHost")},
                        {"content-type", "application/x-www-form-urlencoded;charset=utf-8"},
                    };
                    request_.Query = this._kernel.SortMap(TeaConverter.merge<string>
                    (
                        new Dictionary<string, string>()
                        {
                            {"sign", this._kernel.Sign(systemParams, bizParams, textParams, this._kernel.GetConfig("merchantPrivateKey"))},
                        },
                        systemParams,
                        textParams
                    ));
                    request_.Body = TeaCore.BytesReadable(this._kernel.ToUrlEncodedRequestBody(bizParams));
                    _lastRequest = request_;
                    TeaResponse response_ = TeaCore.DoAction(request_, runtime_);

                    Dictionary<string, object> respMap = this._kernel.ReadAsJson(response_, "alipay.open.public.message.total.send");
                    if (this._kernel.IsCertMode())
                    {
                        if (this._kernel.Verify(respMap, this._kernel.ExtractAlipayPublicKey(this._kernel.GetAlipayCertSN(respMap))))
                        {
                            return TeaModel.ToObject<AlipayOpenPublicMessageTotalSendResponse>(this._kernel.ToRespModel(respMap));
                        }
                    }
                    else
                    {
                        if (this._kernel.Verify(respMap, this._kernel.GetConfig("alipayPublicKey")))
                        {
                            return TeaModel.ToObject<AlipayOpenPublicMessageTotalSendResponse>(this._kernel.ToRespModel(respMap));
                        }
                    }
                    throw new TeaException(new Dictionary<string, string>
                    {
                        {"message", "????????????????????????????????????????????????????????????"},
                    });
                }
                catch (Exception e)
                {
                    if (TeaCore.IsRetryable(e))
                    {
                        _lastException = e;
                        continue;
                    }
                    throw e;
                }
            }

            throw new TeaUnretryableException(_lastRequest, _lastException);
        }

        public async Task<AlipayOpenPublicMessageTotalSendResponse> SendImageTextAsync(List<Article> articles)
        {
            Dictionary<string, object> runtime_ = new Dictionary<string, object>
            {
                {"connectTimeout", 15000},
                {"readTimeout", 15000},
                {"retry", new Dictionary<string, int?>
                {
                    {"maxAttempts", 0},
                }},
            };

            TeaRequest _lastRequest = null;
            Exception _lastException = null;
            long _now = System.DateTime.Now.Millisecond;
            int _retryTimes = 0;
            while (TeaCore.AllowRetry((IDictionary) runtime_["retry"], _retryTimes, _now))
            {
                if (_retryTimes > 0)
                {
                    int backoffTime = TeaCore.GetBackoffTime((IDictionary)runtime_["backoff"], _retryTimes);
                    if (backoffTime > 0)
                    {
                        TeaCore.Sleep(backoffTime);
                    }
                }
                _retryTimes = _retryTimes + 1;
                try
                {
                    TeaRequest request_ = new TeaRequest();
                    Dictionary<string, string> systemParams = new Dictionary<string, string>
                    {
                        {"method", "alipay.open.public.message.total.send"},
                        {"app_id", this._kernel.GetConfig("appId")},
                        {"timestamp", this._kernel.GetTimestamp()},
                        {"format", "json"},
                        {"version", "1.0"},
                        {"alipay_sdk", this._kernel.GetSdkVersion()},
                        {"charset", "UTF-8"},
                        {"sign_type", this._kernel.GetConfig("signType")},
                        {"app_cert_sn", this._kernel.GetMerchantCertSN()},
                        {"alipay_root_cert_sn", this._kernel.GetAlipayRootCertSN()},
                    };
                    Dictionary<string, object> bizParams = new Dictionary<string, object>
                    {
                        {"msg_type", "image-text"},
                        {"articles", articles},
                    };
                    Dictionary<string, string> textParams = new Dictionary<string, string>(){};
                    request_.Protocol = this._kernel.GetConfig("protocol");
                    request_.Method = "POST";
                    request_.Pathname = "/gateway.do";
                    request_.Headers = new Dictionary<string, string>
                    {
                        {"host", this._kernel.GetConfig("gatewayHost")},
                        {"content-type", "application/x-www-form-urlencoded;charset=utf-8"},
                    };
                    request_.Query = this._kernel.SortMap(TeaConverter.merge<string>
                    (
                        new Dictionary<string, string>()
                        {
                            {"sign", this._kernel.Sign(systemParams, bizParams, textParams, this._kernel.GetConfig("merchantPrivateKey"))},
                        },
                        systemParams,
                        textParams
                    ));
                    request_.Body = TeaCore.BytesReadable(this._kernel.ToUrlEncodedRequestBody(bizParams));
                    _lastRequest = request_;
                    TeaResponse response_ = await TeaCore.DoActionAsync(request_, runtime_);

                    Dictionary<string, object> respMap = await this._kernel.ReadAsJsonAsync(response_, "alipay.open.public.message.total.send");
                    if (this._kernel.IsCertMode())
                    {
                        if (this._kernel.Verify(respMap, this._kernel.ExtractAlipayPublicKey(this._kernel.GetAlipayCertSN(respMap))))
                        {
                            return TeaModel.ToObject<AlipayOpenPublicMessageTotalSendResponse>(this._kernel.ToRespModel(respMap));
                        }
                    }
                    else
                    {
                        if (this._kernel.Verify(respMap, this._kernel.GetConfig("alipayPublicKey")))
                        {
                            return TeaModel.ToObject<AlipayOpenPublicMessageTotalSendResponse>(this._kernel.ToRespModel(respMap));
                        }
                    }
                    throw new TeaException(new Dictionary<string, string>
                    {
                        {"message", "????????????????????????????????????????????????????????????"},
                    });
                }
                catch (Exception e)
                {
                    if (TeaCore.IsRetryable(e))
                    {
                        _lastException = e;
                        continue;
                    }
                    throw e;
                }
            }

            throw new TeaUnretryableException(_lastRequest, _lastException);
        }

        public AlipayOpenPublicMessageSingleSendResponse SendSingleMessage(string toUserId, Template template)
        {
            template.Validate();
            Dictionary<string, object> runtime_ = new Dictionary<string, object>
            {
                {"connectTimeout", 15000},
                {"readTimeout", 15000},
                {"retry", new Dictionary<string, int?>
                {
                    {"maxAttempts", 0},
                }},
            };

            TeaRequest _lastRequest = null;
            Exception _lastException = null;
            long _now = System.DateTime.Now.Millisecond;
            int _retryTimes = 0;
            while (TeaCore.AllowRetry((IDictionary) runtime_["retry"], _retryTimes, _now))
            {
                if (_retryTimes > 0)
                {
                    int backoffTime = TeaCore.GetBackoffTime((IDictionary)runtime_["backoff"], _retryTimes);
                    if (backoffTime > 0)
                    {
                        TeaCore.Sleep(backoffTime);
                    }
                }
                _retryTimes = _retryTimes + 1;
                try
                {
                    TeaRequest request_ = new TeaRequest();
                    Dictionary<string, string> systemParams = new Dictionary<string, string>
                    {
                        {"method", "alipay.open.public.message.single.send"},
                        {"app_id", this._kernel.GetConfig("appId")},
                        {"timestamp", this._kernel.GetTimestamp()},
                        {"format", "json"},
                        {"version", "1.0"},
                        {"alipay_sdk", this._kernel.GetSdkVersion()},
                        {"charset", "UTF-8"},
                        {"sign_type", this._kernel.GetConfig("signType")},
                        {"app_cert_sn", this._kernel.GetMerchantCertSN()},
                        {"alipay_root_cert_sn", this._kernel.GetAlipayRootCertSN()},
                    };
                    Dictionary<string, object> bizParams = new Dictionary<string, object>
                    {
                        {"to_user_id", toUserId},
                        {"template", template},
                    };
                    Dictionary<string, string> textParams = new Dictionary<string, string>(){};
                    request_.Protocol = this._kernel.GetConfig("protocol");
                    request_.Method = "POST";
                    request_.Pathname = "/gateway.do";
                    request_.Headers = new Dictionary<string, string>
                    {
                        {"host", this._kernel.GetConfig("gatewayHost")},
                        {"content-type", "application/x-www-form-urlencoded;charset=utf-8"},
                    };
                    request_.Query = this._kernel.SortMap(TeaConverter.merge<string>
                    (
                        new Dictionary<string, string>()
                        {
                            {"sign", this._kernel.Sign(systemParams, bizParams, textParams, this._kernel.GetConfig("merchantPrivateKey"))},
                        },
                        systemParams,
                        textParams
                    ));
                    request_.Body = TeaCore.BytesReadable(this._kernel.ToUrlEncodedRequestBody(bizParams));
                    _lastRequest = request_;
                    TeaResponse response_ = TeaCore.DoAction(request_, runtime_);

                    Dictionary<string, object> respMap = this._kernel.ReadAsJson(response_, "alipay.open.public.message.single.send");
                    if (this._kernel.IsCertMode())
                    {
                        if (this._kernel.Verify(respMap, this._kernel.ExtractAlipayPublicKey(this._kernel.GetAlipayCertSN(respMap))))
                        {
                            return TeaModel.ToObject<AlipayOpenPublicMessageSingleSendResponse>(this._kernel.ToRespModel(respMap));
                        }
                    }
                    else
                    {
                        if (this._kernel.Verify(respMap, this._kernel.GetConfig("alipayPublicKey")))
                        {
                            return TeaModel.ToObject<AlipayOpenPublicMessageSingleSendResponse>(this._kernel.ToRespModel(respMap));
                        }
                    }
                    throw new TeaException(new Dictionary<string, string>
                    {
                        {"message", "????????????????????????????????????????????????????????????"},
                    });
                }
                catch (Exception e)
                {
                    if (TeaCore.IsRetryable(e))
                    {
                        _lastException = e;
                        continue;
                    }
                    throw e;
                }
            }

            throw new TeaUnretryableException(_lastRequest, _lastException);
        }

        public async Task<AlipayOpenPublicMessageSingleSendResponse> SendSingleMessageAsync(string toUserId, Template template)
        {
            template.Validate();
            Dictionary<string, object> runtime_ = new Dictionary<string, object>
            {
                {"connectTimeout", 15000},
                {"readTimeout", 15000},
                {"retry", new Dictionary<string, int?>
                {
                    {"maxAttempts", 0},
                }},
            };

            TeaRequest _lastRequest = null;
            Exception _lastException = null;
            long _now = System.DateTime.Now.Millisecond;
            int _retryTimes = 0;
            while (TeaCore.AllowRetry((IDictionary) runtime_["retry"], _retryTimes, _now))
            {
                if (_retryTimes > 0)
                {
                    int backoffTime = TeaCore.GetBackoffTime((IDictionary)runtime_["backoff"], _retryTimes);
                    if (backoffTime > 0)
                    {
                        TeaCore.Sleep(backoffTime);
                    }
                }
                _retryTimes = _retryTimes + 1;
                try
                {
                    TeaRequest request_ = new TeaRequest();
                    Dictionary<string, string> systemParams = new Dictionary<string, string>
                    {
                        {"method", "alipay.open.public.message.single.send"},
                        {"app_id", this._kernel.GetConfig("appId")},
                        {"timestamp", this._kernel.GetTimestamp()},
                        {"format", "json"},
                        {"version", "1.0"},
                        {"alipay_sdk", this._kernel.GetSdkVersion()},
                        {"charset", "UTF-8"},
                        {"sign_type", this._kernel.GetConfig("signType")},
                        {"app_cert_sn", this._kernel.GetMerchantCertSN()},
                        {"alipay_root_cert_sn", this._kernel.GetAlipayRootCertSN()},
                    };
                    Dictionary<string, object> bizParams = new Dictionary<string, object>
                    {
                        {"to_user_id", toUserId},
                        {"template", template},
                    };
                    Dictionary<string, string> textParams = new Dictionary<string, string>(){};
                    request_.Protocol = this._kernel.GetConfig("protocol");
                    request_.Method = "POST";
                    request_.Pathname = "/gateway.do";
                    request_.Headers = new Dictionary<string, string>
                    {
                        {"host", this._kernel.GetConfig("gatewayHost")},
                        {"content-type", "application/x-www-form-urlencoded;charset=utf-8"},
                    };
                    request_.Query = this._kernel.SortMap(TeaConverter.merge<string>
                    (
                        new Dictionary<string, string>()
                        {
                            {"sign", this._kernel.Sign(systemParams, bizParams, textParams, this._kernel.GetConfig("merchantPrivateKey"))},
                        },
                        systemParams,
                        textParams
                    ));
                    request_.Body = TeaCore.BytesReadable(this._kernel.ToUrlEncodedRequestBody(bizParams));
                    _lastRequest = request_;
                    TeaResponse response_ = await TeaCore.DoActionAsync(request_, runtime_);

                    Dictionary<string, object> respMap = await this._kernel.ReadAsJsonAsync(response_, "alipay.open.public.message.single.send");
                    if (this._kernel.IsCertMode())
                    {
                        if (this._kernel.Verify(respMap, this._kernel.ExtractAlipayPublicKey(this._kernel.GetAlipayCertSN(respMap))))
                        {
                            return TeaModel.ToObject<AlipayOpenPublicMessageSingleSendResponse>(this._kernel.ToRespModel(respMap));
                        }
                    }
                    else
                    {
                        if (this._kernel.Verify(respMap, this._kernel.GetConfig("alipayPublicKey")))
                        {
                            return TeaModel.ToObject<AlipayOpenPublicMessageSingleSendResponse>(this._kernel.ToRespModel(respMap));
                        }
                    }
                    throw new TeaException(new Dictionary<string, string>
                    {
                        {"message", "????????????????????????????????????????????????????????????"},
                    });
                }
                catch (Exception e)
                {
                    if (TeaCore.IsRetryable(e))
                    {
                        _lastException = e;
                        continue;
                    }
                    throw e;
                }
            }

            throw new TeaUnretryableException(_lastRequest, _lastException);
        }

        public AlipayOpenPublicLifeMsgRecallResponse RecallMessage(string messageId)
        {
            Dictionary<string, object> runtime_ = new Dictionary<string, object>
            {
                {"connectTimeout", 15000},
                {"readTimeout", 15000},
                {"retry", new Dictionary<string, int?>
                {
                    {"maxAttempts", 0},
                }},
            };

            TeaRequest _lastRequest = null;
            Exception _lastException = null;
            long _now = System.DateTime.Now.Millisecond;
            int _retryTimes = 0;
            while (TeaCore.AllowRetry((IDictionary) runtime_["retry"], _retryTimes, _now))
            {
                if (_retryTimes > 0)
                {
                    int backoffTime = TeaCore.GetBackoffTime((IDictionary)runtime_["backoff"], _retryTimes);
                    if (backoffTime > 0)
                    {
                        TeaCore.Sleep(backoffTime);
                    }
                }
                _retryTimes = _retryTimes + 1;
                try
                {
                    TeaRequest request_ = new TeaRequest();
                    Dictionary<string, string> systemParams = new Dictionary<string, string>
                    {
                        {"method", "alipay.open.public.life.msg.recall"},
                        {"app_id", this._kernel.GetConfig("appId")},
                        {"timestamp", this._kernel.GetTimestamp()},
                        {"format", "json"},
                        {"version", "1.0"},
                        {"alipay_sdk", this._kernel.GetSdkVersion()},
                        {"charset", "UTF-8"},
                        {"sign_type", this._kernel.GetConfig("signType")},
                        {"app_cert_sn", this._kernel.GetMerchantCertSN()},
                        {"alipay_root_cert_sn", this._kernel.GetAlipayRootCertSN()},
                    };
                    Dictionary<string, object> bizParams = new Dictionary<string, object>
                    {
                        {"message_id", messageId},
                    };
                    Dictionary<string, string> textParams = new Dictionary<string, string>(){};
                    request_.Protocol = this._kernel.GetConfig("protocol");
                    request_.Method = "POST";
                    request_.Pathname = "/gateway.do";
                    request_.Headers = new Dictionary<string, string>
                    {
                        {"host", this._kernel.GetConfig("gatewayHost")},
                        {"content-type", "application/x-www-form-urlencoded;charset=utf-8"},
                    };
                    request_.Query = this._kernel.SortMap(TeaConverter.merge<string>
                    (
                        new Dictionary<string, string>()
                        {
                            {"sign", this._kernel.Sign(systemParams, bizParams, textParams, this._kernel.GetConfig("merchantPrivateKey"))},
                        },
                        systemParams,
                        textParams
                    ));
                    request_.Body = TeaCore.BytesReadable(this._kernel.ToUrlEncodedRequestBody(bizParams));
                    _lastRequest = request_;
                    TeaResponse response_ = TeaCore.DoAction(request_, runtime_);

                    Dictionary<string, object> respMap = this._kernel.ReadAsJson(response_, "alipay.open.public.life.msg.recall");
                    if (this._kernel.IsCertMode())
                    {
                        if (this._kernel.Verify(respMap, this._kernel.ExtractAlipayPublicKey(this._kernel.GetAlipayCertSN(respMap))))
                        {
                            return TeaModel.ToObject<AlipayOpenPublicLifeMsgRecallResponse>(this._kernel.ToRespModel(respMap));
                        }
                    }
                    else
                    {
                        if (this._kernel.Verify(respMap, this._kernel.GetConfig("alipayPublicKey")))
                        {
                            return TeaModel.ToObject<AlipayOpenPublicLifeMsgRecallResponse>(this._kernel.ToRespModel(respMap));
                        }
                    }
                    throw new TeaException(new Dictionary<string, string>
                    {
                        {"message", "????????????????????????????????????????????????????????????"},
                    });
                }
                catch (Exception e)
                {
                    if (TeaCore.IsRetryable(e))
                    {
                        _lastException = e;
                        continue;
                    }
                    throw e;
                }
            }

            throw new TeaUnretryableException(_lastRequest, _lastException);
        }

        public async Task<AlipayOpenPublicLifeMsgRecallResponse> RecallMessageAsync(string messageId)
        {
            Dictionary<string, object> runtime_ = new Dictionary<string, object>
            {
                {"connectTimeout", 15000},
                {"readTimeout", 15000},
                {"retry", new Dictionary<string, int?>
                {
                    {"maxAttempts", 0},
                }},
            };

            TeaRequest _lastRequest = null;
            Exception _lastException = null;
            long _now = System.DateTime.Now.Millisecond;
            int _retryTimes = 0;
            while (TeaCore.AllowRetry((IDictionary) runtime_["retry"], _retryTimes, _now))
            {
                if (_retryTimes > 0)
                {
                    int backoffTime = TeaCore.GetBackoffTime((IDictionary)runtime_["backoff"], _retryTimes);
                    if (backoffTime > 0)
                    {
                        TeaCore.Sleep(backoffTime);
                    }
                }
                _retryTimes = _retryTimes + 1;
                try
                {
                    TeaRequest request_ = new TeaRequest();
                    Dictionary<string, string> systemParams = new Dictionary<string, string>
                    {
                        {"method", "alipay.open.public.life.msg.recall"},
                        {"app_id", this._kernel.GetConfig("appId")},
                        {"timestamp", this._kernel.GetTimestamp()},
                        {"format", "json"},
                        {"version", "1.0"},
                        {"alipay_sdk", this._kernel.GetSdkVersion()},
                        {"charset", "UTF-8"},
                        {"sign_type", this._kernel.GetConfig("signType")},
                        {"app_cert_sn", this._kernel.GetMerchantCertSN()},
                        {"alipay_root_cert_sn", this._kernel.GetAlipayRootCertSN()},
                    };
                    Dictionary<string, object> bizParams = new Dictionary<string, object>
                    {
                        {"message_id", messageId},
                    };
                    Dictionary<string, string> textParams = new Dictionary<string, string>(){};
                    request_.Protocol = this._kernel.GetConfig("protocol");
                    request_.Method = "POST";
                    request_.Pathname = "/gateway.do";
                    request_.Headers = new Dictionary<string, string>
                    {
                        {"host", this._kernel.GetConfig("gatewayHost")},
                        {"content-type", "application/x-www-form-urlencoded;charset=utf-8"},
                    };
                    request_.Query = this._kernel.SortMap(TeaConverter.merge<string>
                    (
                        new Dictionary<string, string>()
                        {
                            {"sign", this._kernel.Sign(systemParams, bizParams, textParams, this._kernel.GetConfig("merchantPrivateKey"))},
                        },
                        systemParams,
                        textParams
                    ));
                    request_.Body = TeaCore.BytesReadable(this._kernel.ToUrlEncodedRequestBody(bizParams));
                    _lastRequest = request_;
                    TeaResponse response_ = await TeaCore.DoActionAsync(request_, runtime_);

                    Dictionary<string, object> respMap = await this._kernel.ReadAsJsonAsync(response_, "alipay.open.public.life.msg.recall");
                    if (this._kernel.IsCertMode())
                    {
                        if (this._kernel.Verify(respMap, this._kernel.ExtractAlipayPublicKey(this._kernel.GetAlipayCertSN(respMap))))
                        {
                            return TeaModel.ToObject<AlipayOpenPublicLifeMsgRecallResponse>(this._kernel.ToRespModel(respMap));
                        }
                    }
                    else
                    {
                        if (this._kernel.Verify(respMap, this._kernel.GetConfig("alipayPublicKey")))
                        {
                            return TeaModel.ToObject<AlipayOpenPublicLifeMsgRecallResponse>(this._kernel.ToRespModel(respMap));
                        }
                    }
                    throw new TeaException(new Dictionary<string, string>
                    {
                        {"message", "????????????????????????????????????????????????????????????"},
                    });
                }
                catch (Exception e)
                {
                    if (TeaCore.IsRetryable(e))
                    {
                        _lastException = e;
                        continue;
                    }
                    throw e;
                }
            }

            throw new TeaUnretryableException(_lastRequest, _lastException);
        }

        public AlipayOpenPublicTemplateMessageIndustryModifyResponse SetIndustry(string primaryIndustryCode, string primaryIndustryName, string secondaryIndustryCode, string secondaryIndustryName)
        {
            Dictionary<string, object> runtime_ = new Dictionary<string, object>
            {
                {"connectTimeout", 15000},
                {"readTimeout", 15000},
                {"retry", new Dictionary<string, int?>
                {
                    {"maxAttempts", 0},
                }},
            };

            TeaRequest _lastRequest = null;
            Exception _lastException = null;
            long _now = System.DateTime.Now.Millisecond;
            int _retryTimes = 0;
            while (TeaCore.AllowRetry((IDictionary) runtime_["retry"], _retryTimes, _now))
            {
                if (_retryTimes > 0)
                {
                    int backoffTime = TeaCore.GetBackoffTime((IDictionary)runtime_["backoff"], _retryTimes);
                    if (backoffTime > 0)
                    {
                        TeaCore.Sleep(backoffTime);
                    }
                }
                _retryTimes = _retryTimes + 1;
                try
                {
                    TeaRequest request_ = new TeaRequest();
                    Dictionary<string, string> systemParams = new Dictionary<string, string>
                    {
                        {"method", "alipay.open.public.template.message.industry.modify"},
                        {"app_id", this._kernel.GetConfig("appId")},
                        {"timestamp", this._kernel.GetTimestamp()},
                        {"format", "json"},
                        {"version", "1.0"},
                        {"alipay_sdk", this._kernel.GetSdkVersion()},
                        {"charset", "UTF-8"},
                        {"sign_type", this._kernel.GetConfig("signType")},
                        {"app_cert_sn", this._kernel.GetMerchantCertSN()},
                        {"alipay_root_cert_sn", this._kernel.GetAlipayRootCertSN()},
                    };
                    Dictionary<string, object> bizParams = new Dictionary<string, object>
                    {
                        {"primary_industry_code", primaryIndustryCode},
                        {"primary_industry_name", primaryIndustryName},
                        {"secondary_industry_code", secondaryIndustryCode},
                        {"secondary_industry_name", secondaryIndustryName},
                    };
                    Dictionary<string, string> textParams = new Dictionary<string, string>(){};
                    request_.Protocol = this._kernel.GetConfig("protocol");
                    request_.Method = "POST";
                    request_.Pathname = "/gateway.do";
                    request_.Headers = new Dictionary<string, string>
                    {
                        {"host", this._kernel.GetConfig("gatewayHost")},
                        {"content-type", "application/x-www-form-urlencoded;charset=utf-8"},
                    };
                    request_.Query = this._kernel.SortMap(TeaConverter.merge<string>
                    (
                        new Dictionary<string, string>()
                        {
                            {"sign", this._kernel.Sign(systemParams, bizParams, textParams, this._kernel.GetConfig("merchantPrivateKey"))},
                        },
                        systemParams,
                        textParams
                    ));
                    request_.Body = TeaCore.BytesReadable(this._kernel.ToUrlEncodedRequestBody(bizParams));
                    _lastRequest = request_;
                    TeaResponse response_ = TeaCore.DoAction(request_, runtime_);

                    Dictionary<string, object> respMap = this._kernel.ReadAsJson(response_, "alipay.open.public.template.message.industry.modify");
                    if (this._kernel.IsCertMode())
                    {
                        if (this._kernel.Verify(respMap, this._kernel.ExtractAlipayPublicKey(this._kernel.GetAlipayCertSN(respMap))))
                        {
                            return TeaModel.ToObject<AlipayOpenPublicTemplateMessageIndustryModifyResponse>(this._kernel.ToRespModel(respMap));
                        }
                    }
                    else
                    {
                        if (this._kernel.Verify(respMap, this._kernel.GetConfig("alipayPublicKey")))
                        {
                            return TeaModel.ToObject<AlipayOpenPublicTemplateMessageIndustryModifyResponse>(this._kernel.ToRespModel(respMap));
                        }
                    }
                    throw new TeaException(new Dictionary<string, string>
                    {
                        {"message", "????????????????????????????????????????????????????????????"},
                    });
                }
                catch (Exception e)
                {
                    if (TeaCore.IsRetryable(e))
                    {
                        _lastException = e;
                        continue;
                    }
                    throw e;
                }
            }

            throw new TeaUnretryableException(_lastRequest, _lastException);
        }

        public async Task<AlipayOpenPublicTemplateMessageIndustryModifyResponse> SetIndustryAsync(string primaryIndustryCode, string primaryIndustryName, string secondaryIndustryCode, string secondaryIndustryName)
        {
            Dictionary<string, object> runtime_ = new Dictionary<string, object>
            {
                {"connectTimeout", 15000},
                {"readTimeout", 15000},
                {"retry", new Dictionary<string, int?>
                {
                    {"maxAttempts", 0},
                }},
            };

            TeaRequest _lastRequest = null;
            Exception _lastException = null;
            long _now = System.DateTime.Now.Millisecond;
            int _retryTimes = 0;
            while (TeaCore.AllowRetry((IDictionary) runtime_["retry"], _retryTimes, _now))
            {
                if (_retryTimes > 0)
                {
                    int backoffTime = TeaCore.GetBackoffTime((IDictionary)runtime_["backoff"], _retryTimes);
                    if (backoffTime > 0)
                    {
                        TeaCore.Sleep(backoffTime);
                    }
                }
                _retryTimes = _retryTimes + 1;
                try
                {
                    TeaRequest request_ = new TeaRequest();
                    Dictionary<string, string> systemParams = new Dictionary<string, string>
                    {
                        {"method", "alipay.open.public.template.message.industry.modify"},
                        {"app_id", this._kernel.GetConfig("appId")},
                        {"timestamp", this._kernel.GetTimestamp()},
                        {"format", "json"},
                        {"version", "1.0"},
                        {"alipay_sdk", this._kernel.GetSdkVersion()},
                        {"charset", "UTF-8"},
                        {"sign_type", this._kernel.GetConfig("signType")},
                        {"app_cert_sn", this._kernel.GetMerchantCertSN()},
                        {"alipay_root_cert_sn", this._kernel.GetAlipayRootCertSN()},
                    };
                    Dictionary<string, object> bizParams = new Dictionary<string, object>
                    {
                        {"primary_industry_code", primaryIndustryCode},
                        {"primary_industry_name", primaryIndustryName},
                        {"secondary_industry_code", secondaryIndustryCode},
                        {"secondary_industry_name", secondaryIndustryName},
                    };
                    Dictionary<string, string> textParams = new Dictionary<string, string>(){};
                    request_.Protocol = this._kernel.GetConfig("protocol");
                    request_.Method = "POST";
                    request_.Pathname = "/gateway.do";
                    request_.Headers = new Dictionary<string, string>
                    {
                        {"host", this._kernel.GetConfig("gatewayHost")},
                        {"content-type", "application/x-www-form-urlencoded;charset=utf-8"},
                    };
                    request_.Query = this._kernel.SortMap(TeaConverter.merge<string>
                    (
                        new Dictionary<string, string>()
                        {
                            {"sign", this._kernel.Sign(systemParams, bizParams, textParams, this._kernel.GetConfig("merchantPrivateKey"))},
                        },
                        systemParams,
                        textParams
                    ));
                    request_.Body = TeaCore.BytesReadable(this._kernel.ToUrlEncodedRequestBody(bizParams));
                    _lastRequest = request_;
                    TeaResponse response_ = await TeaCore.DoActionAsync(request_, runtime_);

                    Dictionary<string, object> respMap = await this._kernel.ReadAsJsonAsync(response_, "alipay.open.public.template.message.industry.modify");
                    if (this._kernel.IsCertMode())
                    {
                        if (this._kernel.Verify(respMap, this._kernel.ExtractAlipayPublicKey(this._kernel.GetAlipayCertSN(respMap))))
                        {
                            return TeaModel.ToObject<AlipayOpenPublicTemplateMessageIndustryModifyResponse>(this._kernel.ToRespModel(respMap));
                        }
                    }
                    else
                    {
                        if (this._kernel.Verify(respMap, this._kernel.GetConfig("alipayPublicKey")))
                        {
                            return TeaModel.ToObject<AlipayOpenPublicTemplateMessageIndustryModifyResponse>(this._kernel.ToRespModel(respMap));
                        }
                    }
                    throw new TeaException(new Dictionary<string, string>
                    {
                        {"message", "????????????????????????????????????????????????????????????"},
                    });
                }
                catch (Exception e)
                {
                    if (TeaCore.IsRetryable(e))
                    {
                        _lastException = e;
                        continue;
                    }
                    throw e;
                }
            }

            throw new TeaUnretryableException(_lastRequest, _lastException);
        }

        public AlipayOpenPublicSettingCategoryQueryResponse GetIndustry()
        {
            Dictionary<string, object> runtime_ = new Dictionary<string, object>
            {
                {"connectTimeout", 15000},
                {"readTimeout", 15000},
                {"retry", new Dictionary<string, int?>
                {
                    {"maxAttempts", 0},
                }},
            };

            TeaRequest _lastRequest = null;
            Exception _lastException = null;
            long _now = System.DateTime.Now.Millisecond;
            int _retryTimes = 0;
            while (TeaCore.AllowRetry((IDictionary) runtime_["retry"], _retryTimes, _now))
            {
                if (_retryTimes > 0)
                {
                    int backoffTime = TeaCore.GetBackoffTime((IDictionary)runtime_["backoff"], _retryTimes);
                    if (backoffTime > 0)
                    {
                        TeaCore.Sleep(backoffTime);
                    }
                }
                _retryTimes = _retryTimes + 1;
                try
                {
                    TeaRequest request_ = new TeaRequest();
                    Dictionary<string, string> systemParams = new Dictionary<string, string>
                    {
                        {"method", "alipay.open.public.setting.category.query"},
                        {"app_id", this._kernel.GetConfig("appId")},
                        {"timestamp", this._kernel.GetTimestamp()},
                        {"format", "json"},
                        {"version", "1.0"},
                        {"alipay_sdk", this._kernel.GetSdkVersion()},
                        {"charset", "UTF-8"},
                        {"sign_type", this._kernel.GetConfig("signType")},
                        {"app_cert_sn", this._kernel.GetMerchantCertSN()},
                        {"alipay_root_cert_sn", this._kernel.GetAlipayRootCertSN()},
                    };
                    Dictionary<string, object> bizParams = new Dictionary<string, object>(){};
                    Dictionary<string, string> textParams = new Dictionary<string, string>(){};
                    request_.Protocol = this._kernel.GetConfig("protocol");
                    request_.Method = "POST";
                    request_.Pathname = "/gateway.do";
                    request_.Headers = new Dictionary<string, string>
                    {
                        {"host", this._kernel.GetConfig("gatewayHost")},
                        {"content-type", "application/x-www-form-urlencoded;charset=utf-8"},
                    };
                    request_.Query = this._kernel.SortMap(TeaConverter.merge<string>
                    (
                        new Dictionary<string, string>()
                        {
                            {"sign", this._kernel.Sign(systemParams, bizParams, textParams, this._kernel.GetConfig("merchantPrivateKey"))},
                        },
                        systemParams,
                        textParams
                    ));
                    request_.Body = TeaCore.BytesReadable(this._kernel.ToUrlEncodedRequestBody(bizParams));
                    _lastRequest = request_;
                    TeaResponse response_ = TeaCore.DoAction(request_, runtime_);

                    Dictionary<string, object> respMap = this._kernel.ReadAsJson(response_, "alipay.open.public.setting.category.query");
                    if (this._kernel.IsCertMode())
                    {
                        if (this._kernel.Verify(respMap, this._kernel.ExtractAlipayPublicKey(this._kernel.GetAlipayCertSN(respMap))))
                        {
                            return TeaModel.ToObject<AlipayOpenPublicSettingCategoryQueryResponse>(this._kernel.ToRespModel(respMap));
                        }
                    }
                    else
                    {
                        if (this._kernel.Verify(respMap, this._kernel.GetConfig("alipayPublicKey")))
                        {
                            return TeaModel.ToObject<AlipayOpenPublicSettingCategoryQueryResponse>(this._kernel.ToRespModel(respMap));
                        }
                    }
                    throw new TeaException(new Dictionary<string, string>
                    {
                        {"message", "????????????????????????????????????????????????????????????"},
                    });
                }
                catch (Exception e)
                {
                    if (TeaCore.IsRetryable(e))
                    {
                        _lastException = e;
                        continue;
                    }
                    throw e;
                }
            }

            throw new TeaUnretryableException(_lastRequest, _lastException);
        }

        public async Task<AlipayOpenPublicSettingCategoryQueryResponse> GetIndustryAsync()
        {
            Dictionary<string, object> runtime_ = new Dictionary<string, object>
            {
                {"connectTimeout", 15000},
                {"readTimeout", 15000},
                {"retry", new Dictionary<string, int?>
                {
                    {"maxAttempts", 0},
                }},
            };

            TeaRequest _lastRequest = null;
            Exception _lastException = null;
            long _now = System.DateTime.Now.Millisecond;
            int _retryTimes = 0;
            while (TeaCore.AllowRetry((IDictionary) runtime_["retry"], _retryTimes, _now))
            {
                if (_retryTimes > 0)
                {
                    int backoffTime = TeaCore.GetBackoffTime((IDictionary)runtime_["backoff"], _retryTimes);
                    if (backoffTime > 0)
                    {
                        TeaCore.Sleep(backoffTime);
                    }
                }
                _retryTimes = _retryTimes + 1;
                try
                {
                    TeaRequest request_ = new TeaRequest();
                    Dictionary<string, string> systemParams = new Dictionary<string, string>
                    {
                        {"method", "alipay.open.public.setting.category.query"},
                        {"app_id", this._kernel.GetConfig("appId")},
                        {"timestamp", this._kernel.GetTimestamp()},
                        {"format", "json"},
                        {"version", "1.0"},
                        {"alipay_sdk", this._kernel.GetSdkVersion()},
                        {"charset", "UTF-8"},
                        {"sign_type", this._kernel.GetConfig("signType")},
                        {"app_cert_sn", this._kernel.GetMerchantCertSN()},
                        {"alipay_root_cert_sn", this._kernel.GetAlipayRootCertSN()},
                    };
                    Dictionary<string, object> bizParams = new Dictionary<string, object>(){};
                    Dictionary<string, string> textParams = new Dictionary<string, string>(){};
                    request_.Protocol = this._kernel.GetConfig("protocol");
                    request_.Method = "POST";
                    request_.Pathname = "/gateway.do";
                    request_.Headers = new Dictionary<string, string>
                    {
                        {"host", this._kernel.GetConfig("gatewayHost")},
                        {"content-type", "application/x-www-form-urlencoded;charset=utf-8"},
                    };
                    request_.Query = this._kernel.SortMap(TeaConverter.merge<string>
                    (
                        new Dictionary<string, string>()
                        {
                            {"sign", this._kernel.Sign(systemParams, bizParams, textParams, this._kernel.GetConfig("merchantPrivateKey"))},
                        },
                        systemParams,
                        textParams
                    ));
                    request_.Body = TeaCore.BytesReadable(this._kernel.ToUrlEncodedRequestBody(bizParams));
                    _lastRequest = request_;
                    TeaResponse response_ = await TeaCore.DoActionAsync(request_, runtime_);

                    Dictionary<string, object> respMap = await this._kernel.ReadAsJsonAsync(response_, "alipay.open.public.setting.category.query");
                    if (this._kernel.IsCertMode())
                    {
                        if (this._kernel.Verify(respMap, this._kernel.ExtractAlipayPublicKey(this._kernel.GetAlipayCertSN(respMap))))
                        {
                            return TeaModel.ToObject<AlipayOpenPublicSettingCategoryQueryResponse>(this._kernel.ToRespModel(respMap));
                        }
                    }
                    else
                    {
                        if (this._kernel.Verify(respMap, this._kernel.GetConfig("alipayPublicKey")))
                        {
                            return TeaModel.ToObject<AlipayOpenPublicSettingCategoryQueryResponse>(this._kernel.ToRespModel(respMap));
                        }
                    }
                    throw new TeaException(new Dictionary<string, string>
                    {
                        {"message", "????????????????????????????????????????????????????????????"},
                    });
                }
                catch (Exception e)
                {
                    if (TeaCore.IsRetryable(e))
                    {
                        _lastException = e;
                        continue;
                    }
                    throw e;
                }
            }

            throw new TeaUnretryableException(_lastRequest, _lastException);
        }

        
        /// <summary>
        /// ISV????????????????????????appAuthToken
        /// </summary>
        /// <param name="appAuthToken">?????????token</param>
        /// <returns>?????????????????????????????????</returns>
        public Client Agent(string appAuthToken)
        {
            _kernel.InjectTextParam("app_auth_token", appAuthToken);
            return this;
        }

        /// <summary>
        /// ???????????????????????????authToken
        /// </summary>
        /// <param name="authToken">????????????token</param>
        /// <returns>?????????????????????????????????</returns>
        public Client Auth(string authToken)
        {
            _kernel.InjectTextParam("auth_token", authToken);
            return this;
        }

        /// <summary>
        /// ?????????????????????????????????????????????????????????????????????Config??????????????????
        /// </summary>
        /// <param name="url">????????????????????????????????????https://www.test.com/callback </param>
        /// <returns>?????????????????????????????????</returns>
        public Client AsyncNotify(string url)
        {
            _kernel.InjectTextParam("notify_url", url);
            return this;
        }

        /// <summary>
        /// ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        /// </summary>
        /// <param name="testUrl">????????????????????????</param>
        /// <returns>?????????????????????????????????</returns>
        public Client Route(string testUrl)
        {
            _kernel.InjectTextParam("ws_service_url", testUrl);
            return this;
        }

        /// <summary>
        /// ??????API????????????????????????????????????????????????(biz_content????????????)
        /// </summary>
        /// <param name="key">???????????????????????????biz_content????????????????????????timeout_express???</param>
        /// <param name="value">
        /// ???????????????????????????????????????????????????JSON?????????
        /// ??????????????????????????????????????????String???Price???Date???SDK?????????????????????????????????string??????
        /// ???????????????????????????????????????????????????Number???????????????long??????
        /// ?????????????????????????????????????????????????????????Dictionary???????????????????????????
        /// ??????????????????????????????????????????List???????????????
        /// ????????????????????????????????????Dictionary???List????????????????????????????????????????????????List???List???????????????????????????????????????
        /// </param>
        /// <returns>?????????????????????????????????</returns>
        public Client Optional(string key, object value)
        {
            _kernel.InjectBizParam(key, value);
            return this;
        }

        /// <summary>
        /// ????????????API????????????????????????????????????????????????(biz_content????????????)
        /// optional?????????????????????
        /// </summary>
        /// <param name="optionalArgs">????????????????????????????????????key???value?????????key???value??????????????????optional???????????????</param>
        /// <returns>?????????????????????????????????</returns>
        public Client BatchOptional(Dictionary<string, object> optionalArgs)
        {
            foreach (var pair in optionalArgs)
            {
                _kernel.InjectBizParam(pair.Key, pair.Value);
            }
            return this;
        }
    }
}