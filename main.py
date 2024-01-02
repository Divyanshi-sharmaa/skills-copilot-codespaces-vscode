import pandas as pd

def get_latest_flags(df):
    # Sort the dataframe by date in descending order
    df_sorted = df.sort_values('date', ascending=False)
    
    # Group by usubjid and select the first row for each group
    df_grouped = df_sorted.groupby('usubjid').first()
    
    # Forward fill the flag columns to propagate the latest non-null values
    df_filled = df_grouped.ffill()
    
    return df_filled
