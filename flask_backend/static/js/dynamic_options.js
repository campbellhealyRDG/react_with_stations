$(document).ready(function(){
    $('#environment_filter, #toc_filter').change(function(){
        var environment_id = $('#environment_filter').val();
        var toc_id = $('#toc_filter').val();
        $.ajax({
            url: '/get_logical_groups',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({'environment_id': environment_id, 'toc_id': toc_id}),
            success: function(data){
                $('#logical_group_filter').empty();
                $('#logical_group_filter').append($('<option>', {
                    value: '',
                    text: 'No Selection'
                }));
                $.each(data, function(index, group){
                    $('#logical_group_filter').append($('<option>', {
                        value: group.id,
                        text: group.name
                    }));
                });
            }
        });
    });
});
