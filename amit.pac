function FindProxyForURL(url, host) {

    var privateIP = /^(0|10|127|192\.168|172\.1[6789]|172\.2[0-9]|172\.3[01]|169\.254|192\.88\.99)\.[0-9.]+$/;
    var resolved_ip = dnsResolve(host);
   // var country = "${COUNTRY}";

    /* Don't send non-FQDN or private IP auths to us */
    if (isPlainHostName(host) || isInNet(resolved_ip, "192.0.2.0","255.255.255.0") || privateIP.test(resolved_ip))
        return "DIRECT";

    /* FTP goes directly */
    if (url.substring(0,4) == "ftp:")
        return "DIRECT";
			
 /* test with ZPA */
    if (isInNet(resolved_ip, "100.64.0.0","255.255.0.0"))
        return "PROXY ${ZAPP_TUNNEL2_BYPASS}";
		
			
    /* Updates are directly accessible */
    if ((localHostOrDomainIs(host, "trust.zscaler.com")) && (url.substring(0,5) == "http:" || url.substring(0,6) == "https:"))
        return "DIRECT";
	
	/* for users of Canada if you want to direct traffic to only canada gateways*/
//	if (shExpMatch(country, "Canada")) {
//	 	return "PROXY ${COUNTRY_GATEWAY_FX}:80; PROXY ${COUNTRY_SECONDARY_GATEWAY_FX};DIRECT";
//	}

	/* for all users if you want to direct traffic to country gateways by default */
//	return "PROXY ${COUNTRY_GATEWAY_FX}:80; PROXY ${COUNTRY_SECONDARY_GATEWAY_FX};DIRECT";


    /* Default Traffic Forwarding for ISOLATION!!!. Forwarding to Zen on port 80, but you can use port 9400 also */
    return "PROXY ${GATEWAY_FX}:10330; PROXY ${SECONDARY_GATEWAY_FX}:10330; DIRECT";
}