import {createClient} from "@supabase/supabase-js";

const s_url = "https://nmonajyyqttqoxiwxxam.supabase.co";
const s_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tb25hanl5cXR0cW94aXd4eGFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM0MTAwNzQsImV4cCI6MjA0ODk4NjA3NH0.KhOAueVOK-8BXHrCqsmmr74YeYOx5a3nPd-gH_rAudc";

export const supabase = createClient(s_url,s_key)