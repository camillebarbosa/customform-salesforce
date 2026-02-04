/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 02-04-2026
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class CustomService {

    @AuraEnabled
    
    public static void saveRecord(Case record){
        if(record == null){
            throw new AuraHandledException('Registro Invalido');
        }
        upsert record;
        }
    }

