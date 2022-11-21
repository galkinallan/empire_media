import axios from "axios";

const url = "https://www.fxempire.com/api/v1/en/crypto-coin/chart/candles/";

export const fetchRecentChanges = (params) => axios.get(url + params);
